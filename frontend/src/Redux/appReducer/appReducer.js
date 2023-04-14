import * as types from "./actionType";

const initial = {
  data: [],
  loading:false,
  error:false
};

export const appReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.getDataLoading:{
      return {
        ...state,
        loading:true
      }
    }
    case types.getDataError:{
      return {
        ...state,
        error:true,
        loading:false
      }
    }

    case types.getDatauccess:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
