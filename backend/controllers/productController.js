import { Product } from "../models/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addProduct = async (req, res) => {
  try {
    const addNewProduct = new Product(req.body);
    await addNewProduct.save();
    res.send("Add Product Success");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.body._id });
    product.title = req.body.title;
    product.price = req.body.price;
    product.image01 = req.body.image01;
    product.image02 = req.body.image02;
    product.categorySlug = req.body.categorySlug;
    product.colors = req.body.colors;
    product.sizes = req.body.sizes;
    product.slug = req.body.slug;
    product.description = req.body.description;

    await product.save();
    res.send("Edit Product Successful");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.send("Delete Product Successful");
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
