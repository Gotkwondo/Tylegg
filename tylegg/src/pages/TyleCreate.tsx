import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { selectPositionColor } from 'styles/color';
import useWindowSizeCustom from 'hooks/useWindowsSize';
import Header from 'components/Header/Header';
import ShowPosition from 'components/TyleCreate/ShowPosition';
import SelectAgency from 'components/TyleCreate/SelectAgency';
import SelectProfileImg from 'components/TyleCreate/SelectProfileImg';
import { Title } from 'styles/newTyle';
import { WhiteBox } from 'styles/tyle';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'recoil/userInfo';
import { operatorSubmitInterface, positionSubmitInterface, selectedInfoInterface } from 'types/newTyle';
import { useQueries } from '@tanstack/react-query';
import ScrollAnimationContainer from 'components/UI/ScrollAnimationContainer';
import { getOperatorImgDataApi, onClickSubmitTyleInfo } from 'api/newTyle/api';

const TyleCreate = () => {
  const windowSize = useWindowSizeCustom();
  const userInfo = useRecoilValue(userInfoState);
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
  const ePositions = positions.map(e => e.ePosition);

  // 병렬로 쿼리 동작
  const operatorImgData = useQueries({
    queries: ePositions.map((position, idx) => ({
      queryKey: [`image${idx}`, position],
      queryFn: async () => getOperatorImgDataApi(position),
      refetchOnWindowFocus: false, // 브라우저 창 포커스에 따른 자동 재요청 비활성화
      gcTime: 1000 * 60 * 5,  // query client에서 캐시된 데이터가 5분뒤에 삭제되도록 설정
      staleTime: 1000 * 60 * 5,    // 최초 호출 후  staleTime을 5분로로 설정
    })),
    combine: (result) => {
      return ({
        data: result.map(res => res.data),
        isLoading: result.map(res => res.isLoading)
      })
    }
  });
  const isLoadings = operatorImgData.isLoading.some(e => e === true);
  useEffect(() => {
    console.log(isLoadings)
  }, [])
  const [newTyleInfo, setNewTyleInfo] = useState<selectedInfoInterface>({
    "type": "",
    "name": userInfo.name,
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
  
  return (
    <Wrapper>
      <Header />
      <ContentsWrapper>
        <SelectArea>
          {
            isLoadings ?
              null
              :
              <>
                {/* 1. 주 포지션 및 주 캐릭터 선택 */}
                <ScrollAnimationContainer isFirst={true}>
                  <ShowPosition positions={positions} tyleInfoSetFun={setSelectedInfoFunc} operatorImgData={operatorImgData.data} />
                </ScrollAnimationContainer>
                {/* 2. 소속 에이전시 선택 */}
                <ScrollAnimationContainer isFirst={false}>
                  <SelectAgency tyleInfoSetFun={setSelectedInfoFunc} />
                </ScrollAnimationContainer>
                {/* 3. 프로필 사진 선택 */}
                <ScrollAnimationContainer isFirst={false}>
                  <SelectProfileImg tyleInfoSetFun={setSelectedInfoFunc} />
                </ScrollAnimationContainer>
                <SubmitArea>
                  <SubmitTitle>선택을 완료하시겠습니까?</SubmitTitle>
                  <SubmitButtonArea>
                    <SubmitButton width={10} onClick={() => onClickSubmitTyleInfo(newTyleInfo)}>예, 완료합니다.</SubmitButton>
                    <SubmitButton width={16}>아니요, 다시 확인하겠습니다.</SubmitButton>
                  </SubmitButtonArea>
                </SubmitArea>
              </>
          }
        </SelectArea>
      </ContentsWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 100vw;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  width: 100vw;
`;

const SelectArea = styled.div`
  width: 60vw;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const SubmitArea = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const SubmitTitle = styled(Title)`
  font-size: 2rem;
`;

const SubmitButtonArea = styled.div`
  width: 100%;
  display: flex;
  height: 2rem;
  justify-content: space-evenly;
  align-content: center;
`;

const SubmitButton = styled(WhiteBox) <{ width: number }>`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width + 'rem'};
  height: 2rem;
  font-weight: bold;
  box-shadow: 4px 4px 4px 0px ${selectPositionColor.blockShadowColor};
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;




export default TyleCreate;