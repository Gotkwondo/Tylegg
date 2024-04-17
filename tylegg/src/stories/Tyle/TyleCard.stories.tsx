// components/atoms/Button/Button.stories.tsx

import React from "react";
import { ComponentStory } from "@storybook/react";
import TyleCard from "components/Tyle/TyleCard";

export default {
  title: "TyleCard",
  component: TyleCard,
};

const Template: ComponentStory<typeof TyleCard> = (args) => (
  <TyleCard {...args} />
);

export const Big = Template.bind({});
Big.args = {
  width: "800",
  isLogin: true,
};

export const Medium = Template.bind({});
Medium.args = {
  width: "600",
  isLogin: true,
};

export const Small = Template.bind({});

Small.args = {
  width: "300",
  isLogin: true,
};
