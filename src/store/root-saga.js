import { all, call } from "redux-saga/effects";
import { randomSaga } from "./random/random.saga";
//es-6: generater function
export function* rootSaga() {
  yield all([call(randomSaga)]);
}
