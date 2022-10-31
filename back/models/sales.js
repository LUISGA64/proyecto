var mongoose = require("mongoose");

const salesSchema = mongoose.Schema({


    producto: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'productos',
        }
    ],
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