import { getAllUser } from "./userSlice";
import {
  axiosInstance,
  axiosToken,
  stripeInstance,
} from "../utils/axiosInstance";
import { getAllProduct } from "./productSlice";
import { getAllAccessory } from "./accessorySlice";
import { getAllOrder } from "./orderSlice";
import { message } from "antd";
import jsCookie from "js-cookie";
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/users/getallusers");
    dispatch(getAllUser(res.data));
  } catch (err) {
    console.log(err);
  }
};
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/products/getallproducts");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllAccessories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/accessories/getallaccessories");
    dispatch(getAllAccessory(res.data));
  } catch (err) {
    console.log(err);
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

export const deleteProduct = (reqObj) => async (dispatch) => {
  try {
    await axiosToken.post("/products/deleteproduct", reqObj);
    message.success("Delete Product Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
export const deleteAccessory = (reqObj) => async (dispatch) => {
  try {
    await axiosToken.post("/accessories/deleteaccessory", reqObj);
    message.success("Delete Accessory Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = (reqObj) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/users/login", reqObj);
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
