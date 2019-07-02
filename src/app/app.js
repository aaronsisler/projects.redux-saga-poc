import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../store";
import history from "../tools/history";
import AppContainer from "../containers/app-container";
import "normalize.css/normalize.css";
import "./app.scss";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>
);

export default App;
