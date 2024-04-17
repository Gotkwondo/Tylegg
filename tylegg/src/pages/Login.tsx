/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { mainColor } from "styles/color";
import LogoPNG from "assets/Logo/Logo.png";
import GooglePNG from "assets/Login/Google.png";
import qs from "qs";
import { requestLoginApi } from "api/login/login";
import { autholozationCodeType } from "types/login";
import { decodeAuthorization } from "utils/decode";
import { userIdState } from "recoil/userInfo";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CUR_URL = process.env.REACT_APP_CUR_URL;
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

  const [popup, setPopup] = useState<Window | null>(null);
  const [state, setState] = useState("");
  const [nonce, setNonce] = useState("");

  const [, setCookie] = useCookies(["access_token"]);

  const [, setUserId] = useRecoilState(userIdState);
  const navigate = useNavigate();

  /**
   * 구글 OAuth autholozation code를 받기위한 url생성
   * @param state
   * @param nonce
   * @returns
   */
  const makeLoginURL = (state: string, nonce: string) => {
    const queryStr = qs.stringify({
      client_id: CLIENT_ID,
      redirect_uri: CUR_URL + "/googlereturn",
      response_type: "code",
      scope: "openid profile email",
      state,
      nonce,
    });
    return AUTHORIZE_URI + "?" + queryStr;
  };

  const handleOpenPopup = () => {
    //화면 정중앙에 팝업 생성
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const state = crypto.randomUUID();
    const nonce = crypto.randomUUID();

    const loginUrl = makeLoginURL(state, nonce);
    //만든 url로 팝업 생성
    const popup = window.open(
      loginUrl,
      "로그인 중...",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    //후에 back으로 보내주기 위함
    setState(state);
    setNonce(nonce);
    setPopup(popup);
  };

  /**
   * 팝업에서 autholozation code정보를 보내면 실행되는 함수
   * @param e 팝업에서 전달받는 값들
   * @returns
   */
  const githubOAuthCodeListener = async (e: {
    origin: string;
    data: autholozationCodeType;
  }) => {
    // 동일한 Origin 의 이벤트만 처리하도록 제한
    // if (e.origin !== window.location.origin) {
    //   return;
    // }

    const { code, prompt, returnState, scope } = e.data;
    popup?.close();
    const res = await requestLoginApi({
      state,
      returnState,
      code,
      scope,
      prompt,
      nonce,
    });

    const authorization = res.headers.authorization;

    //만료시간 하루
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    setCookie("access_token", authorization, {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      secure: true,
      expires,
    });

    const id = decodeAuthorization(authorization);

    if (!id) {
      alert("로그인이 실패하였습니다.");
      return;
    }

    setUserId(id);
    setState("");
    setNonce("");
    setPopup(null);

    navigate("/");
  };

  // 로그인 팝입이 열리면 로그인 로직을 처리합니다.
  useEffect(() => {
    if (!popup) {
      return;
    }

    window.addEventListener("message", githubOAuthCodeListener, false);
    return () => {
      window.removeEventListener("message", githubOAuthCodeListener);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  return (
    <Wrapper>
      <LoginBox>
        <Logo src={LogoPNG} alt="로고이미지"></Logo>
        <p>로그인하고 이용하기</p>
        <GoogleLogin src={GooglePNG} onClick={handleOpenPopup}></GoogleLogin>
      </LoginBox>
    </Wrapper>
  );
};

/* STYLE */

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 250px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

const GoogleLogin = styled.img`
  cursor: pointer;
  margin-top: 8rem;
  width: 200px;
`;
export default Login;
