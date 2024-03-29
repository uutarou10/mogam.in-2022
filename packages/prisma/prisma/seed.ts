import {PrismaClient} from '@prisma/client'

const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

const createDummyArticles = (mediaName: string, size: number = 10) => {
  return [...Array(size)].map((_, i) => {
    return {
      title: `${mediaName}のダミー記事(${i})`,
      body: 'この記事はseedで生成されたダミーデータです。This article is dummy data that generated by seed script.',
      url: `https://example.com/${mediaName}/${genRanHex(12)}`,
      createdAt: new Date()
    }
  })
}

const prisma = new PrismaClient()

const main = async () => {
  const medias = [
    {name: 'note', url: 'note.com/mogamin3', displayOrder: 0},
    {name: 'Zenn', url: 'zenn.dev/mogamin', displayOrder: 1},
    {name: 'Blog', url: 'yurufuwa-tech.hatenablog.com', displayOrder: 2},
    {name: 'Qiita', url: 'qiita.com/mogamin3', displayOrder: 3},
  ]

  for (const media of medias) {
    await prisma.media.create({
      data: {
        ...media,
        articles: {
          create: createDummyArticles(media.name)
        }
      }
    })
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
