/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { cardColor } from "../../styles/color";
import { ReactComponent as UserSVG } from "assets/Home/User.svg";
import { ReactComponent as QuestingSVG } from "assets/Icon/QuestionMark.svg";
import { tyleZIdx } from "styles/zIndex";

export interface Props {
  width: string;
  isLogin: boolean;
}

interface CardProps {
  width: string;
  isClick?: boolean;
}

//카드 고정길이(기본값)
const CARDLENGTH = Object.freeze({
  faceWidth: "633px",
  faceHeight: "444px",
  border: "5px",
  miniWidth: "148px",
  miniHeight: "178px",
  miniTransparent: "20px",
});

const TyleCard = ({ width, isLogin }: Props) => {
  const [isClick, setIsClick] = useState(false);

  const toggleIsClick = () => {
    setIsClick(!isClick);
  };

  return (
    <Card
      data-testid="tylecard"
      width={width}
      isClick={isClick}
      onClick={toggleIsClick}
    >
      <CardFront width={width}>
        <FrontUserImgBox width={width}></FrontUserImgBox>
        {isLogin ? <UserImg width={width} /> : null}
        {isLogin ? null : <QuestionArea />}
      </CardFront>
      <CardBack width={width}>
        <BackUserImg width={width}></BackUserImg>
      </CardBack>
    </Card>
  );
};

/* STYLE */
const face = styled.div<CardProps>`
  width: ${({ width }) => (width ? `${width}px` : CARDLENGTH.faceWidth)};
  height: ${({ width }) =>
    width ? `${0.7 * +width}px` : CARDLENGTH.faceHeight};
  font-size: 35px;
  backface-visibility: hidden; //카드의 뒷면을 안보이게 처리-카드가 뒤집히면 뒷면이 안보임
  transition: 1s;
  background: black; // 임시색깔
  border-radius: 5px;
  position: relative;
`;

const userImg = styled.div<CardProps>`
  position: absolute;
  width: ${({ width }) => (width ? `${+width * 0.3}px` : CARDLENGTH.miniWidth)};
  height: ${({ width }) =>
    width ? `${+width * 0.4}px` : CARDLENGTH.miniHeight};
`;

const FrontUserImgBox = styled(userImg)`
  top: ${({ width }) => (width ? `${+width * 0.75 * 0.2}px` : "120px")};
  left: ${({ width }) => (width ? `-${+width * 0.25 * 0.2}px` : "-18px")};

  opacity: 0.8;
  box-shadow: 3px 3px 10px 0px #ff4654;
  width: ${({ width }) => (width ? `${+width * 0.24}px` : "120px")};
  background: black;
  z-index: ${tyleZIdx.FrontUserImgBox};
  position: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    width: 20%;
    height: 100%;
    right: 100%;
    background: inherit;
    z-index: -1;
    transform-origin: 100% 0;
    transform: perspective(
        ${({ width }) => (width ? `${+width / 20}px` : "3px")}
      )
      rotateY(${({ width }) => (width ? `-${+width / 70}deg` : "-1deg")});
    box-shadow: -5px 5px 5px 0px #ff4654;
  }
`;

const QuestionArea = styled(QuestingSVG)`
  width: 33%;
  height: 33%;
  position: absolute;
  top: 33%;
  left: 33%;
`;

const UserImg = styled(UserSVG)`
  position: absolute;
  top: 23%;
  left: -10%;
  height: 50%;
  width: 30%;
  height: 50%;
  z-index: ${tyleZIdx.UserImg};
`;

const CardFront = styled(face)<CardProps>`
  //앞면 카드가 부유하게 되어, 뒷면 카드가 아래에서 위로 올라감 -> 요소 두개가 겹치게 됨
  position: absolute;
  transform: rotateY(0deg); //명시적으로 기본값 설정, 없어도 됨
  background: linear-gradient(
    45deg,
    transparent ${({ width }) => (width ? `${+width / 10}px` : "63px")},
    ${cardColor.front} 0
  );
  color: white;
  &:after {
    content: "";
    width: ${({ width }) => (width ? `${+width * 0.85}px` : "530px")};
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 5px;
    box-shadow: 30px 30px 30px 0 #565656;
  }
`;

const BackUserImg = styled(userImg)`
  top: ${({ width }) => (width ? `${+width * 0.75 * 0.2}px` : "120px")};
  right: ${({ width }) => (width ? `-${+width * 0.25 * 0.2}px` : "-28px")};
  background: linear-gradient(
    -45deg,
    transparent
      ${({ width }) =>
        width ? `${(+width * 0.25) / 4}px` : CARDLENGTH.miniTransparent},
    ${cardColor.back} 0
  );
`;

const CardBack = styled(face)<CardProps>`
  transform: rotateY(-180deg); //y축을 중심으로 -180도 회전
  background: linear-gradient(
    -45deg,
    transparent ${({ width }) => (width ? `${+width / 10}px` : "63px")},
    ${cardColor.back} 0
  );
`;

const Card = styled.div<CardProps>`
  width: ${({ width }) => (width ? `${width}px` : CARDLENGTH.faceWidth)};
  height: ${({ width }) =>
    width ? `${0.7 * +width}px` : CARDLENGTH.faceHeight};
  margin: 5rem;
  perspective: ${({ width }) =>
    width
      ? `${+width * 2}px`
      : "1266px"}; //부모의 자식 요소가 3차원의 애니메이션 효과를 가질때, 300px의 거리에서 보는 원근감을 줌
  cursor: pointer;
  ${CardFront} {
    transform: ${({ isClick }) => (isClick ? "rotateY(180deg)" : "")};
  }

  ${CardBack} {
    transform: ${({ isClick }) => (isClick ? "rotateY(0deg)" : "")};
  }
`;

export default TyleCard;
