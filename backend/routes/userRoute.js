import express from "express";

import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {
  deleteUser,
  editRole,
  getUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/editrole", verifyTokenAndAdmin, editRole);

userRouter.post("/delete", verifyTokenAndAdmin, deleteUser);

export default userRouter;
