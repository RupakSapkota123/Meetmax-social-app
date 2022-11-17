import { combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import authReducers from "./auth/authSlice";

// const preferenceConfig = {
//   key: "tracking",
//   storage,
//   blacklist: [
//     "targetPost",
//     "targetComment",
//     "hasSentVerificationMail",
//     "sendVerificationMailError",
//     "isOpenVerificationMessage",
//   ],
// };

const rootReducers = combineReducers({
  auth: authReducers,
});

export default rootReducers;
