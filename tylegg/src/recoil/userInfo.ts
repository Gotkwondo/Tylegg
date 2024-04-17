import { atom } from "recoil";
import { userInfoType } from "types/user";

const initialUserId = null;

export const userIdState = atom<number | null>({
  key: "userIdState",
  default: initialUserId,
});

export const initialUserInfo = {
  tyleId: 0,
  name: "",
  location: "string",
  shortIntro: null,
  agencyEmail: "",
  avatarImage: "",
  components: {
    CHAMPION: {
      championDetails: [],
    },
    SOCIALLINK: {
      urls: [],
    },
  },
};

export const userInfoState = atom<userInfoType>({
  key: "userInfoState",
  default: initialUserInfo,
});
