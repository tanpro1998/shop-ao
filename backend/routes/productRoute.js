import express from "express";
const productRouter = express.Router();
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

productRouter.get("/", getProduct);

productRouter.post("/add", verifyTokenAndAdmin, addProduct);

productRouter.post("/update", verifyTokenAndAdmin, updateProduct);

productRouter.post("/delete", verifyTokenAndAdmin, deleteProduct);

productRouter.get("/find/:id", getProductById);

export default productRouter;
