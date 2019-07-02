import React from "react";
import { Route, Switch } from "react-router-dom";

import { LandingPage, NotFoundPage, SavedPage } from "../pages";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact={true} />
    <Route path="/saved" component={SavedPage} exact={true} />
    <Route path="/not_found" component={NotFoundPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
