import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionHeading: React.FC<Props> = ({children}) => {
  return (
    <>
      <h2 className={'text-teal-600 font-bold text-xl'}>{children}</h2>
      <style jsx>{`
        h2:before {
          content: '/';
          font-weight: 900;
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}

export default SectionHeading
