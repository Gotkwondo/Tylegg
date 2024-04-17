import { DefaultValue, atom, selector } from "recoil";
import {
  championStateType,
  equipmentsStateType,
  ingameStateType,
  mainPositionStateType,
  socialLinkStateType,
  tyleInfoType,
  tyleUserStateType,
  winningRecordStateType,
} from "types/tyle";

// User 정보 관리
const initialTyleUserState = {
  id: 0,
  name: "",
  following: 0,
  followers: 0,
  views: 0,
  isFollowed: false,
  agencyEmail: "",
  location: "",
  avatarImage: "",
  shortIntro: "",
  longIntro: "",
};

export const tyleUserState = atom<tyleUserStateType>({
  key: "tyleUserState",
  default: initialTyleUserState,
});

const initialEqumentsState = [
  {
    id: 0,
    name: "",
    imageUrl: "",
    type: "",
    storeSite: "",
  },
];

export const equipmentsState = atom<equipmentsStateType[]>({
  key: "equipmentsState",
  default: initialEqumentsState,
});

const initialWinningRecordState = [
  {
    id: 0,
    record: "",
    certified: true,
    recordType: "OFFICIAL",
  },
];

export const winningRecordState = atom<winningRecordStateType[]>({
  key: "winningRecordState",
  default: initialWinningRecordState,
});

// Champion 정보 관리
const initialChampionState = [
  {
    id: 0,
    name: "",
    imageUrl: "",
    winRate: 0,
    playTime: 0,
    location: null,
  },
];

export const championState = atom<championStateType[]>({
  key: "championState",
  default: initialChampionState,
});

// SocialLink 정보 관리
const initialSocialLinkState = [
  {
    id: 0,
    url: "",
  },
];
export const socialLinkState = atom<socialLinkStateType[]>({
  key: "socialLinkState",
  default: initialSocialLinkState,
});

// Main Position 정보 관리
const initialMainPositionState = [
  {
    id: 0,
    position: "",
    sequence: "",
  },
];
export const mainPositionState = atom<mainPositionStateType[]>({
  key: "mainPositionState",
  default: initialMainPositionState,
});

// Ingame 정보 관리
const initialInGameState = {
  id: 0,
  dpi: 0,
  aimImage: "",
  adsMultiplier: 0,
  sensitivity: 0,
  description: "",
};

export const ingameState = atom<ingameStateType>({
  key: "ingameState",
  default: initialInGameState,
});

// 모든 정보를 묶는 selector
export const tyleInfoSelector = selector({
  key: "tyleInfoState",
  get: ({ get }) => {
    return {
      ...get(tyleUserState),
      components: {
        EQUIPMENT: {
          equipments: get(equipmentsState),
        },
        WINNING_RECORD: {
          recordDetails: get(winningRecordState),
        },
        CHAMPION: {
          championDetails: get(championState),
        },
        SOCIALLINK: {
          urls: get(socialLinkState),
        },
        MAIN_POSITION: {
          positions: get(mainPositionState),
        },
        INGAME: get(ingameState),
      },
    } as tyleInfoType;
  },
  set: ({ set }, tyleInfo: tyleInfoType | DefaultValue) => {
    if (tyleInfo instanceof DefaultValue) {
      // DefaultValue가 전달되면 모든 상태를 초기화합니다.
      set(tyleUserState, initialTyleUserState);
      set(winningRecordState, initialWinningRecordState);
      set(championState, initialChampionState);
      set(socialLinkState, initialSocialLinkState);
      set(mainPositionState, initialMainPositionState);
      set(ingameState, initialInGameState);
      return;
    }
    set(tyleUserState, {
      id: tyleInfo.id,
      name: tyleInfo.name,
      following: tyleInfo.following,
      followers: tyleInfo.followers,
      views: tyleInfo.views,
      agencyEmail: tyleInfo.agencyEmail,
      isFollowed: tyleInfo.isFollowed,
      location: tyleInfo.location,
      avatarImage: tyleInfo.avatarImage,
      shortIntro: tyleInfo.shortIntro,
      longIntro: tyleInfo.longIntro,
    });
    set(winningRecordState, [
      ...tyleInfo.components.WINNING_RECORD.recordDetails,
    ]);
    set(championState, [...tyleInfo.components.CHAMPION.championDetails]);
    set(socialLinkState, [...tyleInfo.components.SOCIALLINK.urls]);
    set(mainPositionState, [...tyleInfo.components.MAIN_POSITION.positions]);
    set(ingameState, tyleInfo.components.INGAME);
  },
});
