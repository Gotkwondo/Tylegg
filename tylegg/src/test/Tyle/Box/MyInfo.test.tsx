import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { tyleInfoMock } from "mocks/mockJson";
import MyInfo from "components/Tyle/Box/MyInfo";

expect.extend(matchers);

describe("api테스트", () => {
  test("소개값을 잘 가져오는가", () => {
    render(
      <RecoilRoot
        initializeState={(snapshot) =>
          snapshot.set(tyleInfoSelector, tyleInfoMock)
        }
      >
        <MemoryRouter>
          <MyInfo />
        </MemoryRouter>
      </RecoilRoot>
    );

    const oneLineIntroduce = screen.getByText("한줄 소개").nextSibling;
    expect(oneLineIntroduce?.textContent).toContain("짧은 한줄소개");

    const multiLineIntroduce = screen.getByText("자기 소개").nextSibling;
    expect(multiLineIntroduce?.textContent).toContain(
      "긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 "
    );
  });
});
