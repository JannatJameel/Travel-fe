import * as types from "../types";

const initialState = {
  bookings: [],
  passengers: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FLIGHT:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case types.CHECKOUT:
      return {
        ...state,
        bookings: [],
      };
    case types.SET_PASSENGERS:
      return {
        ...state,
        passengers: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
