import * as types from "../types";

const initialState = {
  flights: [],
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default flightReducer;
