import { combineReducers } from "redux";
import flight from "./flightReducer";
import booking from "./bookingReducer";
import user from "./authReducer";

const rootReducer = combineReducers({ flight, booking, user });

export default rootReducer;
