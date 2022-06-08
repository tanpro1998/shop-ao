import express from "express";
import User from "../models/userModel.js";

import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.post("/editrole", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body._id });
    user.isAdmin = req.body.isAdmin;

    await user.save();
    res.send("Edit User Successful");
  } catch (err) {
    return res.status(500).json(err);
  }
});

userRouter.post("/delete", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.body.userId });
    res.send("Delete User Successful");
  } catch (err) {
    return res.status(400).json(err);
  }
});

export default userRouter;
