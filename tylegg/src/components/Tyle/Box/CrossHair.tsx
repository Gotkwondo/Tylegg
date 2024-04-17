/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { InfoBlackBox } from "styles/tyle";
import { useRecoilValue } from "recoil";
import { ingameState } from "recoil/tyleInfo";

//조준선 <------- 수정필요!!!!!!!!!!
const CrossHair = () => {
  const ingameInfo = useRecoilValue(ingameState);

  return (
    <Wrapper>
      <p>에임 프로필</p>
      {ingameInfo ? <AimArea src={ingameInfo.aimImage}></AimArea> : null}
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled(InfoBlackBox)`
  width: 30%;
  height: 450px;
  font-size: 30px;
  & > p {
    margin-bottom: 2rem;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const AimArea = styled.img`
  width: 100%;
  height: 75%;
  background-color: white;
  border-radius: 15px;
`;

export default CrossHair;
