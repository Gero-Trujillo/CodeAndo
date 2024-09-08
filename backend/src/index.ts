// Importacion de express
import express from 'express';

// Creacion de la aplicacion express
const app = express();

// Definicion del puerto
const PORT = 3000;

// ejecucion de la aplicacion
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});