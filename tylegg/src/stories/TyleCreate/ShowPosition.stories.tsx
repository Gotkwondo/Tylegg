import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import ShowPosition from 'components/TyleCreate/ShowPosition';
import { operatorSubmitInterface, positionSubmitInterface, selectedInfoInterface } from 'types/newTyle';
import { operatorImgData } from 'mocks/mockJson';

export default {
  title: "ShowPosition",
  component: ShowPosition,
};

const positions = [
  {
    position: '타격대',
    ePosition: 'duelist',
    explanation: '교전을 먼저 시작하고 적을 처치',
    operator: ['ZETT', 'REYNA', 'RAZE', 'PHOENIX', 'NEON', 'YORU', 'ISO'],
  },
  {
    position: '척후대',
    ePosition: 'initiator',
    explanation: '진입로 확보 및 적 팀 플레이 파악.',
    operator: ['BREACH', 'SOVA', 'SKYE', 'FADE', 'KAY_O', 'GEKKO'],
  },
  {
    position: '감시자',
    ePosition: 'sentinel',
    explanation: '지역 점유 및 팀 엄호 담당.',
    operator: ['SAGE', 'CYPHER', 'CHAMBER', 'KILLJOY', 'DEADLOCK'],
  },
  {
    position: '전략가',
    ePosition: 'controller',
    explanation: '위험 지역 분석 및 연막 설치.',
    operator: ['OMEN', 'VIPER', 'BRIMSTONE', 'ASTRA', 'HARBOR'],
  },
];
  


const Container: ComponentStory<typeof ShowPosition> = (args) => {
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
  return <ShowPosition positions={positions} tyleInfoSetFun={setSelectedInfoFunc} operatorImgData={operatorImgData} />
};

const Template: ComponentStory<typeof ShowPosition> = (args) => (
  <Container {...args} />
);

export const Big = Template.bind({});
// Big.args = {
//   width: 2500,
// }