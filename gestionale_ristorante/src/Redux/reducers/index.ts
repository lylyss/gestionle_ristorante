import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

export default rootReducer;
