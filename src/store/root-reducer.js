import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { randomReducer } from "./random/random.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  random: randomReducer,
});
