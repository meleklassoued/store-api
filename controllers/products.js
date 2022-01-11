const AllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing" });
};
const AllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  AllProducts,
  AllProductsStatic,
};
