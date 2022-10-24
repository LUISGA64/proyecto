const { json } = require("express")
const productSchema = require("../models/products");

//importacion de FETCH
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

exports.getProduct = async(req, res, next) => {
    const products = await productSchema.find()
    if(!products){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

exports.newProduct=async(req, res,next)=>{
    const product = await productSchema.create(req.body);
        res.status(201).json({
        success: true,
        product});
}

exports.getProductById = async(req, res,next)=>{
    const product = await productSchema.findById(req.params.id)
    
    if(!product){
        return res.status(404).json({
            success: false,
            message: "No existe el producto"
        })
    }
    res.status(200).json({
        success: true,
        message: "Este es el producto",
        product 
    })
}

exports.updateProduct = async(req,res,next) => {
    let product = await productSchema.findById(req.params.id);//se utiliza let pq el objeto se va a modificar
    if(!product){ //Si el objeto no se encuentra finaliza el proceso
        return res.status(404).json({
            success: false,
            message: "No existe el producto"
        });
    }
    product = await productSchema.findByIdAndUpdate(req.params.id,req.body,{//cuando el objeto se encuentra se procede
        new:true, //se valida que hayan cambios
        runValidators:true
    });
    //se genera la respuesta de exito del proceso de actualización
    res.status(200).json({
        success:true,
        message:"Producto actualizado",
        product
    })
}

exports.deleteProduct = async (req,res,next) =>{
    const product = await productSchema.findById({_id:req.params.id});

    if(!product){ //Si el objeto no se encuentra finaliza el proceso
        return res.status(404).json({
            success: false,
            message: "No existe el producto"
        });
    }
    
    await productSchema.remove();//Elimina si encuentar el producto

    res.json({
        success:true,
        message:"Registro Eliminado"
    })
}


//Consultar todos los productos con FETCH
function verProductos(){
    fetch('http://localhost:3000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductos();

//Consultar productos por ID
function verproductoId(id){
    fetch('http://localhost:3000/productos/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verproductoId('6355644ec6e72d55690d2939');