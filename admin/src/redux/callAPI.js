import {
  axiosPublic,
  axiosInstance,
  stripeInstance,
  axiosStripe,
} from "../utils/axiosInstance";
import axios from "axios";
import { getAllUser } from "./userSlice";
import { getAllProduct } from "./productSlice";
import { getAllAccessory } from "./accessorySlice";
import { getAllOrder } from "./orderSlice";
import { message } from "antd";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axiosPublic.get("/users/getallusers");
    dispatch(getAllUser(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editRole = (reqObj) => async () => {
  try {
    await axiosInstance.post("/users/editrole", reqObj);
    message.success("Edit Role Success");
    setTimeout(() => {
      window.location.href = "/users";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const deleteUser = (reqObj) => async () => {
  try {
    await axiosInstance.post("/users/deleteuser", reqObj);
    message.success("Delete User Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axiosPublic.get("/products/getallproducts");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editProduct = (reqObj) => async () => {
  try {
    await axiosInstance.post("/products/editproduct", reqObj);
    message.success("Edit Product Success");
    setTimeout(() => {
      window.location.href = "/products";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const addProduct = (reqObj) => async () => {
  try {
    await axiosInstance.post("/products/addproduct", reqObj);
    message.success("Add Product Success");
    setTimeout(() => {
      window.location.href = "/products";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin!");
  }
};

export const deleteProduct = (reqObj) => async () => {
  try {
    await axiosInstance.post("/products/deleteproduct", reqObj);
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
  try {
    const res = await axiosPublic.get("/accessories/getallaccessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editAccessory = (reqObj) => async () => {
  try {
    await axiosInstance.post("/accessories/editaccessory", reqObj);
    message.success("Edit Accessory Success");
    setTimeout(() => {
      window.location.href = "/accessories";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin");
  }
};

export const addAccessory = (reqObj) => async () => {
  try {
    await axiosInstance.post("/accessories/addaccessory", reqObj);
    message.success("Add Accessory Success");
    setTimeout(() => {
      window.location.href = "/accessories";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong or you are not admin!");
  }
};

export const deleteAccessory = (reqObj) => async () => {
  try {
    await axiosInstance.post("/accessories/deleteaccessory", reqObj);
    message.success("Delete Accessory Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await stripeInstance.get("/v1/charges");
    dispatch(getAllOrder(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = (reqObj) => async () => {
  try {
    const res = await axiosPublic.post("/users/login", reqObj);
    localStorage.setItem("admin", JSON.stringify(res.data));
    localStorage.setItem("access", res.data.accessToken);
    localStorage.setItem("refresh", res.data.refreshToken);
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Wrong username or password");
  }
};
