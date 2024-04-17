/** @jsxImportSource @emotion/react */
import TyleCard from "components/Tyle/TyleCard";
import React from "react";
import styled from "@emotion/styled/macro";
import { homeColor } from "styles/color";

interface Props {
  windowWidth: number;
}

const TyleArea = ({ windowWidth }: Props) => {
  const CalculateTyleWidth = (windowWidth: number) => {
    if (windowWidth > 1000) return windowWidth * 0.35 + "";
    return windowWidth * 0.6 + "";
  };

  return (
    <Wrapper windowWidth={windowWidth}>
      <Left>
        <p>
          <Emphasis>Tyle</Emphasis>
        </p>
        <p>
          내 S<Emphasis>Tyle</Emphasis>대로
        </p>
        <p>원하는 Type의</p>
        <p>
          <Emphasis>Tyle</Emphasis>을 만들자
        </p>
      </Left>
      <Right>
        <TyleCard width={CalculateTyleWidth(windowWidth)} isLogin={false} />
        <p>Tyle을 클릭해 보세요!</p>
      </Right>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div<{ windowWidth: number }>`
  background: ${homeColor.cardBackground};
  padding: 5rem 0;
  display: flex;
  flex-direction: ${({ windowWidth }) =>
    windowWidth < 1000 ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 20rem;
`;

const Emphasis = styled.span`
  color: ${homeColor.emphasisPurple};
`;

const Left = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;

  & p:first-child {
    font-size: 40px;
    margin-bottom: 1rem;
  }
`;

const Right = styled.div`
  p {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
  }
`;

export default TyleArea;
