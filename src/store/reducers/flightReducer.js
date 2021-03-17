import * as types from "../types";

const initialState = {
  search: {},
  airports: [],
  departureFlights: [],
  returnFlights: [],
  airlineFlights: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case types.FETCH_AIRPORTS:
      return {
        ...state,
        airports: action.payload,
      };
    case types.FETCH_DEPARTURES:
      return {
        ...state,
        departureFlights: action.payload,
      };
    case types.FETCH_RETURNS:
      return {
        ...state,
        returnFlights: action.payload,
      };
    case types.FETCH_AIRLINE_FLIGHTS:
      return {
        ...state,
        airlineFlights: action.payload,
      };
    case types.UPDATE_FLIGHT:
      return {
        ...state,
        airlineFlights: state.airlineFlights.map((flight) =>
          flight.id === action.payload.id ? action.payload : flight
        ),
      };
    default:
      return state;
  }
};

export default flightReducer;
