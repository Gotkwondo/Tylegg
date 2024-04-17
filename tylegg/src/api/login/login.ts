import axios from "axios";
import { requestLoginApiType } from "api/login/type";

const API_URL = process.env.REACT_APP_API_URL;

export const requestLoginApi = async ({
  state,
  code,
  scope,
  prompt,
  nonce,
  returnState,
}: requestLoginApiType) => {
  const response = await axios({
    method: "post",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API_URL}/login/oauth2/code?state=${state}&code=${code}&scope=${scope}&prompt=${prompt}`,
    data: {
      state: returnState,
      nonce,
      clientId: "google",
    },
  });
  return response; // JSON 데이터 반환
};
