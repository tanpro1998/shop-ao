import axios from "axios";
import { message } from "antd";
import jsCookie from "js-cookie";

import { getAllAccessory } from "./accessoriesSlice";
import { getAllProduct } from "./productSlice";
import { loading } from "./alertSlice";
import { publicRequest, userRequest } from "../utils/axiosInstance";

export const getAllProducts = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await publicRequest.get("/products/getallproducts");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/addproduct", reqObj);
    message.success("Add Product Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const editProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/editproduct", reqObj);
    message.success("Edit Product Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const deleteProduct = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/products/deleteproduct", reqObj);
    message.success("Delete Product Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const getAllAccessories = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await publicRequest.get("/accessories/getallaccessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addAccessory = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/accessories/addaccessory", reqObj);
    message.success("Add Accessory Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const editAccessory = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/accessories/editaccessory", reqObj);
    message.success("Edit Accessory Success");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const deleteAccessory = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await userRequest.post("/accessories/deleteaccessory", reqObj);
    message.success("Delete Access Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await publicRequest.post("/users/register", reqObj);
    message.success("Register Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await publicRequest.post("/users/login", reqObj);
    localStorage.setItem("user", JSON.stringify(res.data));
    jsCookie.set("access", res.data.accessToken);
    jsCookie.set("refresh", res.data.refreshToken);
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const checkOut = (reqObj) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post("http://localhost:5000/api/checkout/payment", reqObj);
    message.success("Checkout Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
