import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../types";
import { airlineFlights } from "./flightActions";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
      alert("Successfully signed up");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      alert("Successfully signed in");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/profile");
      dispatch({
        type: types.FETCH_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateProfile = (updatedProfile) => {
  return async (dispatch) => {
    try {
      const res = await instance.put("/update", updatedProfile);
      dispatch({
        type: types.UPDATE_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const userHistory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/history");
      dispatch({
        type: types.FETCH_HISTORY,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
      dispatch(fetchProfile());
      dispatch(userHistory());
      if (user.isAirline) dispatch(airlineFlights());
    } else {
      localStorage.removeItem("myToken");
      dispatch(signout());
    }
  }
};
