import React, { useEffect } from "react";
import "antd/dist/antd.css";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Layout } from "antd";

import HeaderMenu from "./components/HeaderMenu";
import SideMenu from "./components/SideMenu";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRouteContainer";
import Profile from "./pages/Profile";
import styles from "./App.module.css";
import axiosInstance from "./axios/axiosApi";
import { refresh } from "./redux/refreshToken/refreshTokenAction";
import AddNft from "./pages/AddNft";

const { Header, Sider, Content } = Layout;

const LoginFalse = () => {
  return (
    <Switch>
      <Route exact component={Login} path="/login" />
      <Route exact component={Register} path="/register" />
      <Redirect to="/login" />
    </Switch>
  );
};

const LoginTrue = () => {
  useEffect(() => {
    dispatch(refresh());
    axiosInstance.defaults.headers.Authorization =
      "JWT " + localStorage.getItem("accessToken");
  }, []);

  const dispatch = useDispatch();
  axiosInstance.defaults.headers.Authorization =
    "JWT " + localStorage.getItem("accessToken");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(refresh());
      axiosInstance.defaults.headers.Authorization =
        "JWT " + localStorage.getItem("accessToken");
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Header className={styles.header}>
        <HeaderMenu />
      </Header>
      <Layout className={styles.mainSection}>
        <Sider className={styles.sider}>
          <SideMenu />
        </Sider>
        <Layout className={styles.contentLayout}>
          <Content>
            <Switch>
              <PrivateRoute exact component={Main} path="/" />
              <PrivateRoute exact component={AddNft} path="/addNft" />
              <PrivateRoute exact component={Profile} path="/profile" />
              {/* <PrivateRoute exact component={Main} path="/" />
            <PrivateRoute exact component={Main} path="/" /> */}
              <Redirect to="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const App = ({ auth }) => {
  console.log(auth.isLogin);
  return <Router>{auth.isLogin ? LoginTrue() : LoginFalse()}</Router>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
