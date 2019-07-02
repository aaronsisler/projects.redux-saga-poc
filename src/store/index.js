// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";

import counterReducer from "../reducers";
import rootSaga from "../sagas";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
export default createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
