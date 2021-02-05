export function user(
  state = {
    Patient: [],
    // data: [],
    // singleData: [],
    // msgData: [],
    // memberData: [],
    // userData: [],
  },
  action
) {
  switch (action.type) {
    case "addPatient":
      return {
        state,
      };
    case "getPatient":
      return {
          ...state,
          Patient: action.payload,
      };
//     case "get":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     case "single":
//       return {
//         ...state,
//         singleData: action.payload,
//       };
//     case "send":
//       return {
//         user: state.data,
//       };
//     case "getMsg":
//       return {
//         ...state,
//         msgData: action.payload,
//       };

//     case "getMem":
//       return {
//         ...state,
//         memberData: action.payload,
//       };
//     case "userGet":
//       return {
//         ...state,
//         userData: action.payload,
//       };

//     case "userupd":
//       return {
//         state,
//       };
    default:
      return state;
  }
}
