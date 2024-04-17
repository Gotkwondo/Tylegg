/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { InfoBlackBox, InfoBox } from "styles/tyle";
import { useRecoilValue } from "recoil";
import { tyleUserState } from "recoil/tyleInfo";

const Agency = () => {
  const userInfo = useRecoilValue(tyleUserState);

  return (
    <Wrapper>
      <p>소속 에이전시</p>
      <p>email</p>
      <Email>{userInfo?.agencyEmail}</Email>
    </Wrapper>
  );
};

/* STYLE */

const Wrapper = styled(InfoBlackBox)`
  width: 30%;
  height: 450px;
  font-weight: 700;
  font-size: 30px;
  word-break: break-all;

  & > p:first-child {
    margin-bottom: 2rem;
  }

  @media (max-width: 800px) {
    width: 90%;
    & > p:nth-child(2) {
      font-size: 20px;
    }
  }
`;

const Email = styled(InfoBox)`
  margin-top: 1rem;
  font-size: 17px;
  white-space: pre-wrap;
  @media (max-width: 800px) {
    width: 90%;
    font-size: 12px;
  }
`;

export default Agency;
