// Importacion Router de express
import { Router } from "express";
// Importacion de las funciones de los controladores
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  getPostsByUser,
} from "../controllers/posts.controller";

// Instancia de Router
const router = Router();

// Rutas de la API
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.get("/posts/user/:id", getPostsByUser);

// Exportacion del router
export default router;