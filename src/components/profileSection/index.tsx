import React from 'react'
import SectionHeading from "../sectionHeading";

type Props = {
  children: React.ReactNode
  heading: string
}

const ProfileSection: React.FC<Props> = ({children, heading}) => {
  return (
    <section className={'flex flex-col gap-y-8'}>
      <SectionHeading>{heading}</SectionHeading>
      <div>
        {children}
      </div>
    </section>
  )
}

export default ProfileSection
