import * as types from "../types";

const initialState = {
  bookings: [],
  loading: true,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookingReducer;
