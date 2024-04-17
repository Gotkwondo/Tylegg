// components/atoms/Button/Button.stories.tsx

import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import TyleCard from "components/UI/SliderInput";

export default {
  title: "SliderInput",
  component: TyleCard,
};

const Template: ComponentStory<typeof TyleCard> = (args) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <TyleCard {...args} value={value} setValue={setValue} />
      <p>값 : {value}</p>
    </>
  );
};

export const MAX10_decimal2 = Template.bind({});
MAX10_decimal2.args = {
  width: "50%",
  max: 10000,
  ratio: 0.001,
};

export const MAX10000_UP10 = Template.bind({});
MAX10000_UP10.args = {
  width: "50%",
  max: 1000,
  ratio: 10,
};

export const Small = Template.bind({});
Small.args = {
  width: "100px",
  max: 10000,
  ratio: 0.001,
};
