import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { selectPositionColor } from 'styles/color';
import { SecondTitle, Title, Wrapper } from 'styles/newTyle';
import { WhiteBox } from 'styles/tyle';

interface SelectProfileImgInterface {
  tyleInfoSetFun: (name: 'avatarImage', data: any) => void,
}

const SelectProfileImg = ({ tyleInfoSetFun }: SelectProfileImgInterface) => {
  const imgList = [
    "https://image.tyle.site/default/ar/personal/AR_1.png",
    "https://image.tyle.site/default/ar/personal/AR_2.png",
    "https://image.tyle.site/default/ar/personal/AR_3.png",
    "https://image.tyle.site/default/ar/personal/AR_4.png",
    "https://image.tyle.site/default/ar/personal/AR_5.png",
    "https://image.tyle.site/default/ar/personal/AR_6.png",
    "https://image.tyle.site/default/ar/personal/AR_7.png",
    "https://image.tyle.site/default/ar/personal/AR_8.png",
    "https://image.tyle.site/default/ar/personal/AR_9.png",
    "https://image.tyle.site/default/ar/personal/AR_10.png"
  ];
  const [imgSelect, setImgSelect] = useState("");


  const clickImgtoSelect = (imgNumber: string) => {
    setImgSelect(imgNumber);
  };

  useEffect(() => {
    const imgName = imgSelect.match(/AR_(10|[0-9])/g)?.join().replace('_', '')
    tyleInfoSetFun('avatarImage', imgName ? imgName : "")
  }, [imgSelect])

  return (
    <>
      <Wrapper>
        <Title>
          프로필 사진 선택
          <SecondTitle>본인의 프로필 캐릭터를 선택하세요. (필수)</SecondTitle>
        </Title>
        <SelectProfileBox>
          <ShowSelectedProfile>
            <ImgBox>
              <SelectedProfileImg src={imgSelect} />
            </ImgBox>
          </ShowSelectedProfile>
          <SelectProfileArea>
            {
              imgList.map((el, idx) => (
                <ProfileImg key={`AR${idx}`} src={el} onClick={() => clickImgtoSelect(el)} />
              ))
            }
          </SelectProfileArea>
        </SelectProfileBox>
      </Wrapper>
    </>
  )
};

const SelectProfileBox = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
`
const ShowSelectedProfile = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImgBox = styled(WhiteBox)`
  width: 17rem;
  height: 17rem;
  box-shadow: 4px 4px 4px 0px ${selectPositionColor.blockShadowColor};
`
const SelectedProfileImg = styled.img<{src: string}>`
  width: 15rem;
  height: 15rem;
  display: ${({src}) => src ? '' : 'none'};
`
const SelectProfileArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
`
const ProfileImg = styled.img<{state?: boolean}>`
  width: 20%;
  height: 40%;
  cursor: pointer;
`

export default SelectProfileImg;