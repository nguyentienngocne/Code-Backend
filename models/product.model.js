const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  descriptione: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  positon: Number,
  deleted: Boolean
});
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
