import * as types from "../types";

const initialState = {
  user: null,
  profile: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
