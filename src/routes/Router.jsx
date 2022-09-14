import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Product/Products";
import Accessories from "../pages/Accessory/Accessories";
import Contact from "../pages/Contact/Contact";
import ProductView from "../pages/Product/ProductView";
import AccessoryView from "../pages/Accessory/AccessoryView";
import Accessory from "../pages/Accessory/Accessory";
import { useDispatch } from "react-redux";
import { getAllAccessories, getAllProducts } from "../redux/callAPI";
import SignInOutContainer from "../components/Form/Form";

const Router = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts(dispatch);
    getAllAccessories(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="products/:slug" element={<ProductView />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:slug" element={<ProductView />} />
        {user ? (
          <Route path="product/:productId" element={<Products />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        <Route path="accessories" element={<Accessories />} />
        <Route path="accessories/:slug" element={<AccessoryView />} />
        {user ? (
          <Route path="accessory/:accessoryId" element={<Accessory />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        {!user ? (
          <Route path="login" element={<SignInOutContainer />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
