import React, { useContext } from "react";
import {
  TableOutlined,
  UserOutlined,
  CodepenOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogout } from "../../redux/callAPI";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const dispatchs = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    adminLogout(dispatchs, navigate);
  };
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
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <TableOutlined className="sidebar__center__icon" />
              <span>Dashboard</span>
            </li>
          </Link>
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
          <Link
            to="/accessories"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>
              <CodepenOutlined className="sidebar__center__icon" />
              <span>Accessories</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <ShoppingCartOutlined className="sidebar__center__icon" />
              <span>Orders</span>
            </li>
          </Link>

          <p className="sidebar__center__title">USER</p>

          <li onClick={handleLogout}>
            <LogoutOutlined className="sidebar__center__icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <div
          className="sidebar__bottom__color"
          onClick={() => [dispatch({ type: "LIGHT" })]}
        ></div>
        <div
          className="sidebar__bottom__color"
          onClick={() => [dispatch({ type: "DARK" })]}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
