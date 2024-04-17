import { ImgInterface, operaotrsImgInterface, selectedInterface, selectedStateInterface } from 'types/newTyle';

/**
   * 포지션 선택시 선택한 포지션의 상태를 갱신해주는 함수
   * @param ePosition
   * @param selected
   * @param positionImg
   * @param selectedState
   */
export const selectPosition = (
  ePosition: string,
  selected: selectedInterface,
  positionImg: operaotrsImgInterface,
  selectedState: selectedStateInterface
) => {
  const existIdx = selected.position.findIndex(e => e === ePosition);
  // 선택한 포지션을 다시 눌렀을 때 제거해주는 로직
  if (existIdx !== -1) {
    const remainPos = selected.position.filter(e => e !== ePosition)[0];

    const newSelected = setSelected(selected, ePosition, remainPos);
    const newSelectesState = setSelectedState(ePosition, selectedState, positionImg, remainPos);
    return {
      newSelected: newSelected,
      newSelectesState: newSelectesState,
    };
  }
  // 포지션 추가 로직
  else if (selected.position.length < 2 && existIdx === -1) {
    const newSelected = setSelected(selected, ePosition, 'add');
    const newSelectesState = setSelectedState(ePosition, selectedState, positionImg, 'add');
    return {
      newSelected: newSelected,
      newSelectesState: newSelectesState,
    };
  }
  else {
    alert('포지션은 2개 까지 선택 가능합니다.(수정 예정)');
  }
};

const setSelected = (selected: selectedInterface, ePosition: string, remainPos?: string) => {
  return remainPos === 'add' ?
    {
      ...selected,
      position: [...selected.position, ePosition]
    }
    :
    {
      position: remainPos ? [remainPos] : [],
      operator: [...selected.operator.filter(e => e[0] !== ePosition)]
    }
}

const setSelectedState = (ePosition: string, selectedState: selectedStateInterface, positionImg: operaotrsImgInterface, remainPos?: string) => {
  return {
    position: { ...selectedState.position, [ePosition]: remainPos === 'add' ? true : false},
    operator: remainPos === 'add' ? [...positionImg[ePosition]] : (remainPos !== undefined ? positionImg[remainPos] : [])
  }
};
