var mongoose = require('mongoose');
var salesSchema = new mongoose.Schema({
producto: {
    type: Schema.ObjectId,
    ref: "products"
},
cantidad: Number,
});
});