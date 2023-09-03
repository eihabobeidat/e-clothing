import { RANDOM_ACTION_TYPES } from "./random.type";

export const RANDOM_INITIAL_VALUE = {
  data: [],
  isLoading: false,
  error: null,
};

export const randomReducer = (
  state = RANDOM_INITIAL_VALUE,
  { type, payload } //action
) => {
  switch (type) {
    case RANDOM_ACTION_TYPES.FETCH_RANDOM_START:
      return { ...state, isLoading: true };
    case RANDOM_ACTION_TYPES.FETCH_RANDOM_SUCCESS:
      return { ...state, isLoading: false, data: payload, error: null };
    case RANDOM_ACTION_TYPES.FETCH_RANDOM_FAILED:
      return { ...state, isLoading: false, error: payload };
    case RANDOM_ACTION_TYPES.DATA_RANDOM_POP:
      state.data?.pop();
      return { ...state };
    default:
      return state;
  }
};
