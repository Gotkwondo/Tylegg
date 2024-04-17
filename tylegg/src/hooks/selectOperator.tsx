import { operaotrsImgInterface, selectedInterface } from 'types/newTyle';

/**
   * 선택한 포지션의 오퍼레이터를 선택하는 함수이며 2개까지 선택 가능하다.
   * @param selected
   * @param positionImg
   * @param ePosition 
   * @param opName 
   * @param idx 
   */
export const selectOperator = (
  selected: selectedInterface,
  positionImg: operaotrsImgInterface,
  ePosition: string,
  opName: string,
  id: number,
  idx: number
) => {
  const existCheck = selected.operator.filter(e => e[1] === opName);
  const clickedOpPos = [...positionImg[ePosition]];

  // 선택한 포지션을 다시 눌렀을 때 제거해주는 로직
  if (existCheck.length !== 0) {
    clickedOpPos[idx].state = false;

    return {
      newSelected: {
        ...selected,
        operator: [...selected.operator].filter(e => e[1] !== opName)
      },
      newPositionImg: {
        ...positionImg,
        [ePosition]: clickedOpPos
      }
    };
  }
  else if (selected.operator.length < 2 && existCheck.length === 0) {
    clickedOpPos[idx].state = true;

    return {
      newSelected: {
        ...selected,
        operator: [...selected.operator, [ePosition, opName, `${id}`]]
      },
      newPositionImg: {
        ...positionImg,
        [ePosition]: clickedOpPos
      }
    };
  }
  else {
    alert('주 요원은 2개 까지 선택 가능합니다.(수정 예정)');
  }
};