import express from "express";
const accessoriesRouter = express.Router();
import { Accessories } from "../models/accessoriesModel.js";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";

accessoriesRouter.get("/", async (req, res) => {
  try {
    const accessories = await Accessories.find();
    res.status(200).json(accessories);
  } catch (err) {
    res.status(500).json(err);
  }
});

accessoriesRouter.post("/add", verifyTokenAndAdmin, async (req, res) => {
  try {
    const addNewAccessory = new Accessories(req.body);
    await addNewAccessory.save();
    res.send("Add Accessory Success");
  } catch (err) {
    return res.status(500).json(err);
  }
});

accessoriesRouter.post("/update", verifyTokenAndAdmin, async (req, res) => {
  try {
    const accessory = await Accessories.findOne({ _id: req.body._id });
    accessory.title = req.body.title;
    accessory.price = req.body.price;
    accessory.image01 = req.body.image01;
    accessory.image02 = req.body.image02;
    accessory.categorySlug = req.body.categorySlug;
    accessory.slug = req.body.slug;
    accessory.description = req.body.description;

    await accessory.save();
    res.send("Edit Accessory Successful");
  } catch (err) {
    return res.status(500).json(err);
  }
});

accessoriesRouter.post("/delete", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Accessories.findOneAndDelete({ _id: req.body.accessoryId });
    res.send("Delete Accessory Successful");
  } catch (err) {
    return res.status(400).json(err);
  }
});

accessoriesRouter.get("/find/:id", async (req, res) => {
  try {
    const accessory = await Accessories.findById(req.params.id);
    res.status(200).json(accessory);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default accessoriesRouter;
