const express = require("express");
const router = express.Router();

//con GETPRODUCTS se trae la lista de productos desde el controlador
const { getProduct, newProduct, updateProduct, deleteProduct, getProductById } = require("../controllers/productController");

//Esta ruta muestra los datos desde GETPRODUCTS
router.route('/productos').get(getProduct);
//ruta del metodo GET BY ID para consultar por ID
router.route('/producto/:id').get(getProductById);
//ruta del metodo POST para registrar productos
router.route('/productos').post(newProduct);
//ruta para actualizar productos
router.route('/productos/:id').put(updateProduct);
//Ruta para eliminar
router.route('/productos/:id').delete(deleteProduct);

module.exports=router;