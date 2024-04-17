import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import { championState, tyleInfoSelector } from "recoil/tyleInfo";
import { tyleInfoMock } from "mocks/mockJson";
import PositionInfo from "components/Tyle/Box/PositionInfo";
import { championStateType } from "types/tyle";

expect.extend(matchers);

describe("api테스트", () => {
  test("api값을 잘 가져오는가", () => {
    render(
      <RecoilRoot
        initializeState={(snapshot) =>
          snapshot.set(tyleInfoSelector, tyleInfoMock)
        }
      >
        <MemoryRouter>
          <PositionInfo />
        </MemoryRouter>
      </RecoilRoot>
    );

    const mainPosition =
      screen.getByText("주 포지션 및 most 챔피언").nextSibling;
    expect(mainPosition?.textContent).toContain("DUELIST");
    const mostChampion = mainPosition?.nextSibling;
    expect(mostChampion?.textContent).toContain("initiator , controller");
  });

  test("ChampionInfo가 없는경우", () => {
    render(
      <RecoilRoot
        initializeState={(snapshot) => {
          snapshot.set(tyleInfoSelector, tyleInfoMock);
          snapshot.set(championState, []);
        }}
      >
        <MemoryRouter>
          <PositionInfo />
        </MemoryRouter>
      </RecoilRoot>
    );

    const championArea = screen.getByTestId("champion-area");
    expect(championArea).toBeEmptyDOMElement();
  });

  test("메인 챔피언만 있고 서브 챔피언이 없는 경우", () => {
    const initialChampionState = [
      {
        id: 15,
        name: "controller",
        imageUrl:
          "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp",
        winRate: 53,
        playTime: 23,
        location: "L",
      },
    ] as championStateType[];

    render(
      <RecoilRoot
        initializeState={(snapshot) => {
          snapshot.set(tyleInfoSelector, tyleInfoMock);
          snapshot.set(championState, initialChampionState);
        }}
      >
        <MemoryRouter>
          <PositionInfo />
        </MemoryRouter>
      </RecoilRoot>
    );

    const championArea = screen.getByTestId("champion-area");
    expect(championArea.childNodes.length).toBe(1);
  });

  test("여러개의 챔피언이 들어오지만 메인 챔피언만 있는 경우", () => {
    const initialChampionState = [
      {
        id: 15,
        name: "controller",
        imageUrl:
          "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp",
        winRate: 53,
        playTime: 23,
        location: "L",
      },
      {
        id: 15,
        name: "controller",
        imageUrl:
          "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp",
        winRate: 53,
        playTime: 23,
        location: null,
      },
      {
        id: 15,
        name: "controller",
        imageUrl:
          "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp",
        winRate: 53,
        playTime: 23,
        location: null,
      },
    ] as championStateType[];

    render(
      <RecoilRoot
        initializeState={(snapshot) => {
          snapshot.set(tyleInfoSelector, tyleInfoMock);
          snapshot.set(championState, initialChampionState);
        }}
      >
        <MemoryRouter>
          <PositionInfo />
        </MemoryRouter>
      </RecoilRoot>
    );

    const championArea = screen.getByTestId("champion-area");
    expect(championArea.childNodes.length).toBe(1);
  });
});
