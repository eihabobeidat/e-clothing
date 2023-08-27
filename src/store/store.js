import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action?.type) {
    return next();
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("nextState:", store.getState());
};

const middleware = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
