const Product = require("../models/product");

const AllProductsStatic = async (req, res) => {
  const search = "a";
  const Products = await Product.find({
    name: { $regex: search, $options: "i" },
  });

  res.status(200).json({ msg: Products, nbHits: Products.length });
};
const AllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const objectQuery = {};

  if (featured && company && name) {
    objectQuery.featured = featured;
    objectQuery.company = company;
    objectQuery.name = { $regex: name, $options: "i" };
  }
  let result = Product.find(objectQuery);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort("createAt");
  }

  console.log(objectQuery);
  const Products = await result;
  res.status(200).json({ msg: Products });
};

module.exports = {
  AllProducts,
  AllProductsStatic,
};
