import instance from "./instance";
import * as types from "../types";

export const addFlight = (newFlight) => ({
  type: types.ADD_FLIGHT,
  payload: newFlight,
});
