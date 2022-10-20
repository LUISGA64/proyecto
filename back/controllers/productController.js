const { json } = require("express")
const { response } = require("../app")

exports.getProduct = (req,res,next) => {
    res.status(200).json({
        success:true,
        message: "Ruta de prueba funcionando"
    })
}