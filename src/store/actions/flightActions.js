import instance from "./instance";
import * as types from "../types";

export const searchDepartures = (flight, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/departures", { params: flight });
      if (res.data.length === 0) {
        history.replace("/");
        alert("No flights found try another search.");
      }
      dispatch({
        type: types.FETCH_DEPARTURES,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const searchReturns = (flight) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/returns", { params: flight });
      dispatch({
        type: types.FETCH_RETURNS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const fetchAirports = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/airports");
      dispatch({
        type: types.FETCH_AIRPORTS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const airlineFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines/flights");
      dispatch({
        type: types.FETCH_AIRLINE_FLIGHTS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const flightCreate = (flight) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/airlines/flights", flight);
      dispatch({
        type: types.CREATE_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
