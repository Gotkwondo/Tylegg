import axios from "axios";
import { selectedInfoInterface } from 'types/newTyle';
import { userInfoType } from "types/user";

const API_URL = process.env.REACT_APP_API_URL;

/**
 * 타일 이름으로 타일정보들을 가져오는 API
 * @param tyleName : string
 * @returns 타일정보 JSON 반환
 */
export const getTyleInfoApi = async ({ tyleName }: { tyleName: string }) => {
  const response = await axios({
    method: "get",
    url: `${API_URL}/tyles/${tyleName}`,
  });
  return response.data; // JSON 데이터 반환
};

/**
 * cookie에 저장된 access_token으로 유저정보 업데이트
 * @returns 유저정보 JSON 반환
 */
export const getUserInfoApi = async () => {
  const response = await axios({
    method: "get",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API_URL}/tyles/cards`,
  });
  return response.data as userInfoType; // JSON 데이터 반환
};

export const postTyleCreation = async (body: selectedInfoInterface) => {
  const response = await axios({
    method: "post",
    withCredentials: true,
    headers: {
      "Host": "api.moabam.com",
      "Cookie": "access_token = aaa.bbbb.ccc; refresh_token=ddd.eeee.fff; token- type=Bearer",
      "Accept": "application / json",
      "Content-Type": "application / json",
    },
    url: `/tyles`,
    data: body,
  })
  return response;
}