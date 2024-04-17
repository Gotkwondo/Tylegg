import styled from "@emotion/styled/macro";
import { tyleColor } from "./color";

export const InfoBox = styled.div<{ darkmode?: boolean }>`
  font-weight: 700;
  box-shadow: 4px 4px 4px 0px #00000040;
  border-radius: 5px;
  background-color: white;

  padding: 1rem;
  background: ${({ darkmode }) =>
    darkmode ? tyleColor.selectBarBack : "white"};
  color: ${({ darkmode }) => (darkmode ? "white" : "black")};
`;

export const InfoBlackBox = styled(InfoBox)`
  border-radius: 15px;
  padding: 1rem;
  background-color: ${tyleColor.infoBlackBack};
  color: white;
`;

export const WhiteBox = styled.div`
  border-radius: 15px;
  padding: 1rem;
  background-color: white;
  color: black;
`;

export const GrayBox = styled.div`
  background-color: ${tyleColor.infoGrayBack};
  border-radius: 15px;
  padding: 1rem;
`;

export const Badge = styled.div<{ backColor: string; color?: string }>`
  display: inline;
  background: ${({ backColor }) => backColor};
  color: ${({ color }) => (color ? color : "white")};
  font-weight: 700;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 20px;
`;
