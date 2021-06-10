import React from "react";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const Header = () => {
  return (
    <Menu mode="horizontal">
      <SubMenu title="Профиль" style={{ float: "right", marginRight: 30 }}>
        <Menu.Item>
          <NavLink to="/profile">Профиль</NavLink>
        </Menu.Item>
        <MenuItem>
          <NavLink to="/login" className="logout_button">
            Выход
          </NavLink>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default Header;
