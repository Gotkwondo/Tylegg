/** @jsxImportSource @emotion/react */
import SliderInput from "components/UI/SliderInput";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { InfoBlackBox } from "styles/tyle";
import { useRecoilValue } from "recoil";
import { ingameState } from "recoil/tyleInfo";

const maxDPIMouseSens = 1000;
const maxSens = 10000;
const maxScopedSens = 10000;

const Sens = () => {
  const ingameInfo = useRecoilValue(ingameState);

  const [dpi, setDpi] = useState(0);
  const [sens, setSens] = useState(0);
  const [scopedSens, setScopedSens] = useState(0);

  useEffect(() => {
    setDpi(ingameInfo.dpi);
    setSens(ingameInfo.sensitivity);
    setScopedSens(ingameInfo.adsMultiplier);
  }, [ingameInfo]);

  return (
    <Wrapper>
      <p>인게임 감도</p>
      <SliderInput
        width="100%"
        value={dpi}
        setValue={setDpi}
        ratio={10}
        max={maxDPIMouseSens}
      ></SliderInput>
      <Description>
        <p>마우스 감도 :</p>
        <p>{dpi}</p>
      </Description>
      <SliderInput
        width="100%"
        value={sens}
        setValue={setSens}
        max={maxSens}
        ratio={0.001}
      ></SliderInput>
      <Description>
        <p>감도 조준 :</p>
        <p>{sens}</p>
      </Description>
      <SliderInput
        width="100%"
        value={scopedSens}
        setValue={setScopedSens}
        max={maxScopedSens}
        ratio={0.001}
      ></SliderInput>
      <Description>
        <p>조준경 감도 배율 :</p>
        <p>{scopedSens}</p>
      </Description>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled(InfoBlackBox)`
  width: 30%;
  height: 450px;
  font-weight: 700;
  font-size: 30px;
  & > p {
    margin-bottom: 2rem;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Description = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 20px;
    margin-top: 1rem;
  }
`;

export default Sens;
