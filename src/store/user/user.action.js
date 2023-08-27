import { USER_ACTION_TYPES } from "./user.type";

export const setCurrentUser = (payload) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload,
});
