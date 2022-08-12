import ProfileSection from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title: 'ProfileSection',
  component: ProfileSection
} as ComponentMeta<typeof ProfileSection>

const Template: ComponentStory<typeof ProfileSection> = (args) => {
  const {children, ...rest} = args

  return (
    <ProfileSection {...rest}>{children}</ProfileSection>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  heading: 'プロフィール',
  children: 'コンテンツ'
}
