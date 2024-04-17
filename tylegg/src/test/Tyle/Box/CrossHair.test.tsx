import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { tyleInfoMock } from "mocks/mockJson";
import CrossHair from "components/Tyle/Box/CrossHair";

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
          <CrossHair />
        </MemoryRouter>
      </RecoilRoot>
    );

    const img = screen.getByText("에임 프로필").nextSibling;
    expect(img).toBeInTheDocument();
  });
});
