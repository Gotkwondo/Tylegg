/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { sliderColor } from "styles/color";
import { GrayBox, InfoBox } from "styles/tyle";

import { useRecoilValue } from "recoil";
import { championState, mainPositionState } from "recoil/tyleInfo";
import { championStateType } from "types/tyle";

const PositionInfo = () => {
  const positionInfo = useRecoilValue(mainPositionState);
  const championInfo = useRecoilValue(championState);

  const [mostChampion, setMostChampion] = useState<championStateType>();
  const [secondChampion, setSecondChampion] = useState<championStateType>();

  useEffect(() => {
    const mostChampion = championInfo.filter((v) => v.location === "L")[0];
    const secondChampion = championInfo.filter((v) => v.location === "R")[0];
    setMostChampion(mostChampion);
    setSecondChampion(secondChampion);
  }, [championInfo]);

  return (
    <PositionBox>
      <PositionTitle>주 포지션 및 most 챔피언</PositionTitle>
      <p>주 포지션 : {positionInfo[0].position}</p>
      <p>
        모스트 챔피언 : {mostChampion?.name} , {secondChampion?.name}
      </p>
      <ChampionArea data-testid="champion-area">
        {mostChampion ? (
          <MostChampion>
            <ChampionImg src={mostChampion.imageUrl} alt="zett" />
            <ChampionInfo>
              <ChampionName>{mostChampion.name}</ChampionName>
              <p>승률{mostChampion.winRate}%</p>
              <PercentSlider
                color={sliderColor.winningRate}
                percent={mostChampion.winRate}
              ></PercentSlider>
              <p>플레이시간 {mostChampion.playTime}시간</p>
              <PercentSlider
                color={sliderColor.playTime}
                percent={mostChampion.playTime}
              ></PercentSlider>
            </ChampionInfo>
          </MostChampion>
        ) : null}
        {secondChampion ? (
          <SecondMostChampion>
            <ChampionInfo>
              <ChampionName>{secondChampion.name}</ChampionName>
              <p>승률 {secondChampion.winRate}%</p>
              <PercentSlider
                color={sliderColor.winningRate}
                percent={secondChampion.winRate}
              ></PercentSlider>
              <p>플레이시간 {secondChampion.playTime}시간</p>
              <PercentSlider
                color={sliderColor.playTime}
                percent={secondChampion.playTime}
              ></PercentSlider>
            </ChampionInfo>
            <ChampionImg src={secondChampion.imageUrl} alt="reyna" />
          </SecondMostChampion>
        ) : null}
      </ChampionArea>
    </PositionBox>
  );
};

/* STYLE */
const PositionBox = styled(InfoBox)`
  width: 60%;
  height: 570px;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const PositionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 2rem;
`;

const ChampionName = styled.div``;
const ChampionInfo = styled.div`
  p {
    font-size: 10px;
    margin: 0.3rem 0rem;
  }
`;

const ChampionArea = styled(GrayBox)`
  margin-top: 2rem;
  @media (max-width: 380px) {
    img {
      width: 100px;
    }
  }
`;

const MostChampion = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 380px) {
    width: 230px;
  }
`;

const SecondMostChampion = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 200px;
  padding-bottom: 2rem;
  margin-top: -5rem;
  img {
    margin-bottom: -2rem;
  }
  @media (max-width: 380px) {
    width: 230px;
  }
`;

const ChampionImg = styled.img`
  width: 100px;
  height: 150px;
`;

const PercentSlider = styled.div<{
  percent: number;
  color: string;
  width?: number;
}>`
  position: relative;
  border-radius: 9999px;
  height: 2px;
  background-color: ${sliderColor.back};
  width: ${({ width }) => (width ? `${width}px` : "100px")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 9999px;
    width: ${({ width, percent }) => {
      width = width ? width : 100;
      return `${(width * percent) / 100}px`;
    }};
    height: 2px;
    background-color: ${({ color }) => color};
  }
`;

export default PositionInfo;
