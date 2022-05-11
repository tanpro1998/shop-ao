import express from "express";
const cartRouter = express.Router();
import { Cart } from "../models/cartModel.js";

cartRouter.post("/addproduct", async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const cart = await newCart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

cartRouter.put("/:id", async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
cartRouter.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Cart
cartRouter.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All
cartRouter.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { cartRouter };
