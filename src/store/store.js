import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { counterReducer, notificationReducer } from "../reducers";
import rootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
export default createStore(
  combineReducers({
    counter: counterReducer,
    notification: notificationReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
