import React from "react";
import {
  CodepenOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import number from "../../utils/number";
import { Link } from "react-router-dom";
const Widget = ({ type, user, product, order, sum, up }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        query: "users",
        icon: (
          <UserOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "darkblue" }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View all products",
        query: "products",
        icon: (
          <CodepenOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        query: "orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "yellow" }}
          />
        ),
      };
      break;
    case "earns":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all earnings",
        query: "earns",
        icon: (
          <MoneyCollectOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "teal" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget__left">
        <span className="widget__left__title">{data.title}</span>
        <span className="widget__left__counter">
          {type === "users" && user.length}
          {type === "products" && product.length}
          {type === "orders" && order?.length}
          {type === "earns" && number(sum)}
          {data.isMoney && " VND"}
        </span>
        <Link
          to={
            type === "users"
              ? "/users"
              : type === "products"
              ? "/products"
              : "/orders"
          }
          style={{ color: "black" }}
        >
          <span className="widget__left__link">{data.link}</span>
        </Link>
      </div>
      <div className="widget__right">
        <div className="widget__right__percent">
          {up === true ? (
            <UpOutlined style={{ color: "green" }} />
          ) : (
            <DownOutlined style={{ color: "red" }} />
          )}
          {type === "users" && "40%"}
          {type === "products" && "50%"}
          {type === "orders" && "20%"}
          {type === "earns" && "30%"}
        </div>
        <div className="widget__right__icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
