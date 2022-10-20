const { json } = require("express")
const { response } = require("../app")
const producto = require("../models/products")

exports.getProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Ruta de prueba funcionando"
    })
}
exports.newProduct = async(req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}