/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { homeColor } from "styles/color";
import { homeZIdx } from "styles/zIndex";
import { searchType, tmpSelectType } from "types/home";
import { css } from "@emotion/react";

interface Props {
  searchType: searchType;
  beforeType: searchType;
  afterType: searchType;
  rotateWheelRight: (isturnRight: boolean) => void;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  mainType: tmpSelectType;
  setMainType: React.Dispatch<React.SetStateAction<tmpSelectType>>;
  isAnimate: boolean;
  windowWidth: number;
}

interface TmpSelectTypeProp {
  rotation: number;
  isAnimate: boolean;
  windowWidth: number;
}

const typeMent = {
  views: "조회순",
  popular: "인기순",
  followers: "구독자순",
};

const Dial = ({
  searchType,
  beforeType,
  afterType,
  rotateWheelRight,
  rotation,
  setRotation,
  mainType,
  setMainType,
  isAnimate,
  windowWidth,
}: Props) => {
  const rotateDialRight = (isturnRight: boolean) => {
    setRotation(rotation + (isturnRight ? 60 : -60));
  };

  const clickBeforeType = () => {
    rotateWheelRight(true);
    rotateDialRight(true);
    setMainType("beforeType");
  };

  const clickAfterType = () => {
    rotateWheelRight(false);
    rotateDialRight(false);
    setMainType("afterType");
  };

  const typeObj = {
    searchType,
    beforeType,
    afterType,
  };

  return (
    <Wrapper>
      <DialBtn
        searchType={typeObj[mainType]}
        rotation={rotation - 120}
        isAnimate={isAnimate}
      >
        <TmpSelectType
          rotation={rotation - 120}
          isAnimate={isAnimate}
          windowWidth={windowWidth}
        >
          {typeMent[afterType]}
        </TmpSelectType>
      </DialBtn>
      <DialBtn
        searchType={typeObj[mainType]}
        rotation={rotation - 60}
        isAnimate={isAnimate}
      >
        <DialMenu
          rotation={rotation - 60}
          isSelect={mainType === "beforeType" ? true : false}
          windowWidth={windowWidth}
          searchType={typeObj[mainType]}
          isAnimate={isAnimate}
          onClick={clickBeforeType}
        >
          {typeMent[beforeType]}
        </DialMenu>
      </DialBtn>
      <MainDialBtn
        searchType={typeObj[mainType]}
        rotation={rotation}
        isAnimate={isAnimate}
      >
        <SelectType
          rotation={rotation}
          searchType={typeObj[mainType]}
          windowWidth={windowWidth}
          isTurn={mainType === "searchType" ? false : true}
          isAnimate={isAnimate}
        >
          {typeMent[searchType]}
        </SelectType>
      </MainDialBtn>
      <DialBtn
        searchType={typeObj[mainType]}
        rotation={rotation + 60}
        isAnimate={isAnimate}
      >
        <DialMenu
          rotation={rotation + 60}
          isSelect={mainType === "afterType" ? true : false}
          isAnimate={isAnimate}
          windowWidth={windowWidth}
          searchType={typeObj[mainType]}
          onClick={clickAfterType}
        >
          {typeMent[afterType]}
        </DialMenu>
      </DialBtn>
      <DialBtn
        searchType={typeObj[mainType]}
        rotation={rotation + 120}
        isAnimate={isAnimate}
      >
        <TmpSelectType
          rotation={rotation + 120}
          isAnimate={isAnimate}
          windowWidth={windowWidth}
        >
          {typeMent[beforeType]}
        </TmpSelectType>
      </DialBtn>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div``;

const MainTypeCSS = ({
  searchType,
  windowWidth,
}: {
  searchType: searchType;
  windowWidth: number;
}) => css`
  font-weight: 700;
  text-shadow: 3px 4px 4px ${homeColor[searchType]};
  font-size: ${windowWidth * 0.06}px;
`;

const SubTypeCSS = ({ windowWidth }: { windowWidth: number }) => css`
  font-weight: 700;
  color: ${homeColor.subSelectTypeGray};
  font-size: ${windowWidth * 0.03}px;
`;

const DialBtn = styled.div<{
  searchType: searchType;
  rotation: number;
  isAnimate: boolean;
}>`
  position: absolute;
  left: -25%;
  width: 50%;
  height: 100%;
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: ${({ isAnimate }) => (isAnimate ? "1s" : "0s")};
  pointer-events: none;
  z-index: ${homeZIdx.dial};
`;

const MainDialBtn = styled(DialBtn)`
  border-radius: 9999px;
  box-shadow: 4px 4px 20px 0px ${({ searchType }) => homeColor[searchType]};
`;

const noneSearchType = styled.div<TmpSelectTypeProp>`
  position: absolute;
  cursor: pointer;
  rotate: ${({ rotation }) => 360 - rotation}deg;
  transition: ${({ isAnimate }) => (isAnimate ? "1s" : "0s")};
  right: 5%;

  pointer-events: auto;
  top: calc(50% - ${({ windowWidth }) => `${windowWidth * 0.03}px`});
`;

const TmpSelectType = styled(noneSearchType)`
  ${SubTypeCSS}
`;

const DialMenu = styled(noneSearchType)<{
  isSelect: boolean;
  searchType: searchType;
}>`
  ${({ isSelect }) => (isSelect ? MainTypeCSS : SubTypeCSS)}
`;

const SelectType = styled(noneSearchType)<{
  searchType: searchType;
  isTurn: boolean;
}>`
  ${({ isTurn }) => (isTurn ? SubTypeCSS : MainTypeCSS)}
`;

export default Dial;
