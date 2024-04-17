import { operatorSubmitInterface, positionSubmitInterface } from 'types/newTyle';


// const setSelectedInfoFunc = (
//     name: 'pos' | 'agencyEmail' | 'avatarImage',
//     data: string | operatorSubmitInterface[],
//     additionalData?: string | positionSubmitInterface[],
//   ) => {
//     const checkData = typeof data === "string";
//     const checkAdditional = typeof additionalData === "string";
//     if (name === 'pos' && !checkData && additionalData && !checkAdditional) {
//       setNewTyleInfo({ ...newTyleInfo, ["champions"]: data, ["positions"]: additionalData });
//     } else if (name === 'agencyEmail' && checkData && additionalData && checkAdditional) {
//       setNewTyleInfo({ ...newTyleInfo, ["agencyEmail"]: data, ["type"]: additionalData });
//     } else if (name === 'avatarImage' && typeof data === 'string') {
//       setNewTyleInfo({ ...newTyleInfo, ["avatarImage"]: data });
//     }
//   }
// 위의 코드를 useReducer를 이용해 커스텀 Hook으로 만들어 로직을 분리하자.
// 일단은 기존 코드를 이용해 테스트 코드를 완성시키자