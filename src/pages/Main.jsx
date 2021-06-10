import React from "react";
import { Layout } from "antd";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

const Main = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <SideMenu />
      </Layout>
    </Layout>
  );
};

export default Main;
