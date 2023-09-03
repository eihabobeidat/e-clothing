import { RANDOM_ACTION_TYPES } from "./random.type";

export const randomActions = {
  fetchRandomStart: () => ({ type: RANDOM_ACTION_TYPES.FETCH_RANDOM_START }),
  fetchRandomSuccess: (payload) => ({
    type: RANDOM_ACTION_TYPES.FETCH_RANDOM_SUCCESS,
    payload,
  }),
  fetchRandomFail: (payload) => ({
    type: RANDOM_ACTION_TYPES.FETCH_RANDOM_FAILED,
    payload,
  }),
  randomDataPop: () => ({
    type: RANDOM_ACTION_TYPES.DATA_RANDOM_POP,
  }),
};

//this is for thunk, the names convention is from diffrent world
export const fetchRandomDataAsync = () => async (dispatch) => {
  dispatch(randomActions.fetchRandomStart());
  try {
    const { data } = await (
      await fetch("https://api.jikan.moe/v4/anime/2648/characters")
    ).json();
    console.log(data);
    dispatch(randomActions.fetchRandomSuccess(data));
  } catch (error) {
    dispatch(randomActions.fetchRandomFail(error));
  }
};
