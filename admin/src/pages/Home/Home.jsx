import React, { useEffect, useState } from "react";
import Chart from "../../components/chart/Chart";
import Features from "../../components/Features/Features";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import Table from "../../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAccessories,
  getAllOrders,
  getAllProducts,
  getAllUsers,
} from "../../redux/callAPI";

const Home = () => {
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);
  const { orders } = useSelector((state) => state.orders);
  const [allUsers, setAllUsers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allAccessories, setAllAccessories] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const resultOrders = allOrders?.data;

  const total = allProducts.concat(allAccessories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());
    dispatch(getAllAccessories());
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    setAllUsers(users);
    setAllProducts(products);
    setAllAccessories(accessories);
    setAllOrders(orders);
  }, [users, products, accessories, orders]);

  console.log(allOrders);

  let sum = 0;
  for (let i = 0; i < resultOrders?.length; i++) {
    sum += resultOrders[i].amount;
  }
  // console.log(orders);
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" user={allUsers} up={true} />
          <Widget type="products" product={total} up={false} />
          <Widget type="orders" order={resultOrders} up={false} />
          <Widget type="earns" up={true} sum={sum} />
        </div>
        <div className="charts">
          <Features sum={sum} />
          <Chart
            allData={resultOrders}
            title={"Last 10 Months"}
            aspect={2 / 1}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">All Orders</div>
          <Table orders={resultOrders} />
        </div>
      </div>
    </div>
  );
};

export default Home;
