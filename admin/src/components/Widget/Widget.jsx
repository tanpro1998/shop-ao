import React from "react";
import {
  CodepenOutlined,
  ShoppingCartOutlined,
  UpOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Widget = ({ type, up }) => {
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);
  const { orders } = useSelector((state) => state.orders);
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
    case "accessories":
      data = {
        title: "ACCESSORIES",
        isMoney: false,
        link: "View all Accessories",
        query: "accessories",
        icon: (
          <CodepenOutlined
            className="icon"
            style={{ color: "white", backgroundColor: "teal" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: true,
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
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget__left">
        <span className="widget__left__title">{data.title}</span>
        <span className="widget__left__counter">
          {type === "users" && users.length}
          {type === "products" && products.length}
          {type === "accessories" && accessories.length}
          {type === "orders" && orders.data?.length}
        </span>
        <Link
          to={
            type === "users"
              ? "/users"
              : type === "products"
              ? "/products"
              : type === "accessories"
              ? "/accessories"
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
          {type === "accessories" && "20%"}
          {type === "orders" && "30%"}
        </div>
        <div className="widget__right__icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
