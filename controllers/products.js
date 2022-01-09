const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing" });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.export = {
  getAllProducts,
  getAllProductsStatic,
};
