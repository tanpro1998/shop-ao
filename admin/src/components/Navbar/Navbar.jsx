import React, { useContext } from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  FullscreenOutlined,
  BellOutlined,
  MessageOutlined,
  BarsOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = ({ currentUser }) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="navbar__wrapper__items">
          <div className="navbar__wrapper__items__item">
            <GlobalOutlined className="icon" />
            <p>English</p>
          </div>
          <div
            className="navbar__wrapper__items__item"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <BulbOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <FullscreenOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <BellOutlined className="icon" />
            <div className="counter">4</div>
          </div>
          <div className="navbar__wrapper__items__item">
            <MessageOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="navbar__wrapper__items__item">
            <BarsOutlined className="icon" />
          </div>
          <div className="navbar__wrapper__items__item">
            <img
              src={
                currentUser
                  ? "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/273301925_664914081311894_2335935164305714610_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pvbSUP-OgioAX8_xC71&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-oL0eb3g4zb-C22jjQnl6TVlhwWJ5LNMZfiFZEjPtoMw&oe=625D9910"
                  : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
              }
              alt=""
            />
            <div
              className="logoutBtn"
              onClick={() => [
                localStorage.removeItem("admin"),
                localStorage.removeItem("access"),
                localStorage.removeItem("refresh"),
                (window.location.href = "/login"),
              ]}
            >
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
