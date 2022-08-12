import React from 'react'
import TabSelector from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title: 'TabSelector',
  component: TabSelector
} as ComponentMeta<typeof TabSelector>

const Template: ComponentStory<typeof TabSelector> = (args) => <TabSelector {...args} />

export const Default = Template.bind({})
Default.args = {
  ariaLabel: '表示媒体の切り替え',
  items: [
    {label: 'All', isActive: true, onClick: () => {}},
    {label: 'note', isActive: false, onClick: () => {}},
    {label: 'Zenn', isActive: false, onClick: () => {}},
    {label: 'Blog', isActive: false, onClick: () => {}},
    {label: 'Qiita', isActive: false, onClick: () => {}},
  ]
}
