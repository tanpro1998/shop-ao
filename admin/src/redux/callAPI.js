import { getAllUser } from "./userSlice";
import {
  axiosPublic,
  axiosProduct,
  axiosAccessory,
  stripeInstance,
} from "../utils/axiosInstance";
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
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axiosPublic.get("/products/getallproducts");
    dispatch(getAllProduct(res.data));
  } catch (err) {
    console.log(err);
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
    await axiosProduct.post("/products/deleteproduct", reqObj);
    message.success("Delete Product Success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};
// export const deleteAccessory = (reqObj) => async (dispatch) => {
//   try {
//     await axiosAccessory.post("/accessories/deleteaccessory", reqObj);
//     message.success("Delete Accessory Success");
//     setTimeout(() => {
//       window.location.reload();
//     }, 500);
//   } catch (err) {
//     console.log(err);
//     message.error("Something went wrong");
//   }
// };

export const adminLogin = (reqObj) => async (dispatch) => {
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
    message.error("Something went wrong");
  }
};
