/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { tyleColor } from "styles/color";
import linkPNG from "assets/Icon/Link.png";
import placeMarkerPNG from "assets/Icon/PlaceMarker.png";
import xPNG from "assets/Icon/X.png";
import facebookPNG from "assets/Icon/Facebook.png";
import youtubePNG from "assets/Icon/Youtube.png";
import instagramPNG from "assets/Icon/Instagram.png";
import PeoplePNG from "assets/Icon/PeopleWhite.png";
import { socialLinkState, tyleUserState } from "recoil/tyleInfo";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { checkSNS } from "utils/sns";

interface Props {
  width: number;
}

const selectBarInfo = {
  subscribe: [
    "내정보",
    "스크림 정보",
    "대회 경력",
    "인게임 정보",
    "인게임 장비",
  ],
  normal: ["내정보", "스크림 정보", "대회 경력", "인게임 정보"],
};

const snsPng = {
  facebook: facebookPNG,
  youtube: youtubePNG,
  instagram: instagramPNG,
  x: xPNG,
  etc: linkPNG,
};

const TyleHeader = ({ width }: Props) => {
  const userInfo = useRecoilValue(tyleUserState);
  const snsInfo = useRecoilValue(socialLinkState);

  return (
    <Wrapper>
      <ClippedRect width={width}>
        <Info>
          <InfoContent>
            {width < 600 ? (
              <SelectBar data-testid="rowSelectBar">
                {selectBarInfo.subscribe.map((v, idx) => (
                  <p key={idx}>{v}</p>
                ))}
              </SelectBar>
            ) : null}
            <InfoTop>
              <NickName>
                <p>{userInfo.name}</p>
                <FollowBtn>팔로우</FollowBtn>
              </NickName>

              {width < 1150 ? (
                <ProfileImg
                  src={userInfo.avatarImage}
                  data-testid="sProfileImg"
                />
              ) : null}
            </InfoTop>
            <InfoBottom>
              <BadgeArea>
                <p>뱃지를 모아서</p>
                <p> 나를 소개해요!</p>
              </BadgeArea>
              <DescriptionArea>
                <Location>
                  <img src={placeMarkerPNG} alt="위치아이콘" />
                  <p>{userInfo.location}</p>
                </Location>
                <SNSLink>
                  {snsInfo.map(({ url }, idx) => {
                    const sns = checkSNS(url);
                    return (
                      <SNSLogo to={url} key={idx}>
                        <img src={snsPng[sns]} alt="sns아이콘" />
                      </SNSLogo>
                    );
                  })}
                </SNSLink>
                <Following>
                  <img src={PeoplePNG} alt="사람아이콘" />
                  following {userInfo.following}
                </Following>
                <Follower>
                  <img src={PeoplePNG} alt="사람아이콘" />
                  follower {userInfo.followers}
                </Follower>
                <Email>Email : teridot@site.com</Email>
              </DescriptionArea>
              {width < 1150 ? (
                <EditBtn data-testid="sEditBtn">나의 Tyle 수정하기</EditBtn>
              ) : null}
            </InfoBottom>
          </InfoContent>
          <ColumBox>
            {width > 1150 ? (
              <ProfileImg
                src={userInfo.avatarImage}
                data-testid="wProfileImg"
              />
            ) : null}
            {width > 1150 ? <EditBtn>나의 Tyle 수정하기</EditBtn> : null}
          </ColumBox>
        </Info>

        {width > 600 ? (
          <SelectBar data-testid="colSelectBar">
            {selectBarInfo.subscribe.map((v, idx) => (
              <p key={idx}>{v}</p>
            ))}
          </SelectBar>
        ) : null}
      </ClippedRect>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div``;

const ClippedRect = styled.div<{ width: number }>`
  width: 100%;
  padding: 5rem 0;
  font-size: 35px;
  border-radius: 5px;
  margin-top: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    transparent ${({ width }) => `${+width * 0.07}px`},
    ${tyleColor.normal} 0
  );
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 1150px) {
    justify-content: center;
  }
`;
const InfoContent = styled.div`
  position: relative;
`;

const InfoTop = styled.div`
  display: flex;
  color: white;
  font-size: 90px;
  font-weight: 900;
  @media (max-width: 1150px) {
    font-size: 45px;
    align-items: normal;
    justify-content: space-between;
  }
  @media (max-width: 350px) {
    font-size: 20px;
  }
`;

const NickName = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  @media (max-width: 1150px) {
    display: block;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;
const BadgeArea = styled.div`
  background: ${tyleColor.badgeArea};
  border-radius: 5px;
  font-size: 15px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 350px) {
    font-size: 8px;
  }
`;
const DescriptionArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 700;
  color: white;
  max-width: 300px;
  @media (max-width: 350px) {
    font-size: 8px;
  }
`;

const Description = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const Location = styled(Description)``;
const SNSLink = styled(Description)``;

const SNSLogo = styled(Link)`
  img {
    width: 25px;
    height: 25px;
  }
`;

const Following = styled(Description)``;
const Follower = styled(Description)``;
const Email = styled(Description)`
  width: 300px;
  @media (max-width: 350px) {
    width: 150px;
  }
`;

const FollowBtn = styled.button`
  padding: 0.1rem 0.5rem;
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  height: 20px;
  @media (max-width: 350px) {
    font-size: 8px;
    padding: 0rem 0.2rem;
  }
`;

const ProfileImg = styled.img`
  /* 임시!!! 추후 변경 */
  width: 250px;
  height: 250px;
  position: relative;

  border-radius: 5px;
  @media (max-width: 1150px) {
    width: 80px;
    height: 90px;
  }
`;

const ColumBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EditBtn = styled.button`
  padding: 5px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  background-color: white;
  top: 0;
  right: -9rem;

  @media (max-width: 1150px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: -25%;
    margin-top: 2rem;
    margin-bottom: -2rem;
  }
`;

const SelectBar = styled.div`
  width: 80px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: 3rem;
  top: 5rem;

  background-color: ${tyleColor.selectBarBack};
  border-radius: 15px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  justify-content: center;

  @media (max-width: 600px) {
    width: 300px;
    font-size: 10px;
    padding: 12px;
    flex-direction: row;
    top: -3.5rem;
    left: 0;
  }
  @media (max-width: 350px) {
    width: 150px;
    font-size: 7px;
    top: -4rem;
    padding: 10px;
  }

  p {
    text-align: center;
  }
  p:hover {
    color: ${tyleColor.selectBarHover};
    cursor: pointer;
  }
`;

export default TyleHeader;
