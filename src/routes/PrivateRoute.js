import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...rest} /> : <Redirect push to="login" />
      }
    />
  );
};
