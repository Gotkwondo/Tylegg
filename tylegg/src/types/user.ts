import { championStateType, socialLinkStateType } from "./tyle";

export interface userInfoType {
  tyleId: number;
  name: string;
  location: string;
  shortIntro: string | null;
  agencyEmail: string;
  avatarImage: string;
  components: {
    CHAMPION: {
      championDetails: championStateType[];
    };
    SOCIALLINK: {
      urls: socialLinkStateType[];
    };
  };
}
