import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Product/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Accessories from "../pages/Accessory/Accessories";
import Contact from "../pages/Contact/Contact";
import ProductView from "../pages/Product/ProductView";
import AccessoryView from "../pages/Accessory/AccessoryView";
import Accessory from "../pages/Accessory/Accessory";
import { useDispatch } from "react-redux";
import { getAllAccessories, getAllProducts } from "../redux/callAPI";

const Router = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAccessories());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/">
        {user ? (
          <Route index element={<Home />} />
        ) : (
          <Route index element={<Navigate to="login" />} />
        )}
        <Route path="slug/:slug" element={<ProductView />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:slug" element={<ProductView />} />
        <Route path="product/:productId" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:slug" element={<AccessoryView />} />
        <Route path="/accessory/:accessoryId" element={<Accessory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        {!user ? (
          <Route path="login" element={<Login />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
