import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

expect.extend(matchers);
import SliderInput from "components/UI/SliderInput";

describe("SliderInput 길이 테스트", () => {
  const setValue = jest.fn();
  let value = 0;

  beforeEach(() => {
    setValue.mockImplementation(() => {
      value = 1;
    });
  });

  test("길이가 400px인 경우 [px로 길이가 주어질 때]", async () => {
    render(
      <SliderInput
        width={"400px"}
        value={value}
        setValue={setValue}
        max={10000}
        ratio={0.001}
      />
    );
    const linkElement = await screen.findByTestId("slider");
    expect(linkElement).toHaveStyle("width: 400px");
  });

  test("길이가 50%인 경우 [%로 길이가 주어질때]", async () => {
    render(
      <SliderInput
        width={"400px"}
        value={value}
        setValue={setValue}
        max={10000}
        ratio={0.001}
      />
    );
    const linkElement = await screen.findByTestId("slider");
    expect(linkElement).toHaveStyle("width: 400px");
  });
});

describe("SliderInput 값 테스트", () => {
  const setValue = jest.fn();
  let value = 0;

  beforeEach(() => {
    setValue.mockImplementation(() => {
      value = 3;
    });
  });

  test("setValue로 값이 바뀌었을때 적용되는지 여부", async () => {
    render(
      <SliderInput
        width={"400px"}
        value={value}
        setValue={setValue}
        max={10000}
        ratio={0.001}
      />
    );

    setValue();
    expect(value).toEqual(3);
  });
});
