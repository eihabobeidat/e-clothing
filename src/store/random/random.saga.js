import { takeLatest, all, call, put } from "redux-saga/effects";
import { randomActions } from "./random.action";
import { RANDOM_ACTION_TYPES } from "./random.type";

const fetchDataApi = async () => {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime/2648/characters"
    );
    return await response.json();
  } catch (error) {
    console.Error("Random data fetch api error, ");
    throw error;
  }
};

export function* fetchRandomAsync() {
  //put used to dispatch action with saga
  try {
    const { data } = yield call(fetchDataApi);
    yield put(randomActions.fetchRandomSuccess(data));
  } catch (error) {
    yield put(randomActions.fetchRandomFail(error));
  }
}

export function* onFetchRandom() {
  yield takeLatest(RANDOM_ACTION_TYPES.FETCH_RANDOM_START, fetchRandomAsync);
}

export function* randomSaga() {
  yield all([call(onFetchRandom)]);
}
