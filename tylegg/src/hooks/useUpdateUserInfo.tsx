import { getUserInfoApi } from "api/tyle/api";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { initialUserInfo, userIdState, userInfoState } from "recoil/userInfo";
import { userInfoType } from "types/user";
import { decodeAuthorization } from "utils/decode";

/**
 * 업데이트된 정보의 userId,userInfo를 반환
 * @returns
 */
export const useUpdatedUserInfo = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    const curAuthorization = cookies.access_token;
    console.log(curAuthorization);
    if (!curAuthorization) return;
    const curUserId = decodeAuthorization(curAuthorization);
    if (curUserId) setUserId(curUserId);
  }, []);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      try {
        const newUserInfo = await getUserInfoApi();
        setUserInfo(newUserInfo as userInfoType);
      } catch (error) {
        setUserInfo(initialUserInfo);
      }
    })();
  }, [userId]);

  return [userId, userInfo] as const;
};
