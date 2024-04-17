/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { tyleColor } from "styles/color";
import { InfoBlackBox, WhiteBox } from "styles/tyle";

const ScreamInfo = () => {
  return (
    <Wrapper>
      <Left>
        <p>스크림 일정</p>
        <Schedule>
          <ScheduleContent>11월 20일 20:00 A팀과 스크림</ScheduleContent>
        </Schedule>
      </Left>
      <Right>
        <RightBox>
          <p>스크림 정보 작성란</p>
        </RightBox>
        <RightBox>
          <p>스크림 기타</p>
        </RightBox>
      </Right>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-weight: 700;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled(InfoBlackBox)`
  width: 30%;
  height: 450px;

  & > p {
    font-size: 30px;
    margin-bottom: 1rem;
  }
  @media (max-width: 800px) {
    width: 90%;

    & > p {
      font-size: 1.3rem;
    }
  }
`;

const Schedule = styled(WhiteBox)`
  background-color: white;
  height: 370px;
`;

const ScheduleContent = styled.div`
  position: relative;
  margin-left: 0.5rem;
  &::before {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    left: -0.5rem;
    top: 0;
    background-color: ${tyleColor.beforeScheduleContentBox};
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 800px) {
    width: 90%;
    gap: 2rem;
  }
`;

const RightBox = styled(InfoBlackBox)`
  font-size: 20px;
  height: 210px;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export default ScreamInfo;
