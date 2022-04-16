import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/table/Table";
import { getAllOrders } from "../../redux/callAPI";
import "./list.scss";

const List = ({ currentUser }) => {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [allOrders, setAllOrders] = useState([]);
  const resultOrder = allOrders?.data;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    setAllOrders(orders);
  }, [orders]);

  console.log(resultOrder);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <Table orders={resultOrder} />
      </div>
    </div>
  );
};

export default List;
