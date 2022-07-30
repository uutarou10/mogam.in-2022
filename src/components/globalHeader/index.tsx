import React from 'react'
import Image from 'next/image'
import profileImage from './profile.jpg'

const GlobalHeader: React.FC = () => {
  return (
    <header className={'flex flex-row items-center gap-4'}>
      <Image src={profileImage} alt='' className={'rounded'} layout={"fixed"} width={64} height={64}/>
      <div className={'flex flex-col'}>
        <h1 className={'font-bold text-4xl leading-normal m-0 tracking-tight'}>Kota Nonaka</h1>
        <span>Frontend developer</span>
      </div>
    </header>
  )
}

export default GlobalHeader
