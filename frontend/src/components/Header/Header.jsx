import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import { useSelector } from "react-redux";
import { userLogout } from "../../redux/callAPI";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  { display: "Sản Phẩm", path: "/catalog" },
  { display: "Phụ Kiện", path: "/accessories" },
  { display: "Liên Hệ", path: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef("");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;
  const { quantity } = useSelector((state) => state.cart);

  const handleLogout = () => {
    userLogout();
  };

  const menu = (
    <Menu>
      <Menu.Item key={0}>
        <a href="/">Trang chủ</a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a href="/catalog">Sản phẩm</a>
      </Menu.Item>
      <Menu.Item key={2} onClick={handleLogout}>
        <li>Đăng xuất</li>
      </Menu.Item>
    </Menu>
  );

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <div className="header__logo__banner">
              <span>FLASH</span>
            </div>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu color-white"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-window-close"></i>
            </div>

            {mainNav.map((item, index) => (
              <div
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                key={index}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div
              className="header__menu__item header__menu__right__item"
              style={{ position: "relative" }}
            >
              <Link to="/cart">
                <i className="bx bx-shopping-bag" style={{ fontSize: "25px" }}>
                  <span
                    style={{
                      fontSize: "15px",
                      position: "absolute",
                      top: "0px",
                      left: "20px",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#1890ff",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {quantity}
                  </span>
                </i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              {user ? (
                <Dropdown
                  overlay={menu}
                  className="header__menu__item header__menu__right__item__dropdown"
                >
                  {user && isAdmin ? (
                    <Button>
                      <span style={{ color: "black" }}>
                        {user?.name} (admin)
                      </span>
                    </Button>
                  ) : (
                    <Button>
                      <span style={{ color: "black" }}>{user?.name}</span>
                    </Button>
                  )}
                </Dropdown>
              ) : (
                <Link to="/login">
                  <span>Đăng nhập</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
