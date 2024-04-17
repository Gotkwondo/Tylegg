import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { selectPositionColor, tyleColor } from 'styles/color';
import { WhiteBox } from 'styles/tyle';
import { agencyInfoInterface, agencyStateInterface } from 'types/newTyle';
import { SecondTitle, SubTitle, Title, Wrapper } from 'styles/newTyle';

interface SelectAgencyInterface {
  tyleInfoSetFun: (name: 'agencyEmail', data: any, positionsData?: any) => void,
}

const SelectAgency = ({ tyleInfoSetFun }: SelectAgencyInterface) => {

  const [agencyState, setAgencyState] = useState<agencyStateInterface>({
    agency: false,
    individual: false,
  });

  const [agencyInfo, setAgencyInfo] = useState<agencyInfoInterface>({
    name: '',
    email: '',
  });

  const clickAgencyState = (agencyType: string): void => {
    if (agencyType === 'agency') {
      setAgencyState({ agency: true, individual: false });
    }
    else if (agencyType === 'individual') {
      setAgencyState({ agency: false, individual: true });
    }
  };

  const onChangeAgencyInfo = (e: React.ChangeEvent<HTMLInputElement>, infoType: 'name' | 'email'): void => {
    setAgencyInfo({ ...agencyInfo, [infoType]: e.target.value });
  };

  useEffect(() => {
    if (!agencyState.agency) {
      setAgencyInfo({ name: '', email: '' });
    }
    if (agencyState.agency) {
      tyleInfoSetFun('agencyEmail', agencyInfo.email, "TEAM");
    }
  }, [agencyState.agency, agencyInfo.email]);

  useEffect(() => {
    if (agencyState.individual) {
      tyleInfoSetFun('agencyEmail', '', "PERSONAL");
    }
  }, [agencyState.individual]);

  return (
    <>
      <Wrapper>
        <Title>
          소속 에이전시 선택
          <SecondTitle>본인의 소속 에이전시를 선택하세요. (선택)</SecondTitle>
        </Title>
        <SubTitle>소속 에이전시가 있다면, 버튼 선택 후 이름과 이메일을 입력해주세요</SubTitle>
        <AgencyInfoBox agencyState={agencyState.agency} onClick={() => clickAgencyState('agency')}>
          <AgencyInnerArea agencyState={agencyState.agency} height={5}>
            소속 에이전시 이름 입력
            <AgencyInput
              placeholder='이름을 입력해주세요'
              type='text'
              value={agencyInfo.name}
              onChange={(e) => onChangeAgencyInfo(e, 'name')}
            />
          </AgencyInnerArea>
          <AgencyInnerArea agencyState={agencyState.agency} height={5}>
            소속 에이전시 이메일 입력
            <AgencyInput
              placeholder='이메일을 입력해주세요'
              type='text'
              value={agencyInfo.email}
              onChange={(e) => onChangeAgencyInfo(e, 'email')}
            />
          </AgencyInnerArea>
        </AgencyInfoBox >
        <SubTitle>소속 에이전시가 없다면, 아래 버튼을 클릭하세요</SubTitle>
        <AgencyInfoBox agencyState={agencyState.individual} onClick={() => clickAgencyState('individual')}>
          <AgencyInnerArea agencyState={agencyState.individual} height={1.5}>소속 에이전시가 없습니다.</AgencyInnerArea>
        </AgencyInfoBox>
      </Wrapper>
    </>
  )
};

const AgencyInfoBox = styled(WhiteBox) <{ agencyState: boolean }>`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 4px 4px 4px 0px ${selectPositionColor.blockShadowColor};
  color: ${({ agencyState }) => agencyState ? 'white' : WhiteBox};
  background-color: ${({ agencyState }) => agencyState ? 'black' : WhiteBox};
  

  &:hover {
    div, p {
      opacity: 1;
    }
  }
`;

const AgencyInnerArea = styled.div<{ agencyState: boolean, height: number }>`
  width: 100%;
  height: ${({ height }) => height + 'rem'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  opacity: ${({ agencyState }) => agencyState ? '100%' : '30%'}; // 여기는 조건부로 opacity 속성 조절하자
`;

const AgencyInput = styled.input`
  height: 1.5rem;
  margin-top: 0.3rem;
  border: 0px solid white;
  border-radius: 5px;
  background-color: ${tyleColor.infoGrayBack};
`;

export default SelectAgency;