import React, { Component } from "react";
import "antd/dist/antd.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRouteContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Register} path="/register" />
          <PrivateRoute exact component={Main} path="/" />
          {/* <PrivateRoute path="/profile" />
          <PrivateRoute path="/search" /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
