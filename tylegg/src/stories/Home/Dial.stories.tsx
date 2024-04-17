// components/atoms/Button/Button.stories.tsx

import React from "react";
import { ComponentStory } from "@storybook/react";
import Wheel from "components/Home/Wheel";

export default {
  title: "Wheel",
  component: Wheel,
};

const Template: ComponentStory<typeof Wheel> = (args) => <Wheel {...args} />;

export const Large_PC = Template.bind({});
Large_PC.args = {
  windowWidth: 2500,
};

Large_PC.parameters = {
  viewport: {
    defaultViewport: "largepc",
  },
};

export const PC = Template.bind({});
PC.args = {
  windowWidth: 1600,
};

export const Tablet = Template.bind({});
Tablet.args = {
  windowWidth: 1000,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Mobile = Template.bind({});
Mobile.args = {
  windowWidth: 390,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone14",
  },
};
