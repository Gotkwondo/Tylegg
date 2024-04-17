import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

expect.extend(matchers);
import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import Agency from "components/Tyle/Box/Agency";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { tyleInfoMock } from "mocks/mockJson";

describe("api테스트", () => {
  test("email값을 잘 가져오는가", () => {
    render(
      <RecoilRoot
        initializeState={(snapshot) =>
          snapshot.set(tyleInfoSelector, tyleInfoMock)
        }
      >
        <MemoryRouter>
          <Agency />
        </MemoryRouter>
      </RecoilRoot>
    );

    const agency = screen.getByText("email").nextSibling;
    expect(agency?.textContent).toContain("test.com");
  });
});
