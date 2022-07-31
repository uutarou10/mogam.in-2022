import SectionHeading from ".";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title: 'SectionHeading',
  component: SectionHeading
} as ComponentMeta<typeof SectionHeading>

const Template: ComponentStory<typeof SectionHeading> = (args) => <SectionHeading {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: 'Heading (h2)'
}
