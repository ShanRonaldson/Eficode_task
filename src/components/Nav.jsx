import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Routes } from "./Routes";

export function Nav() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <Redirect to="/home"></Redirect>
          </Route>
        <Route path="*">
          <Routes />
        </Route>
      </Switch>
    </Router>
  );
}
