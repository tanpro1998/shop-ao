import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOrderById,
  getOrderMonthly,
  updateOrder,
} from "../controllers/orderController.js";
const orderRouter = express.Router();

// Create
orderRouter.post("/", createOrder);

// Update
orderRouter.put("/:id", updateOrder);

// Delete
orderRouter.delete("/:id", deleteOrder);

// Get User Order
orderRouter.get("/find/:userId", getOrderById);

// Get All
orderRouter.get("/", getAllOrder);

//   Get Monthly
orderRouter.get("/income", getOrderMonthly);

export default orderRouter;
