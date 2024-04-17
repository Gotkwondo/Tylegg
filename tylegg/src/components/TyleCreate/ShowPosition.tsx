import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { selectPositionColor, tyleColor} from 'styles/color';
import { WhiteBox } from 'styles/tyle';
import { operaotrsImgInterface, selectedStateInterface, selectedInterface, ImgInterface } from 'types/newTyle';
import { checkPosAndOp } from 'utils/checkPosAndOp';
import { SecondTitle, Title, Wrapper } from 'styles/newTyle';
import { selectPosition } from 'hooks/selectPosition';
import { selectOperator } from 'hooks/selectOperator';

interface positionsInterface {
  positions: {
    position: string,
    ePosition: string,
    explanation: string,
    operator: string[],
  }[],
  tyleInfoSetFun: (
    name: 'pos',
    data: {
      id: number,
      championLocation: string | null
    }[],
    positionsData?: {
        id: null,
        position: string,
        sequence: string | null,
    }[],
  ) => void,
  operatorImgData: {
    id: number,
    imageUrl: string
  }[][] | null,
}

const ShowPosition = ({ positions, tyleInfoSetFun, operatorImgData }: positionsInterface) => {
  const ePositions = positions.map(e => e.ePosition);
  // 객체형으로 선택됬는지 여부를 보관하기
  const [selectedState, setSelectedState] = useState<selectedStateInterface>({
    position: {
      duelist: false,
      recon: false,
      sentinel: false,
      controller: false,
    },
    operator: []
  });

  // API에 정보 전달을 위해 모아두는 상태?
  const [selected, setSelected] = useState<selectedInterface>({
    position: [],
    operator: [],
  });
  
  // 선택한 이미지들
  const [positionImg, setPositionImg] = useState<operaotrsImgInterface>({
    duelist: [],
    recon: [],
    sentinel: [],
    controller: [],
  });

  /**
   * 포지션 선택시 선택한 포지션의 상태를 갱신해주는 함수
   * @param ePosition
   * @param selected
   * @param positionImg
   * @param selectedState
   */
  const onclickPosition = (
    ePosition: string,
    selected: selectedInterface,
    positionImg: operaotrsImgInterface,
    selectedState: selectedStateInterface
  ) => {
    const testResult = selectPosition(ePosition, selected, positionImg, selectedState);
    if (testResult) {
      setSelected(testResult.newSelected)
      setSelectedState(testResult.newSelectesState)
    }
  }

  /**
   * 선택한 포지션의 오퍼레이터를 선택하는 함수이며 2개까지 선택 가능하다.
   * @param selected
   * @param positionImg
   * @param ePosition 
   * @param opName 
   * @param idx 
   */
  const onClickOperator = (
    selected: selectedInterface,
    positionImg: operaotrsImgInterface,
    position: string,
    name: string,
    id: number,
    idx: number
  ) => {
    const testResult = selectOperator(selected, positionImg, position, name, id, idx)
    if (testResult) {
      setSelected(testResult.newSelected);
      setPositionImg(testResult.newPositionImg);
    }
  }

  // 페이지 로드와 동시에 useQueries의 loading이 끝나면 이미지 정보들을 저장하는 부분
  useEffect(() => {
    const operatorsImgInfo: operaotrsImgInterface = {};
    if (operatorImgData) {
      operatorImgData.forEach((posInfo, idx) => {
        const position = ePositions[idx];
        const posImg = posInfo.map((opImg: { id: number, imageUrl: string }) => ({
          id: opImg.id,
          imageUrl: opImg.imageUrl,
          state: false,
          name: checkPosAndOp(opImg.imageUrl)[1],
          position: position,
        }));
        operatorsImgInfo[position] = posImg;
      });
      setPositionImg(operatorsImgInfo);
    }
  }, []);
  
  useEffect(() => {
    const champions: {
      id: number,
      championLocation: string | null
    }[] = selected.operator.map((el, idx) => {
      return {
        id: Number(el[2]),
        championLocation: idx === 1 ? "R" : "L"
      }
    });
    const positions = selected.position.map((el, idx) => {
      return {
        id: null,
        position: el.toUpperCase(),
        sequence: idx === 1 ? "SECOND" : "FIRST",
      }
    });
    if (champions.length === 1) champions.push({
      id: 3,
      championLocation: null,
    });

    tyleInfoSetFun('pos', champions, positions);
  }, []);
  
  return (
    <>
      <Wrapper>
        <Title>
          포지션 선택
          <SecondTitle>본인의 포지션(최대 2개)을 선택해주세요. 추후 변경 가능 (필수)</SecondTitle>
        </Title>
            
        <PositionArea>
          {positions.map((e, idx) => (
            <SelectBlock state={selectedState.position[e.ePosition]} key={idx} onClick={() => onclickPosition(e.ePosition, selected, positionImg, selectedState)}>
              <PositionTitle data-testid={`${e.ePosition}`}>{e.position}</PositionTitle>
              <PositionSubTitle>{e.explanation}</PositionSubTitle>
            </SelectBlock>
          ))}
        </PositionArea>
        <OperatorArea>
          {selectedState.operator.map((e, idx) => (
            <Operator state={e.state} key={checkPosAndOp(e.imageUrl)[1]} onClick={() => onClickOperator(selected, positionImg, e.position, e.name, e.id, idx)}>
              <img src={e.imageUrl} alt="" width={200} height={250} />
            </Operator>
          ))}
        </OperatorArea>
      </Wrapper>
    </>
  )
};

// 오퍼레이터를 이 컴포넌트로 옮겨 렌더링 하자. 이유는 역활 선택에 따른 오퍼들을 조건부 렌더할 예정이기에
const PositionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 3rem;
`;

const SelectBlock = styled(WhiteBox)<{state: boolean}>`
  width: 17%;
  height: 230px;
  box-shadow: 4px 4px 4px 0px ${selectPositionColor.blockShadowColor};
  cursor: pointer;
  background-color: ${({ state }) => state ? tyleColor.infoBlackBack : WhiteBox};
  color: ${({ state }) => state ? "white" : WhiteBox};
`;

const PositionTitle = styled.div`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PositionSubTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${selectPositionColor.greysubTitleColor};
`;

const OperatorArea = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Operator = styled.div<{state: boolean}>`
  display: flex;
  justify-content: center;
  width: 15%;
  height: 250px;
  cursor: pointer;
  opacity: ${({state}) => state ? "100%" : "20%"};
`;

export default ShowPosition;