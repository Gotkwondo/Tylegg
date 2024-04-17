export interface tyleUserStateType {
  id: number;
  name: string;
  following: number;
  followers: number;
  views: number;
  isFollowed: boolean;
  agencyEmail: string;
  location: string;
  avatarImage: string;
  shortIntro: string;
  longIntro: string;
}

export interface equipmentsStateType {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  storeSite: string;
}

export interface winningRecordStateType {
  id: number;
  record: string;
  certified: boolean;
  recordType: string;
}

export interface championStateType {
  id: number;
  name: string;
  imageUrl: string;
  winRate: number;
  playTime: number;
  location: "R" | "L" | null;
}

export interface socialLinkStateType {
  id: number;
  url: string;
}

export interface ingameStateType {
  id: number;
  dpi: number;
  aimImage: string;
  adsMultiplier: number;
  sensitivity: number;
  description: string;
}

export interface mainPositionStateType {
  id: number;
  position: string;
  sequence: string;
}

export interface tyleInfoType {
  id: number;
  name: string;
  following: number;
  followers: number;
  views: number;
  isFollowed: boolean;
  agencyEmail: string;
  location: string;
  avatarImage: string;
  shortIntro: string;
  longIntro: string;
  components: {
    EQUIPMENT: {
      equipments: equipmentsStateType[];
    };
    WINNING_RECORD: {
      recordDetails: winningRecordStateType[];
    };
    CHAMPION: {
      championDetails: championStateType[];
    };
    SOCIALLINK: {
      urls: socialLinkStateType[];
    };
    MAIN_POSITION: {
      positions: mainPositionStateType[];
    };
    INGAME: ingameStateType;
  };
}
