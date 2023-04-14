import * as types from "./actionType";

const initial = {
  data: [],
};

export const appReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.getDatauccess:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
