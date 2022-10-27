var mongoose = require("mongoose");

const salesSchema = mongoose.Schema({

    [{
        $lookup: {
            from: "productos",
            localField: "producto",
            foreignField: "nombre",
            as: "listaProducto"
        }
    }],
    producto: {
        type: Schema.ObjectId,
        ref: "products"
    },
    cantidad: {
        type: Number,
        required: [true, "¿Cuantos productos desea comprar?"],
        default: 0
    },
    comprador: {
        type: String,
        required: [true, "Por favor registre el comprador"],
        trie: true
    },
    numero_factura: {
        type: Number
    },
    valor_total: {
        type: Number,
        default: 0.0
    }
});

module.exports = mongoose.model("sales", salesSchema);