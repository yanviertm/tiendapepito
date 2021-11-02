import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  unit: String,
  provider: String,
  registerDate: { type: Date, default: Date.now },
  enabled: { type: Boolean, default: true },
});

const product = mongoose.model("products", productSchema);

export default product;
