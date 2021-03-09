import * as types from "../types";

const initialState = {
  departureFlights: [],
  returnFlights: [],
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DEPARTURES:
      return {
        ...state,
        departureFlights: action.payload,
        loading: false,
      };
    case types.FETCH_RETURNS:
      return {
        ...state,
        returnFlights: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;
