import React from "react";
import { ComponentStory } from "@storybook/react";
import Header from "components/Header/Header";

export default {
  title: "헤더",
  component: Header,
};

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Large_PC = Template.bind({});
Large_PC.parameters = {
  viewport: {
    defaultViewport: "largepc",
  },
};

export const PC = Template.bind({});

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone14",
  },
};
