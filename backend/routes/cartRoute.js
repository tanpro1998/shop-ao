import express from "express";
import {
  addNewCart,
  deleteCart,
  getAllCart,
  getCartById,
  updateCart,
} from "../controllers/cartController.js";
const cartRouter = express.Router();

cartRouter.post("/addproduct", addNewCart);

cartRouter.put("/:id", updateCart);

// Delete
cartRouter.delete("/:id", deleteCart);

// Get User Cart
cartRouter.get("/find/:userId", getCartById);

// Get All
cartRouter.get("/", getAllCart);

export default cartRouter;
