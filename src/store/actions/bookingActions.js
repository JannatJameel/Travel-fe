import instance from "./instance";
import * as types from "../types";

export const addFlight = (newFlight) => {
  localStorage.setItem("cartItems", true);
  return {
    type: types.ADD_FLIGHT,
    payload: newFlight,
  };
};

export const checkout = (cart) => {
  return async (dispatch) => {
    try {
      await instance.post("/checkout", cart);
      dispatch({
        type: types.CHECKOUT,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
