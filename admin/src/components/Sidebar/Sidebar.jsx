import React, { useContext } from "react";
import {
  TableOutlined,
  UserOutlined,
  CodepenOutlined,
  ShopOutlined,
  CarOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="sidebar__top__logo">Flash Admin</span>
        </Link>
      </div>
      <div className="sidebar__center">
        <ul>
          <p className="sidebar__center__title">MAIN</p>
          <li>
            <TableOutlined className="sidebar__center__icon" />
            <span>Dashboard</span>
          </li>
          <p className="sidebar__center__title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <UserOutlined className="sidebar__center__icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>
              <CodepenOutlined className="sidebar__center__icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <ShopOutlined className="sidebar__center__icon" />
              <span>Orders</span>
            </li>
          </Link>
          <li>
            <CarOutlined className="sidebar__center__icon" />
            <span>Delivery</span>
          </li>
          <p className="sidebar__center__title">USEFUL</p>
          <li>
            <BarChartOutlined className="sidebar__center__icon" />
            <span>Stats</span>
          </li>
          <li>
            <BellOutlined className="sidebar__center__icon" />
            <span>Notifications</span>
          </li>
          <p className="sidebar__center__title">SERVICE</p>
          <li>
            <CloudOutlined className="sidebar__center__icon" />
            <span>System Heath</span>
          </li>
          <li>
            <EnvironmentOutlined className="sidebar__center__icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingOutlined className="sidebar__center__icon" />
            <span>Settings</span>
          </li>
          <p className="sidebar__center__title">USER</p>
          <li>
            <UserOutlined className="sidebar__center__icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className="sidebar__center__icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <div
          className="sidebar__bottom__color"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="sidebar__bottom__color"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
