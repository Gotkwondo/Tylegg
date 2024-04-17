/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { tyleColor } from "styles/color";
import { GrayBox, InfoBox } from "styles/tyle";
import { useRecoilValue } from "recoil";
import { winningRecordState } from "recoil/tyleInfo";
import { winningRecordStateType } from "types/tyle";

const Awards = () => {
  const awardInfo = useRecoilValue(winningRecordState);

  const [official, setOfficial] = useState<winningRecordStateType[]>([]);
  const [noneOfficial, setNoneOfficial] = useState<winningRecordStateType[]>(
    []
  );

  useEffect(() => {
    const official = awardInfo.filter(
      (award) => award.recordType === "OFFICIAL"
    );
    const noneOfficial = awardInfo.filter(
      (award) => award.recordType === "UNOFFICIAL"
    );
    setOfficial(official);
    setNoneOfficial(noneOfficial);
  }, [awardInfo]);

  return (
    <Wrapper>
      <Container>
        <p>공식 대회 경력 인증을 받으려면 구독이 필요합니다.</p>
        <AwardsArea>
          <AwardsBox data-testid="award-none-official">
            {noneOfficial.map((winningRecord, idx) => {
              return <p key={idx}> {winningRecord.record}</p>;
            })}
          </AwardsBox>
          <AwardsBox data-testid="award-official">
            {official.map((winningRecord, idx) => {
              return <p key={idx}> {winningRecord.record}</p>;
            })}
          </AwardsBox>
        </AwardsArea>
      </Container>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled(InfoBox)`
  display: flex;
  width: 90%;
  justify-content: center;
  padding: 2rem;
`;

const Container = styled.div`
  width: 100%;

  p {
    color: ${tyleColor.boxFontGray};
    margin-bottom: 2rem;
  }
`;

const AwardsArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const AwardsBox = styled(GrayBox)`
  width: 100%;
  height: 400px;
  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 800px) {
    height: 200px;
  }
`;

export default Awards;
