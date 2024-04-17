/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { badgeColor, tyleColor } from "styles/color";
import { Badge, InfoBox } from "styles/tyle";
import { useRecoilValue } from "recoil";
import { tyleUserState } from "recoil/tyleInfo";

const MyInfo = () => {
  const userInfo = useRecoilValue(tyleUserState);
  return (
    <MyInfoBox>
      <Top>
        <BadgeArea>
          <UserBadge backColor={badgeColor.normal}>일반회원</UserBadge>
          <UserBadge backColor={badgeColor.lft}>LFT</UserBadge>
        </BadgeArea>
        <Name>{userInfo.name}</Name>
      </Top>
      <Bottom>
        <p>한줄 소개</p>
        <OneLiner>{userInfo.shortIntro}</OneLiner>
        <p>자기 소개</p>
        <Introduce>{userInfo.longIntro}</Introduce>
      </Bottom>
    </MyInfoBox>
  );
};

/* STYLE */

const MyInfoBox = styled(InfoBox)`
  width: 30%;
  height: 570px;
  overflow: scroll;

  @media (max-width: 800px) {
    display: flex;
    width: 90%;
    justify-content: space-between;
    height: 400px;
  }
  @media (max-width: 600px) {
    display: block;
    height: 570px;
  }
`;

const Top = styled.div`
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: auto;
  }
`;

const UserBadge = styled(Badge)`
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const BadgeArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Name = styled.div`
  font-size: 25px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const Bottom = styled.div``;

const OneLiner = styled.p`
  margin: 1rem 0;
  width: 100%;
  background-color: ${tyleColor.infoGrayBack};
  border-radius: 15px;
  padding: 1rem;
  border: none;
  font-size: 10px;
  word-wrap: break-word;
`;

const Introduce = styled.p`
  margin: 1rem 0;
  width: 100%;
  background-color: ${tyleColor.infoGrayBack};
  border-radius: 15px;
  padding: 1rem;
  border: none;
  font-size: 10px;
  word-wrap: break-word;
`;

export default MyInfo;
