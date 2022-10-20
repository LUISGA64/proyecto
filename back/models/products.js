const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({

    description: {
        type: String,
        required: [true, "Registre una descripción para el producto."],
        trim: true
    },
    article: {
        type: String,
        required: [true, "Defina el nombre el articulo a publicar"],
        maxLength: [120, "El nombre del articulo es demasiado largo"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Por favor seleccione la categoria del producto"],
        enum: {
            values: [
                "Ropa niño",
                "Ropa niña",
                "Zapatos niño",
                "Zapatos niña"
            ]
        }
    },
    price: {
        type: Number,
        required: [true, "Por favor registre el precio"],
        maxLength: [8, "El precio del producto no puede ser mayor a 99.999.999"],
        default: 0.0,
    },
    score: {
        type: Number,
        default: 0
    },
    image: [{
        public_id: {
            type: String,
            requerid: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    seller: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: [true, "Registre las cantidades disponibles"],
        default: 0,
        maxLength: 4
    },
    ratings: {
        type: Number,
        default: 0
    },
    opinions: [{
        nameClient: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        commentary: {
            type: String,
            required: true
        }

    }],
    created: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("productos", productsSchema);