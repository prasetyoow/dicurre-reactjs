import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// reducers
import auth from "./auth";
import profile from "./profile";
import transactions from "./transactions";


const authConfig = {
  key: 'auth',
  storage
}

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile,
  transactions,
});

export default reducer;
