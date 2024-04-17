/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import Header from "components/Header/Header";
import useWindowSizeCustom from "hooks/useWindowsSize";
import styled from "@emotion/styled/macro";
import TyleHeader from "components/Tyle/TyleHeader";
import MyInfo from "components/Tyle/Box/MyInfo";
import PositionInfo from "components/Tyle/Box/PositionInfo";
import Awards from "components/Tyle/Box/Awards";
import Agency from "components/Tyle/Box/Agency";
import CrossHair from "components/Tyle/Box/CrossHair";
import Sens from "components/Tyle/Box/Sens";
import { useRecoilState } from "recoil";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { useQuery } from "@tanstack/react-query";
import { getTyleInfoApi } from "api/tyle/api";
import { useParams } from "react-router-dom";

const TyleProfile = () => {
  const windowSize = useWindowSizeCustom();

  const [tyleInfo, setTyleInfo] = useRecoilState(tyleInfoSelector);
  const { tyleName } = useParams() as { tyleName: string };

  const tyleInfoQuery = useQuery({
    queryKey: ["tyleInfo", tyleInfo],
    queryFn: async () => {
      const data = await getTyleInfoApi({ tyleName: tyleName });
      return data;
    },
    staleTime: 10 * 60 * 60 * 1000,
  });

  useEffect(() => {
    if (tyleInfoQuery.data) {
      setTyleInfo(tyleInfoQuery.data);
    }
  }, [tyleInfoQuery.data]);

  return (
    <Wrapper>
      <Header></Header>
      <TyleHeader width={windowSize.width}></TyleHeader>
      <Title>내 정보</Title>
      <BoxArea>
        <MyInfo></MyInfo>
        <PositionInfo></PositionInfo>
      </BoxArea>

      <Title>대회 경력</Title>
      <BoxArea>
        <Awards></Awards>
      </BoxArea>
      <Title>인게임 정보</Title>
      <BoxArea>
        <Agency></Agency>
        <Sens></Sens>
        <CrossHair></CrossHair>
      </BoxArea>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-left: 5%;
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

const BoxArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-bottom: 10rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default TyleProfile;
