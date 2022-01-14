const Product = require("../models/product");

const AllProductsStatic = async (req, res) => {
  const Products = await Product.find({ featured: false });

  res.status(200).json({ msg: Products, nbHits: Products.length });
};
const AllProducts = async (req, res) => {
  const { featured, comapny } = req.query;
  const objectQuery = {};
  if (featured) {
    objectQuery.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.comapny = comapny;
  }

  const Products = await Product.find(objectQuery);
  res.status(200).json({ msg: Products });
};

module.exports = {
  AllProducts,
  AllProductsStatic,
};
