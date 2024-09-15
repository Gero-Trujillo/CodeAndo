// Importacion de express
import express from "express";
//Importacion de CORS
import cors from "cors";
// Importacion de las rutas
import authRoutes from "./routes/auth.routes";
import postsRoutes from "./routes/posts.routes";
import commentsRoutes from "./routes/comments.routes";
import usersRoutes from "./routes/users.routes";

// Creacion de la aplicacion express
const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Uso de las rutas
app.use(authRoutes);
app.use(postsRoutes);
app.use(commentsRoutes);
app.use(usersRoutes)

// Definicion del puerto
const PORT = 3000;

// ejecucion de la aplicacion
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
