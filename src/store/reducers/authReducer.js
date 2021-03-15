import * as types from "../types";

const initialState = {
  user: null,
  profile: {},
  history: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case types.FETCH_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
