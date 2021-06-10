import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <Menu mode="vertical" style={{ width: 150, height: "100vh" }}>
      <Menu.Item>
        <NavLink to="/">Главная</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/search">Поиск</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
