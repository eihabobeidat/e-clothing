import { createSelector } from "reselect";

const currentUserSlice = (state) => state.user;

export const selectCurrentUser = createSelector(
  [currentUserSlice],
  (currentUserSlice) => currentUserSlice.currentUser
);
