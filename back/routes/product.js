const express = require("express");
const router = express.Router();


//con GETPRODUCTS se trae la lista de productos desde el controlador
const { getProduct, newProduct } = require("../controllers/productController");

//Esta ruta muestra los datos desde GETPRODUCTS
router.route('/productos').get(getProduct);
router.route('/productos/nuevo').post(newProduct);


module.exports = router;