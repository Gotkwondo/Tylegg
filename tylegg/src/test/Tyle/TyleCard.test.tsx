import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

expect.extend(matchers);
import TyleCard from "components/Tyle/TyleCard";

describe("TyleCard 길이 테스트", () => {
  test("길이가 400px인 경우", async () => {
    render(<TyleCard width={"400"} isLogin={true} />);
    const linkElement = await screen.findByTestId("tylecard");

    expect(linkElement).toHaveStyle("width: 400px");
  });

  test("길이가 700px인 경우", async () => {
    render(<TyleCard width={"700"} isLogin={true} />);
    const linkElement = await screen.findByTestId("tylecard");

    expect(linkElement).toHaveStyle("width: 700px");
  });

  test("길이가 2000px인 경우", async () => {
    render(<TyleCard width={"2000"} isLogin={true} />);
    const linkElement = await screen.findByTestId("tylecard");
    expect(linkElement).toHaveStyle("width: 2000px");
  });
});
