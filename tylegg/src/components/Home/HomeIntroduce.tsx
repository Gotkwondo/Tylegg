/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { homeColor } from "styles/color";

import { ReactComponent as UserSVG } from "assets/Home/User.svg";
import { ReactComponent as DataSVG } from "assets/Home/DataTransfer.svg";
import { ReactComponent as PeopleSVG } from "assets/Icon/People.svg";
import { ReactComponent as SearchSVG } from "assets/Icon/Search.svg";

interface Props {
  windowWidth: number;
}

const HomeIntroduce = ({ windowWidth }: Props) => {
  return (
    <Wraaper windowWidth={windowWidth}>
      <Left>
        <IntroMent windowWidth={windowWidth}>
          <p>esports 구단 및 선수들, 관계자,</p>
          <p>esports를 좋아하는 사람 모두</p>
          <p>
            <Emphasis>Tyle.gg</Emphasis>로 소통해요.
          </p>
        </IntroMent>
        <User>
          <UserImgBox>
            <UserImg src="https://picsum.photos/60/60" />
          </UserImgBox>
          <UserRight>
            <p>
              <UserName>밥세공기</UserName>님 , 안녕하세요.
            </p>
            <UserBoxArea>
              <UserButton>MY 정보 수정</UserButton>
              <UserButton>구독/결제 확인</UserButton>
            </UserBoxArea>
          </UserRight>
        </User>
      </Left>
      <Right windowWidth={windowWidth}>
        <LeftBoxArea>
          <MyTyleBox>
            <Title>나의 Tyle</Title>
            <Description>
              <p>내 sTyle대로</p>
              <p>만드는</p>
            </Description>
            <BoxImg>
              <UserSVG width={"91px"} height={"102px"} />
            </BoxImg>
          </MyTyleBox>
          <ScreamBox>
            <Title>스크림 대기실</Title>
            <Description>
              <p>스크림 일정 관리하고</p>
              <p>원하는대로 생성하고</p>
            </Description>
            <BoxImg>
              <PeopleSVG />
              <DataSVG />
              <PeopleSVG />
            </BoxImg>
          </ScreamBox>
        </LeftBoxArea>
        <FindTyleBox windowWidth={windowWidth}>
          <Title>
            <p>Tyle</p>
            <p>찾기</p>
          </Title>
          <Description>
            <p>모두의 Tyle을</p>
            <p>한꺼번에</p>
          </Description>
          <BoxImg>
            <SearchSVG />
          </BoxImg>
        </FindTyleBox>
      </Right>
    </Wraaper>
  );
};

/* STYLE */
const Emphasis = styled.span`
  color: ${homeColor.empahsis};
`;

const Wraaper = styled.div<{ windowWidth: number }>`
  margin-top: 7rem;
  background: ${homeColor.background};
  display: flex;
  flex-direction: ${({ windowWidth }) =>
    windowWidth < 1000 ? "column" : "row"};
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  gap: 1rem;
`;

/* 왼쪽 */
const Left = styled.div``;
const IntroMent = styled.div<{ windowWidth: number }>`
  font-size: ${({ windowWidth }) => (windowWidth > 550 ? "40px" : "25px")};
  font-weight: 700;
  line-height: 48px;
`;
const User = styled.div`
  padding: 2rem 1rem;
  display: flex;
`;

// 추후 이미지로 바꿔야함
const UserImgBox = styled.div`
  width: 141px;
  height: 183px;
  border-radius: 10px;
  background: black;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const UserImg = styled.img`
  width: 100px;
  height: 120px;
  border-radius: 10px;
`;

const UserRight = styled.div`
  padding: 0.5rem 1rem;
  font-weight: 700;
  & p {
    font-size: 20px;
  }
`;
const UserName = styled(Emphasis)`
  font-size: 24px;
`;

const UserBoxArea = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
`;

const UserButton = styled.button`
  background-color: ${homeColor.empahsis};
  color: white;
  border-radius: 3px;
  padding: 0.2rem 0.6rem;
`;

/* 오른쪽 */
const Right = styled.div<{ windowWidth: number }>`
  display: flex;
  flex-direction: ${({ windowWidth }) =>
    windowWidth > 550 ? "row" : "column"};
  gap: 1rem;
  padding-top: 0.5rem;
  height: 400px;
`;
const Title = styled.div`
  font-size: 28px;
  margin-bottom: 1rem;
`;
const Description = styled.div`
  color: ${homeColor.boxDescription};
`;
const BoxImg = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px #00003a80;
  font-weight: 700;
  padding: 1rem;
  height: 141px;
  cursor: pointer;
  position: relative;
`;
const LeftBoxArea = styled.div`
  width: 300px;
`;

const MyTyleBox = styled(Box)`
  background: ${homeColor.myTyleBox};
`;
const ScreamBox = styled(Box)`
  background: ${homeColor.screamBox};
  margin-top: 1rem;
`;
const FindTyleBox = styled(Box)<{ windowWidth: number }>`
  width: ${({ windowWidth }) => (windowWidth > 550 ? "150px" : "300px")};
  height: 300px;
  background: ${homeColor.findTyleBox};

  & ${Title} {
    color: white;
  }

  & ${Description} {
    color: ${homeColor.findTyleBoxContent};
  }
`;

export default HomeIntroduce;
