import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <Menu mode="vertical" className={styles.siderMenu}>
      <Menu.Item>
        <NavLink to="/">Главная</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/search">Поиск</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/Bank">Банк</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/Card">Карта</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
