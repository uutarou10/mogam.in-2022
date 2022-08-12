import React from 'react'
import Link from 'next/link'

type NavigationItem = {label: string, linkTo: string, isActive: boolean}
type Props = {
  items: NavigationItem[]
}

const NavigationItem: React.FC<{navigationItem: NavigationItem}> = ({navigationItem: {label, linkTo, isActive}}) => {
  const className = React.useMemo(() => {
    return [
      isActive ? 'font-bold border-b-2' : 'text-gray-400',
      'border-b-black',
      'dark:border-b-slate-100',
      'hover:text-black',
      'transition-colors'
    ].join(' ')
  }, [isActive])

  return (
    <li className={className}>
      <Link href={linkTo}><a className={'no-underline'}>{label}</a></Link>
    </li>
  )
}

const Navigation: React.FC<Props> = ({items}) => {
  return (
    <nav>
      <ul className={'flex flex-row gap-x-8 overflow-x-scroll list-none'}>
        {items.map((item, i) => <NavigationItem key={i} navigationItem={item} />)}
      </ul>
    </nav>
  )
}

export default Navigation

