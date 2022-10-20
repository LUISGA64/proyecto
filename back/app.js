const express = require("express");
const app = express();

app.use(express.json());


//importar RUTAS
const productos = require("./routes/product");

app.use('/api', productos)

module.exports = app