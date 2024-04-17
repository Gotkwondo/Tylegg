import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import SelectProfileImg from 'components/TyleCreate/SelectProfileImg';
import { operatorSubmitInterface, positionSubmitInterface, selectedInfoInterface } from 'types/newTyle';

export default {
  title: "SelectProfileImg",
  component: SelectProfileImg,
};

const Container: ComponentStory<typeof SelectProfileImg> = (args) => {
  const [newTyleInfo, setNewTyleInfo] = useState<selectedInfoInterface>({
    "type": "",
    // "name": userInfo.name,
    "name": "testName",
    "champions": [],
    "positions": [],
    "agencyEmail": "",
    "avatarImage": "",
  });
  
  const setSelectedInfoFunc = (
    name: 'pos' | 'agencyEmail' | 'avatarImage',
    data: string | operatorSubmitInterface[],
    additionalData?: string | positionSubmitInterface[],
  ) => {
    const checkData = typeof data === "string";
    const checkAdditional = typeof additionalData === "string";
    if (name === 'pos' && !checkData && additionalData && !checkAdditional) {
      setNewTyleInfo({ ...newTyleInfo, ["champions"]: data, ["positions"]: additionalData });
    } else if (name === 'agencyEmail' && checkData && additionalData && checkAdditional) {
      setNewTyleInfo({ ...newTyleInfo, ["agencyEmail"]: data, ["type"]: additionalData });
    } else if (name === 'avatarImage' && typeof data === 'string') {
      setNewTyleInfo({ ...newTyleInfo, ["avatarImage"]: data });
    }
  }
  return <SelectProfileImg tyleInfoSetFun={setSelectedInfoFunc} />
};

const Template: ComponentStory<typeof SelectProfileImg> = (args) => (
  <Container {...args} />
);

export const Big = Template.bind({});