import { http, HttpResponse } from "msw";
import { tyleInfoMock, userInfoMock } from "./mockJson";

const API_URL = process.env.REACT_APP_API_URL;

export const handlers = [
  http.get(`${API_URL}/tyles/:tyleName`, () =>
    HttpResponse.json({
      id: 13,
      name: "park",
      following: 0,
      followers: 0,
      location: "서울특별시 구로구",
      avatarImage:
        "https://d34u55v4nqgd5i.cloudfront.net/default/ar/personal/AR_2.png",
      shortIntro: "짧은소개",
      longIntro:
        "기~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~인 소개",
      components: {
        CHAMPION: {
          championDetails: [
            {
              id: 15,
              name: "controller",
              imageUrl: "https://image.tyle.gg/default/valorant/viper.jpg",
              winRate: 0,
              playTime: 0,
            },
            {
              id: 16,
              name: "initiator",
              imageUrl: "https://image.tyle.gg/default/valorant/sky.jpg",
              winRate: 0,
              playTime: 0,
            },
            {
              id: 17,
              name: "duelist",
              imageUrl: "https://image.tyle.gg/default/valorant/jet.jpg",
              winRate: 0,
              playTime: 0,
            },
            {
              id: 18,
              name: "initiator",
              imageUrl: "https://image.tyle.gg/default/valorant/sky.jpg",
              winRate: 0,
              playTime: 0,
            },
          ],
        },
        SOCIALLINK: {
          urls: [
            {
              id: 19,
              url: "https://www.facebook.com",
            },
            {
              id: 20,
              url: "https://youtube.com",
            },
          ],
        },
        MAIN_POSITION: {
          positions: ["DUELIST"],
        },
        INGAME: {
          id: 14,
          dpi: 1,
          aimImage:
            "https://d34u55v4nqgd5i.cloudfront.net/ingame/aimImage_12345.png",
        },
      },
    })
  ),
  http.get("/champions/duelist", async () => {
    return HttpResponse.json(
      {
        "champions": [
          {
            "id": 1,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/ZETT.webp"
          },
          {
            "id": 2,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/REYNA.webp"
          },
          {
            "id": 3,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/RAZE.webp"
          },
          {
            "id": 4,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/PHOENIX.webp"
          },
          {
            "id": 5,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/NEON.webp"
          },
          {
            "id": 6,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/YORU.webp"
          },
          {
            "id": 7,
            "imageUrl": "https://d34u55v4nqgd5i.cloudfront.net/default/valorant/duelist/ISO.webp"
          },
        ]
      }
    )
  }),
  http.get("/champions/initiator", async () => {
    return HttpResponse.json(
      {
        "champions": [
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
        ]
      }
    )
  }),
  http.get("/champions/sentinel", async () => {
    return HttpResponse.json(
      {
        "champions": [
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
          },
        ]
      }
    )
  }),
  http.get("/champions/controller", async () => {
    return HttpResponse.json(
      {
        "champions": [
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
          },
        ]
      }
    )
  }),
  http.get(`${API_URL}/tyles/:tyleName`, () => HttpResponse.json(tyleInfoMock)),
  http.get(`${API_URL}/tyles/cards`, () => HttpResponse.json(userInfoMock)),
  http.post(`/tyles`, async (prop) => {
    const data = await (prop.request.json());
    if (data != null && typeof data === 'object') {
      const isNotVaildData = (data.type === "" || data.positions.length === 0 || data.avatarImage === "");
      const isNullData = (data.type === null || data.positions === null || data.avatarImage === null);

      if (isNotVaildData) {
        return new HttpResponse(JSON.stringify({ message: "요청에 데이터가 포함되어 있지 않습니다." }), {
          status: 400,
        });
      }
      else if (!isNotVaildData && data.champions.length === 0) {
        return new HttpResponse(JSON.stringify({ message: "선택이 잘못된 챔피언을 요청하였습니다." }), {
          status: 400,
        });
      }
      else if (isNullData) {
        return new HttpResponse(JSON.stringify({
          "message": "Validation failed for argument [1] in public void gg.tyle.api.presentation.tyle.TyleController.createTyle(gg.tyle.global.auth.model.AuthMember,gg.tyle.api.dto.tyle.TyleCreateRequest) with 3 errors: [Field error in object 'tyleCreateRequest' on field 'name': rejected value [null]; codes [NotNull.tyleCreateRequest.name,NotNull.name,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [tyleCreateRequest.name,name]; arguments []; default message [name]]; default message [must not be null]] [Field error in object 'tyleCreateRequest' on field 'avatarImage': rejected value [null]; codes [NotNull.tyleCreateRequest.avatarImage,NotNull.avatarImage,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [tyleCreateRequest.avatarImage,avatarImage]; arguments []; default message [avatarImage]]; default message [must not be null]] [Field error in object 'tyleCreateRequest' on field 'type': rejected value [null]; codes [NotNull.tyleCreateRequest.type,NotNull.type,NotNull.gg.tyle.api.domain.tyle.Tyle$Type,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [tyleCreateRequest.type,type]; arguments []; default message [type]]; default message[must not be null]] ",
          "validation": {
            "avatarImage": "must not be null",
            "name": "must not be null",
            "type": "must not be null"
          }
        }), {
          status: 400,
        });
      }

      return new HttpResponse(JSON.stringify({ "tyleName": data.name }), {
        status: 201,
      });
    }
  })
];
