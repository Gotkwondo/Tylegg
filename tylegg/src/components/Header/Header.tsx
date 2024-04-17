/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { headerHoverColor, shadowColor } from "styles/color";
import { headerZIdx } from "styles/zIndex";
import LogoPNG from "assets/Logo/Logo.png";
import NoneLoginUserPNG from "assets/Icon/NoneLoginUser.png";

import { useUpdatedUserInfo } from "hooks/useUpdateUserInfo";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [userId, userInfo] = useUpdatedUserInfo();
  const navigate = useNavigate();

  const clickUserLogo = () => {
    if (userId) {
      navigate(`/${userInfo.name}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <Top>
        <Logo src={LogoPNG} alt="로고이미지"></Logo>
        <User onClick={clickUserLogo}>
          <UserImg
            src={userInfo.avatarImage ? userInfo.avatarImage : NoneLoginUserPNG}
          ></UserImg>
          <UserName>{userId ? userInfo.name : "로그인하세요"}</UserName>
        </User>
      </Top>
      <Bottom>
        <Navigater>
          <p>나의 Tyle</p>
          <p>Tyle 찾기</p>
          <p>Tyle 만들기</p>
          <p>스크림 관리</p>
        </Navigater>
        <DropDownContainer>
          <DropDown>
            <DropDownItem>
              <p>내 타일 보기</p>
              <p>내 타일 수정</p>
            </DropDownItem>
            <DropDownItem>
              <p>Tyle 찾기</p>
            </DropDownItem>
            <DropDownItem>
              <p>Tyle 만들기</p>
            </DropDownItem>
            <DropDownItem>
              <p>스크림 대기실</p>
              <p>스크림 일정 확인</p>
            </DropDownItem>
          </DropDown>
        </DropDownContainer>
      </Bottom>
    </Wrapper>
  );
};

/* STYLE */
const Wrapper = styled.div`
  padding-top: 2rem;
`;
/* TOP 부분 */
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
`;
const Logo = styled.img`
  cursor: pointer;
  width: 100px;
  height: 30px;
  padding-left: 2rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  font-weight: 700;
  cursor: pointer;
`;

const UserImg = styled.img`
  border-radius: 5px;
  width: 40px;
  height: 40px;
`;

const UserName = styled.p``;

/* BOTTOM 부분 */

//Bottom은 맨 밑에 있음

const Navigater = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 12px; /* 작은 화면에 대한 font-size */
    padding-left: 1rem;
  }

  p {
    width: 140px;
    margin: 1rem;
    @media (max-width: 600px) {
      margin: 0.5rem;
    }
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 0px;
  padding: 0rem 2rem;
  transition: 0.7s;
  display: flex;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 10px; /* 작은 화면에 대한 font-size */
    padding: 0rem 1rem;
  }
  z-index: ${headerZIdx.navigater};
  background-color: white;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid ${shadowColor};
    border-bottom: 2px solid ${shadowColor};
    filter: blur(3px);
    z-index: ${headerZIdx.dropdownBlur};
  }
`;

const DropDownItem = styled.div`
  display: none;
  width: 140px;

  margin: 1rem;

  cursor: pointer;
  p {
    padding-bottom: 1rem;
  }

  p:hover {
    color: ${headerHoverColor};
  }
`;

const Bottom = styled.div`
  font-weight: 700;

  &:hover ${DropDown} {
    padding: 1rem 2rem;
    height: 200px;
    @media (max-width: 600px) {
      padding: 1rem 1rem;
    }
  }

  &:hover ${DropDownItem} {
    display: block;
  }
`;

export default Header;
