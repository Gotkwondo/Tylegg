import { tyleInfoType } from "types/tyle";

export const tyleInfoMock = {
  id: 13,
  name: "park",
  following: 0,
  followers: 0,
  views: 0,
  isFollowed: false,
  location: "서울특별시 구로구",
  avatarImage:
    "https://d34u55v4nqgd5i.cloudfront.net/default/ar/personal/AR_2.png",
  agencyEmail: "test.com",
  shortIntro: "짧은 한줄소개",
  longIntro:
    "긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 긴 여러줄 소개 ",
  components: {
    EQUIPMENT: {
      equipments: [
        {
          id: 23,
          name: "log",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/equipment/mouse/logitech-g502.png",
          type: "MOUSE",
          storeSite: "http://new.image",
        },
        {
          id: 24,
          name: "sam",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/equipment/keyboard/pure.png",
          type: "KEYBOARD",
          storeSite: "http://new.image",
        },
      ],
    },
    WINNING_RECORD: {
      recordDetails: [
        {
          id: 21,
          record: "공식 한국 대회",
          certified: true,
          recordType: "OFFICIAL",
        },
        {
          id: 22,
          record: "한국 대회",
          certified: false,
          recordType: "UNOFFICIAL",
        },
        {
          id: 22,
          record: "한국 대회",
          certified: false,
          recordType: "UNOFFICIAL",
        },
      ],
    },
    CHAMPION: {
      championDetails: [
        {
          id: 15,
          name: "controller",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp",
          winRate: 53,
          playTime: 23,
          location: "R",
        },
        {
          id: 16,
          name: "initiator",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/SKYE.webp",
          winRate: 29,
          playTime: 15,
          location: "L",
        },
        {
          id: 17,
          name: "duelist",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/ZETT.webp",
          winRate: 0,
          playTime: 0,
          location: null,
        },
        {
          id: 18,
          name: "initiator",
          imageUrl:
            "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/SKYE.webp",
          winRate: 0,
          playTime: 0,
          location: null,
        },
      ],
    },
    SOCIALLINK: {
      urls: [
        {
          id: 19,
          url: "https://abc.com",
        },
        {
          id: 20,
          url: "https://you.com",
        },
      ],
    },
    MAIN_POSITION: {
      positions: [
        {
          id: 13,
          position: "DUELIST",
          sequence: "FIRST",
        },
      ],
    },
    INGAME: {
      id: 14,
      dpi: 1,
      aimImage:
        "https://d34u55v4nqgd5i.cloudfront.net/ingame/aimImage_12345.png",
      adsMultiplier: 0.6,
      sensitivity: 0.12,
      description: "설명",
    },
  },
} as tyleInfoType;

export const userInfoMock = {
  tyleId: 4,
  name: "park",
  location: "서울특별시 구로구",
  shortIntro: null,
  agencyEmail: "test.com",
  avatarImage: "https://image.tyle.site/default/ar/personal/AR_2.png",
  components: {
    CHAMPION: {
      championDetails: [
        {
          id: 1,
          name: "controller",
          imageUrl:
            "https://image.tyle.site/default/valorant/controller/VIPER.webp",
          winRate: 0,
          playTime: 0,
          location: "R",
        },
        {
          id: 2,
          name: "initiator",
          imageUrl:
            "https://image.tyle.site/default/valorant/initiator/SKYE.webp",
          winRate: 0,
          playTime: 0,
          location: "L",
        },
        {
          id: 3,
          name: "duelist",
          imageUrl:
            "https://image.tyle.site/default/valorant/duelist/ZETT.webp",
          winRate: 0,
          playTime: 0,
          location: null,
        },
        {
          id: 4,
          name: "initiator",
          imageUrl:
            "https://image.tyle.site/default/valorant/initiator/SKYE.webp",
          winRate: 0,
          playTime: 0,
          location: null,
        },
      ],
    },
    SOCIALLINK: {
      urls: [
        {
          id: 5,
          url: "https://abc.com",
        },
        {
          id: 6,
          url: "https://you.com",
        },
      ],
    },
  },
};

export const operatorImgData = [
  [
    {
      "id": 1,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/ZETT.webp' },
    {
      "id": 2,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/REYNA.webp'},
    {
      "id": 3,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/RAZE.webp'},
    {
      "id": 4,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/PHOENIX.webp'},
    {
      "id": 5,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/NEON.webp'},
    {
      "id": 6,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/YORU.webp'},
    {
      "id": 7,
      "imageUrl": 'https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/ISO.webp'
    }
  ],
  
  [
    {
      "id": 8,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/BREACH.webp"
    },
    {
      "id": 9,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/SOVA.webp"
    },
    {
      "id": 10,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/SKYE.webp"
    },
    {
      "id": 11,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/FADE.webp"
    },
    {
      "id": 12,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/KAY_O.webp"
    },
    {
      "id": 13,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/initiator/GEKKO.webp"
    },
  ],
  
  [
    {
      "id": 14,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/sentinel/SAGE.webp"
    },
    {
      "id": 15,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/sentinel/CYPHER.webp"
    },
    {
      "id": 16,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/sentinel/CHAMBER.webp"
    },
    {
      "id": 17,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/sentinel/KILLJOY.webp"
    },
    {
      "id": 18,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/sentinel/DEADLOCK.webp"
    }
  ],
  [
    {
      "id": 19,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/OMEN.webp"
    },
    {
      "id": 20,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/VIPER.webp"
    },
    {
      "id": 21,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/BRIMSTONE.webp"
    },
    {
      "id": 22,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/ASTRA.webp"
    },
    {
      "id": 23,
      "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/controller/HARBOR.webp"
    }
  ]
]