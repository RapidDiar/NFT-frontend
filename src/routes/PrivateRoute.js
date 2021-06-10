import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, showSecret, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        showSecret ? <Component {...rest} /> : <Redirect push to="login" />
      }
    />
  );
};
