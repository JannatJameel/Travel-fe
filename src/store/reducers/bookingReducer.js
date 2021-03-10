import * as types from "../types";

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FLIGHT:
      return {
        ...state,
        bookings: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
