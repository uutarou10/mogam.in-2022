import React from 'react'
import {GetStaticProps, NextPage} from 'next'
import GlobalHeader from "~/components/globalHeader";
import Navigation from "~/components/navigation";
import {PrismaClient} from '@mogamin/prisma'
import TabSelector, {Item as TabSelectorItem} from "~/components/tabSelector";
import ArticleComponent from '~/components/article'

type Article = {
  title: string,
  body: string | null,
  url: string,
  createdAt: number,
  media: {
    name: string
  }
}

type Medium = {
  name: string,
  url: string,
  articles: Article[]
}

const Articles: NextPage<{ media: Medium[] }> = ({media}) => {
  const [activeMediumName, setActiveMediumName] = React.useState('All')

  const mediumNames = React.useMemo(() => {
    return media.map(medium => medium.name)
  }, [media])

  const tabSelectorItems: TabSelectorItem[] = React.useMemo(() => {
    return [
      {label: 'All', isActive: activeMediumName === 'All', onClick: () => setActiveMediumName('All')},
      ...mediumNames.map(name => ({
        label: name,
        isActive: activeMediumName === name,
        onClick: () => setActiveMediumName(name)
      }))
    ]
  }, [activeMediumName, mediumNames])

  const activeArticles: Article[] = React.useMemo(() => {
    if (activeMediumName === 'All') {
      return media.reduce((prev, medium) => ([...prev, ...medium.articles]), [] as Article[])
    }

    return (media.find(medium => medium.name === activeMediumName)?.articles)?.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1) ?? []
  }, [activeMediumName, media])

  return (
    <div className={'flex flex-col gap-8 p-4 md:p-16'}>
      <GlobalHeader/>
      <Navigation items={[
        {label: 'About', linkTo: '/', isActive: false},
        {label: 'Articles', linkTo: '/articles', isActive: true},
      ]}/>
      <main className={'flex flex-col gap-8'}>
        <TabSelector items={tabSelectorItems} ariaLabel={'メディアの切り替え'} />
        {activeArticles.map(article => <ArticleComponent key={article.url} title={article.title} body={article.body ?? ''} site={article.media.name} date={new Date(article.createdAt)} url={article.url}/>)}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  media: Medium[]
}> = async () => {
  const prisma = new PrismaClient()

  try {
    const media = await prisma.media.findMany({
      select: {
        name: true,
        url: true,
        articles: {
          select: {
            title: true,
            body: true,
            url: true,
            media: {
              select: {
                name: true
              }
            },
            createdAt: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      },
      orderBy: {
        displayOrder: 'asc'
      }
    })

    return {
      props: {
        media: media.map(
          medium => (
            {
              ...medium,
              articles:
                medium.articles.map(
                  article => ({
                      ...article, createdAt: article.createdAt.getTime()
                    }
                  ))
            }))
      }
    }

  } catch (e) {
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

export default Articles
