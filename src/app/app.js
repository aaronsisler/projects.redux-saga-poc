import React from "react";
import { Provider } from "react-redux";

import store from "../store";
import Landing from "../components/landing";

const App = () => (
  <Provider store={store}>
    <Landing />
  </Provider>
);

export default App;
