const express = require("express");
const { newSales } = require("../controllers/salesController");
const router = express.Router();

const { getSalesProducts } = require("../controllers/salesController");



router.route('/sales').get(getSalesProducts);
router.route('/sales').post(newSales);

module.exports=router;