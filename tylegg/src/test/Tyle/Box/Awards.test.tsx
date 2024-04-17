import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { tyleInfoMock } from "mocks/mockJson";
import Awards from "components/Tyle/Box/Awards";

expect.extend(matchers);

describe("api테스트", () => {
  test("대회값을 잘 가져오는가", () => {
    render(
      <RecoilRoot
        initializeState={(snapshot) =>
          snapshot.set(tyleInfoSelector, tyleInfoMock)
        }
      >
        <MemoryRouter>
          <Awards />
        </MemoryRouter>
      </RecoilRoot>
    );

    const official = screen.getByTestId("award-official");
    expect(official?.textContent).toContain("공식 한국 대회");

    const noneOfficial = screen.getByTestId("award-none-official");
    expect(noneOfficial?.textContent).toContain("한국 대회");
  });
});
