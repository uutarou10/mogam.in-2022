import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'

type Props = {
  title: string
  body: string
  date: Date
  site: string,
  url: string
}

const Article: React.FC<Props> = ({title, body, date, site, url}) => {
  const formattedDate = React.useMemo(() => format(date, 'MMM do, yyyy'), [date])

  return (
    <Link href={url}>
      <a target={'_blank'} rel={'noreferrer noopener'} className={'block no-underline max-w-[31.5rem] hover:text-black'}>
        <article>
          <h2 className={'text-teal-500 truncate mb-4'}>{title}</h2>
          <div className={'text-xs truncate mb-1 leading-normal'}>{body}</div>
          <div className={'text-xs flex flex-row gap-2 text-gray-400 leading-normal'}>
            <time dateTime={date.toISOString()} data-testid={'time'}>{formattedDate}</time>
            <div>{site}</div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default Article
