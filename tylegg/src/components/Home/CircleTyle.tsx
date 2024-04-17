/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";

import { ReactComponent as BronzeMedalSVG } from "assets/Home/bronzeMedal.svg";
import { ReactComponent as SilverMedalSVG } from "assets/Home/silverMedal.svg";
import { ReactComponent as GoldMedalSVG } from "assets/Home/goldMedal.svg";
import { homeColor } from "styles/color";
import { searchType, userType } from "types/home";

interface Props {
  width: number;
  userType: userType;
  searchType: searchType;
}

const medalSVG = {
  gold: <GoldMedalSVG />,
  silver: <SilverMedalSVG />,
  bronze: <BronzeMedalSVG />,
};

const smallMedalSVG = {
  gold: <GoldMedalSVG width={20} />,
  silver: <SilverMedalSVG width={20} />,
  bronze: <BronzeMedalSVG width={20} />,
};

const MINIMUNWIDTH = 120;

const CircleTyle = ({ width, userType, searchType }: Props) => {
  // 나중에 유저정보를 받아서 가져올수 있도록 해야함

  return (
    <Wrapper width={width} searchType={searchType} userType={userType}>
      <TyleInfo width={width}>
        {width > 250 ? <UserImg></UserImg> : null}
        {width > 60 ? (
          <NickName width={width} userType={userType}>
            닉네임
            {width > MINIMUNWIDTH
              ? medalSVG[userType]
              : smallMedalSVG[userType]}
          </NickName>
        ) : null}
        {width > 60 ? null : smallMedalSVG[userType]}
        {width > 160 ? (
          <ProfileBtn>{`>눌러서 Tyle프로필 보기`}</ProfileBtn>
        ) : null}
        {width > 200 ? (
          <SelfIntroduce width={width}>
            한줄소개 쓰는 란 띄어쓰기 포함 30자 이내
          </SelfIntroduce>
        ) : null}
      </TyleInfo>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 9999px;
  box-shadow: 4px 4px 20px 0px ${({ searchType }) => homeColor[searchType]};
  margin-bottom: ${({ userType, width }) =>
    userType === "gold" ? (width > MINIMUNWIDTH ? 8 : 3) : 0}rem;
  margin-top: ${({ userType, width }) =>
    userType === "gold" ? 0 : width > MINIMUNWIDTH ? 8 : 3}rem;
  position: relative;
  cursor: pointer;
`;

const TyleInfo = styled.div<{ width: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ width }) => (width > 250 ? "" : "center")};
  top: ${({ width }) => (width > 250 ? "-10%" : "0")};
  left: 0%;
  width: 100%;
  height: 100%;
`;

const UserImg = styled.div`
  width: 30%;
  height: 30%;
  background-color: black; /* 임시 색상 */
  border-radius: 6px;
  margin-bottom: 1rem;
`;

const NickName = styled.div<{ userType: userType; width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ width }) => (width > MINIMUNWIDTH ? "25px" : "16px")};
  font-weight: 600;
`;
const ProfileBtn = styled.button`
  color: ${homeColor.findProfileBtn};
  font-size: 13px;
  font-weight: 600;
  margin: 2rem 0;
`;
const SelfIntroduce = styled.div<{ width: number }>`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  max-width: ${({ width }) => `${width * 0.7}px`};
`;

export default CircleTyle;
