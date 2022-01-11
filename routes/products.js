const express = require("express");
const router = express.Router();
const { AllProductsStatic, AllProducts } = require("../controllers/products");


router.route("/").get(AllProducts);
router.route("/static").get(AllProductsStatic);

module.exports = router;
