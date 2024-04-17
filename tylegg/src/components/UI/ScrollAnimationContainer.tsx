import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

interface PropsType {
  children: React.ReactNode,
  isFirst: boolean,
}

const ScrollAnimationContainer = ({ children, isFirst }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  
  if (isFirst && isInViewport) {
    return (
      <FirstInnerSelectArea ref={ref}>
        {children}
      </FirstInnerSelectArea>
    );
  }
  return (
    <InnerSelectArea ref={ref} isInViewport={isInViewport}>
      {children}
    </InnerSelectArea>
  );
};

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const FirstInnerSelectArea = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  animation: ${frameInAnimation} 1s forwards;
`;

const InnerSelectArea = styled.div<{isInViewport: boolean}>`
  display: flex;
  flex-direction: column;
  align-content: center;
  ${({ isInViewport }) =>
    isInViewport ? css`animation: ${frameInAnimation} 1s forwards;` : `opacity: 0;`
  }
`;

export default ScrollAnimationContainer;