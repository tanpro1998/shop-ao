import React, { useEffect, useState } from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import TableData from "../../components/TableData/TableData";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllAccessories } from "../../redux/callAPI";

const List = () => {
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);
  const [allProducts, setAllProducts] = useState([]);
  const [allAccessories, setAllAccessories] = useState([]);
  const totalProducts = allProducts.concat(allAccessories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAccessories());
  }, [dispatch]);

  useEffect(() => {
    setAllProducts(products);
    setAllAccessories(accessories);
  }, [products, accessories]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableData type="products" product={totalProducts} />
      </div>
    </div>
  );
};

export default List;
