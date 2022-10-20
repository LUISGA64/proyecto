const express = require("express");
const router = express.Router();


//con GETPRODUCTS se trae la lista de productos desde el controlador
const {getProduct} = require("../controllers/productController");

//Esta ruta muestra los datos desde GETPRODUCTS
router.route('/productos').get(getProduct);

module.exports=router;