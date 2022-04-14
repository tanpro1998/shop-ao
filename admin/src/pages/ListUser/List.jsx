import React, { useEffect, useState } from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TableData from "../../components/TableData/TableData";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllAccessories,
  getAllUsers,
} from "../../redux/callAPI";

const List = () => {
  const { users } = useSelector((state) => state.users);
  // const { accessories } = useSelector((state) => state.accessories);
  // const [allProducts, setAllProducts] = useState([]);
  // const [allAccessories, setAllAccessories] = useState([]);
  // const totalProducts = allProducts.concat(allAccessories);
  const [allUsers, setAllUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // dispatch(getAllProducts());
    // dispatch(getAllAccessories());
  }, [dispatch]);

  useEffect(() => {
    setAllUsers(users);
    // setAllProducts(products);
    // setAllAccessories(accessories);
  }, [users]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableData type="users" user={allUsers} />
      </div>
    </div>
  );
};

export default List;
