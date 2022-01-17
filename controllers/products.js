const Product = require("../models/product");

const AllProductsStatic = async (req, res) => {
  const search = "a";
  const Products = await Product.find({
    name: { $regex: search, $options: "i" },
  });

  res.status(200).json({ msg: Products, nbHits: Products.length });
};
const AllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const objectQuery = {};

  if (featured && company && name) {
    objectQuery.featured = featured;
    objectQuery.company = company;
    objectQuery.name = { $regex: name, $options: "i" };
  }
  console.log(objectQuery);
  const Products = await Product.find(objectQuery);
  res.status(200).json({ msg: Products });
};

module.exports = {
  AllProducts,
  AllProductsStatic,
};
