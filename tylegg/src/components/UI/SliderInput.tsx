/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled/macro";
import { sliderColor } from "styles/color";

interface Props {
  width: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  ratio: number;
}

/**
 * 슬라이더 (수정가능 <- 후에 기능 추가예정)
 * @param value : 슬라이더에 들어갈 값
 * @param ratio : 슬라이더에서 보여줄 숫자 비율
 * @param max : 슬라이더에서 총 몇개의 선택폭을 가질지
 * @returns
 */
const SliderInput = ({ width, value, setValue, max, ratio }: Props) => {
  return (
    <PercentSlider
      type="range"
      min={0}
      max={max}
      value={value / ratio}
      onChange={(e) => setValue(+(parseInt(e.target.value) * ratio).toFixed(2))}
      width={width}
      data-testid="slider"
    />
  );
};

/* STYLE */
const PercentSlider = styled.input<{ width: string }>`
  -webkit-appearance: none; /* 웹킷 브라우저에서 기본 스타일 제거 */
  appearance: none;
  position: relative;
  border-radius: 9999px;
  height: 8px;
  background-color: white;
  width: ${({ width }) => width};
  height: 8px;
  background-color: white;
  border-radius: 9999px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* 웹킷 브라우저에서 기본 스타일 제거 */
    appearance: none;
    width: 8px;
    height: 26px;
    border-radius: 9999px;
    background-color: ${sliderColor.sensThumb};
    cursor: pointer;
  }
`;

export default SliderInput;
