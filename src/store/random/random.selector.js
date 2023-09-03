import { createSelector } from "reselect";

const currentRandomSlice = (state) => state.random;

export const selectCurrentUser = createSelector(
  [currentRandomSlice],
  (currentRandomSlice) => currentRandomSlice
);
