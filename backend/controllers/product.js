import product from "../models/product.js";

const registerProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.stock ||
    !req.body.unit ||
    !req.body.provider
  ) {
    return res.status(400).send("Incomplete data");
  }

  const existingProduct = await product.findOne({
    name: req.body.name,
    provider: req.body.provider,
  });

  if (existingProduct) {
    return res.status(400).send("Product already exist");
  }

  const productSchema = new product({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    unit: req.body.unit,
    provider: req.body.provider,
  });

  const result = await productSchema.save();
  if(!result) return res.status(400).send("Failed to register product");

  return res.status(200).send({result})
};

export default {registerProduct};