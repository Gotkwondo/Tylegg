/**
 * authorization 코드를 분석
 * @param authorization
 * @returns userId가 반환됨(없으면 null)
 */
export const decodeAuthorization = (authorization: string) => {
  try {
    const baseDecode = atob(authorization);
    const userInfo = JSON.parse(atob(baseDecode.split(".")[1]));
    return userInfo.id;
  } catch (error) {
    return null;
  }
};
