/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import CircleTyle from "./CircleTyle";
import Dial from "./Dial";
import { circleType, searchType, tmpSelectType } from "types/home";
import { waitSecond } from "utils/time";
import { homeColor } from "styles/color";

interface CircleProp {
  rotation: number;
  circleType: circleType;
  isAnimate: boolean;
}

interface Props {
  windowWidth: number;
}

const circleDegree = {
  main: 0,
  before: 240,
  after: 120,
};

const Wheel = ({ windowWidth }: Props) => {
  const [rotation, setRotation] = useState(0);
  const [dialRotation, setDialRotation] = useState(0);
  const [dialMainType, setDailMainType] = useState<tmpSelectType>("searchType");
  const [isAnimate, setIsAnimate] = useState(true);

  // 현재 다이얼에 표시될 메뉴의 순서 (메인 , 이전 , 이후 순서)
  const [menuList, setMenuList] = useState<searchType[]>([
    "views",
    "popular",
    "followers",
  ]);
  const menuOrder: circleType[] = ["main", "before", "after"];
  const degreeOrder = [0, -120, 120];

  /**
   * 휠을 오른쪽으로 회전시키는 함수
   * @param isturnRight
   */
  const rotateWheelRight = async (isturnRight: boolean) => {
    setRotation(rotation + (isturnRight ? 120 : -120));

    await waitSecond(1); // 애니메이션 시간 대기
    setIsAnimate(false); // 애니메이션을 끄고 새로운 정보로 대체
    setRotation(0);
    setDialRotation(0);
    setDailMainType("searchType");

    if (isturnRight) setMenuList([menuList[1], menuList[2], menuList[0]]);
    else setMenuList([menuList[2], menuList[0], menuList[1]]);

    await waitSecond(0.01); // 다시 애니메이션이 적용될 수 있도록 적용
    setIsAnimate(true);
  };

  return (
    <Wrapper>
      <WheelIntroduce>
        <Title>
          <p>
            <span>Tyle</span>의 카테고리별
          </p>
          <p>랭킹 확인</p>
        </Title>
        <Ment>
          <p>원판을 돌려 더많은 순위정보를</p>
          <p>확인해 보세요!</p>
        </Ment>
      </WheelIntroduce>
      <WheelWrapper>
        <Dial
          searchType={menuList[0]}
          beforeType={menuList[1]}
          afterType={menuList[2]}
          rotateWheelRight={rotateWheelRight}
          rotation={dialRotation}
          setRotation={setDialRotation}
          mainType={dialMainType}
          setMainType={setDailMainType}
          isAnimate={isAnimate}
          windowWidth={windowWidth}
        ></Dial>
        {menuList.map((menu, idx) => (
          <BigCircleArea
            isAnimate={isAnimate}
            rotation={rotation + degreeOrder[idx]}
            key={idx}
          >
            <BigCircle>
              <Circles>
                <CircleTyleArea
                  isAnimate={isAnimate}
                  rotation={rotation}
                  circleType={menuOrder[idx]}
                >
                  <CircleTyle
                    width={windowWidth * 0.2}
                    userType="silver"
                    searchType={menu}
                  ></CircleTyle>
                </CircleTyleArea>
                <CircleTyleArea
                  isAnimate={isAnimate}
                  rotation={rotation}
                  circleType={menuOrder[idx]}
                >
                  <CircleTyle
                    width={windowWidth * 0.2}
                    userType="gold"
                    searchType={menu}
                  ></CircleTyle>
                </CircleTyleArea>
                <CircleTyleArea
                  isAnimate={isAnimate}
                  rotation={rotation}
                  circleType={menuOrder[idx]}
                >
                  <CircleTyle
                    width={windowWidth * 0.2}
                    userType="bronze"
                    searchType={menu}
                  ></CircleTyle>
                </CircleTyleArea>
              </Circles>
            </BigCircle>
          </BigCircleArea>
        ))}
      </WheelWrapper>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div``;

const WheelWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 50vw;
  overflow: hidden;
`;

const WheelIntroduce = styled.div`
  padding: 8rem 2rem;
  & span {
    color: ${homeColor.empahsis};
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  p {
    margin-bottom: 0.5rem;
  }
`;
const Ment = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${homeColor.wheelIntroduceGray};
`;

const BigCircleArea = styled.div<{ rotation: number; isAnimate: boolean }>`
  position: absolute;
  top: -25%;
  left: -50%;
  width: 100%;
  height: 100%;
  transform: rotate(${({ rotation }) => rotation}deg);
  transition: ${({ isAnimate }) => (isAnimate ? "1s" : "0s")};
`;

const BigCircle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Circles = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  gap: 1rem;
  top: 43%;
  left: 80%;
`;

const CircleTyleArea = styled.div<CircleProp>`
  rotate: ${({ rotation, circleType }) =>
    360 - rotation - circleDegree[circleType]}deg;

  transition: ${({ isAnimate }) => (isAnimate ? "1s" : "0s")};
`;

export default Wheel;
