import axios from 'axios';
import { postTyleCreation } from 'api/tyle/api';
import { TyleCreateSubmitErrorInterface, selectedInfoInterface } from 'types/newTyle';

export const onClickSubmitTyleInfo = async (newTyleInfo: selectedInfoInterface) => {
  try {
    const res = await postTyleCreation(newTyleInfo);
    return res
  }
  catch (e: unknown) {
    if (e instanceof Error) {
      const errorMessage = (e as TyleCreateSubmitErrorInterface).response?.data.message;
      if (errorMessage === "요청에 데이터가 포함되어 있지 않습니다.") {
        alert('정보를 전부 입력하셨는지 확인해주세요.');
      }
      else if (errorMessage === "선택이 잘못된 챔피언을 요청하였습니다.") {
        alert('오퍼레이터 선택을 다시 확인해주세요.');
      }
    }
  }
}

export const getOperatorImgDataApi = async (position: string) => {
  const res = (await axios.get(`/champions/${position}`)).data;
  return res.champions;
}