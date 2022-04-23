import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
    },
    colors: {
      type: Array,
    },
    slug: {
      type: String,
    },
    sizes: {
      type: Array,
    },
    path: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product };
