import React from "react";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth/authActions";

const { SubMenu } = Menu;

const HeaderMenu = (props) => {
  const logoutClick = () => {
    props.onLogout();
  };

  return (
    <Menu mode="horizontal">
      <SubMenu title="Профиль" style={{ float: "right", marginRight: 30 }}>
        <Menu.Item>
          <NavLink to="/profile">Профиль</NavLink>
        </Menu.Item>
        <MenuItem>
          <Link onClick={logoutClick} to="/login">
            Выход
          </Link>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(HeaderMenu);
