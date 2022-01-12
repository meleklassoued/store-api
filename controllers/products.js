const Product = require("../models/product");

const AllProductsStatic = async (req, res) => {
  const Products = await Product.find({ featured: false });

  res.status(200).json({ msg: Products, nbHits: Products.length });
};
const AllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  AllProducts,
  AllProductsStatic,
};
