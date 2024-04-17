import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import TyleHeader from "components/Tyle/TyleHeader";
import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";

expect.extend(matchers);

describe("ProfileImg width에 따른 컴포넌트 테스트", () => {
  test("길이가 500인 경우", () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <TyleHeader width={500} />
        </MemoryRouter>
      </RecoilRoot>
    );
    const profileImg = screen.getByTestId("sProfileImg");
    const sEditBtn = screen.getByTestId("sEditBtn");
    const selectBar = screen.getByTestId("rowSelectBar");

    expect(profileImg).toBeEmptyDOMElement();
    expect(sEditBtn).toHaveTextContent("나의 Tyle 수정하기");
    expect(selectBar).toBeInTheDocument();
  });

  test("길이가 1100인 경우", () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <TyleHeader width={1100} />
        </MemoryRouter>
      </RecoilRoot>
    );
    const profileImg = screen.getByTestId("sProfileImg");
    const selectBar = screen.getByTestId("colSelectBar");
    const sEditBtn = screen.getByTestId("sEditBtn");

    expect(profileImg).toBeEmptyDOMElement();
    expect(selectBar).toBeInTheDocument();
    expect(sEditBtn).toHaveTextContent("나의 Tyle 수정하기");
  });

  test("길이가 1200인 경우", () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <TyleHeader width={1200} />
        </MemoryRouter>
      </RecoilRoot>
    );
    const profileImg = screen.getByTestId("wProfileImg");
    const selectBar = screen.getByTestId("colSelectBar");

    expect(profileImg).toBeEmptyDOMElement();
    expect(selectBar).toBeInTheDocument();
  });
});
