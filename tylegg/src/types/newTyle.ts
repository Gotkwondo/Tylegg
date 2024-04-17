export interface ImgInterface {
  id: number,
  imageUrl: string,
  state: boolean,
  name: string,
  position: string,
}
export interface operaotrsImgInterface {
  [key: string]: ImgInterface[]
}

// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
export interface selectedStateInterface {
  position: {
    [key: string]: boolean,
  },
  operator: ImgInterface[]
}

export interface loadPosImgApiInterface {
  id: number,
  imageUrl: string,
  state: false,
}

export interface selectedInterface {
  position: string[],
  operator: string[][],
}

export interface agencyStateInterface{
  agency: boolean,
  individual: boolean,
  [key: string]: boolean,
}

export interface agencyInfoInterface {
  name: string,
  email: string,
  [key: string]: string,
}

export interface positionSubmitInterface {
  id: null,
  position: string | null,
  sequence: string | null,
}

export interface operatorSubmitInterface {
  id: number,
  championLocation: string | null
}

export interface selectedInfoInterface {
  type: string,
  name: string,
  champions: operatorSubmitInterface[],
  positions: positionSubmitInterface[],
  agencyEmail: string,
  avatarImage: string,
  [key: string]: string | operatorSubmitInterface[] | positionSubmitInterface[],
}

export class TyleCreateSubmitErrorInterface extends Error {
  response?: {
    data: any,
    status: number,
    headers: string,
  }
}