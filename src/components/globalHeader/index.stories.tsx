import GlobalHeader from ".";
import {ComponentMeta} from "@storybook/react";

export default {
  title: 'GlobalHeader',
  component: GlobalHeader
} as ComponentMeta<typeof GlobalHeader>

export const Normal = () => <GlobalHeader />
