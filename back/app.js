const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//importar RUTAS
const productos = require("./routes/product");

app.use('/api', productos)

module.exports = app