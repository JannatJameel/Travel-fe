import instance from "./instance";
import * as types from "../types";

export const searchDepartures = (flight) => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights/departures", { params: flight });
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
      console.log("return flights", res.data);
      dispatch({
        type: types.FETCH_RETURNS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
