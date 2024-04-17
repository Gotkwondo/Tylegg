import React from "react";
import { ComponentStory } from "@storybook/react";
import CircleTyle from "components/Home/CircleTyle";

export default {
  title: "CircleTyle",
  component: CircleTyle,
};

const Template: ComponentStory<typeof CircleTyle> = (args) => <CircleTyle {...args} />;

export const Large_PC = Template.bind({});
Large_PC.args = {
  width: 2500 * 0.2,
  userType: "gold",
  searchType: "views"
};

Large_PC.parameters = {
  viewport: {
    defaultViewport: "largepc",
  },
};

export const PC = Template.bind({});
PC.args = {
  width: 1600 * 0.2,
  userType: "gold",
  searchType: "views"
};

export const Tablet = Template.bind({});
Tablet.args = {
  width: 1000 * 0.2,
  userType: "gold",
  searchType: "views"
};
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Mobile = Template.bind({});
Mobile.args = {
  width: 390 * 0.2,
  userType: "gold",
  searchType: "views"
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone14",
  },
};
