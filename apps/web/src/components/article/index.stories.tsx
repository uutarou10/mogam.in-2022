import React from 'react'
import Article from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title: 'Article',
  component: Article
} as ComponentMeta<typeof Article>

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '数式機能実装の裏側',
  body: 'noteのカイゼンチームでエンジニアをしているKota Nonakaです。note社には今年の8月にJoinしました。もう4ヶ月経つことに驚きが隠せません。普段は趣味の写真のことばかり書いているnoteですが、今日は今年カイゼンチームで実装した数式機能について技術の面からご紹介します。',
  date: new Date('2021-12-10T12:02:04.000+09:00'),
  site: 'note.com',
  url: 'https://note.com/mogamin3/n/ne9f048b238f7'
}
