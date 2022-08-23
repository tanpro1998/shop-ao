import express from "express";
const accessoriesRouter = express.Router();
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {
  addAccessory,
  deleteAccessory,
  getAccessory,
  getAccessoryById,
  updateAccessory,
} from "../controllers/accessoriesController.js";

accessoriesRouter.get("/", getAccessory);

accessoriesRouter.post("/add", verifyTokenAndAdmin, addAccessory);

accessoriesRouter.post("/update", verifyTokenAndAdmin, updateAccessory);

accessoriesRouter.post("/delete", verifyTokenAndAdmin, deleteAccessory);

accessoriesRouter.get("/find/:id", getAccessoryById);

export default accessoriesRouter;
