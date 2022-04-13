import { getAllUser } from "./userSlice";
import { axiosInstance, stripeInstance } from "../utils/axiosInstance";
import { getAllProduct } from "./productSlice";
import { getAllAccessory } from "./accessorySlice";
import { getAllOrder } from "./orderSlice";
import axios from "axios";
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
