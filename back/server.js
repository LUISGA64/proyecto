const app = require("./app");
const connectDatabase = require("./config/database");
require('dotenv').config();

const dotenv = require("dotenv");
dotenv.config({ path: 'back/config/config.env' });


//Conexión a Base de Datos
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`);
})