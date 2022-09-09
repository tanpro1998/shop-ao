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

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("admin"));
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
            <span>English</span>
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
                  ? "https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6"
                  : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
              }
              alt=""
            />
            <div className="userAdmin">{currentUser.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
