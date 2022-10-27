const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//importar RUTAS
const productos = require("./routes/product");
const sales = require("./routes/sales");

app.use('/api', productos);
app.use('/api', sales);
module.exports = app