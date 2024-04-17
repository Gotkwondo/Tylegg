import styled from '@emotion/styled';
import { selectPositionColor } from './color';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
`;

export const SecondTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${selectPositionColor.greysubTitleColor};
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 30px;
  color: ${selectPositionColor.greysubTitleColor};
`;