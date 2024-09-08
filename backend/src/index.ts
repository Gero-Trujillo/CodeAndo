// Importacion de express
import express from 'express';
// Importacion de las rutas
import authRoutes from './routes/auth.routes';

// Creacion de la aplicacion express
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Uso de las rutas
app.use(authRoutes);

// Definicion del puerto
const PORT = 3000;

// ejecucion de la aplicacion
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});