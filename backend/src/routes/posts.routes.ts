// Importacion Router de express
import { Router } from "express";
// Importacion de las funciones de los controladores
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  getPostsByUser,
  updatePost,
} from "../controllers/posts.controller";
import { authRequired } from "../middlewares/validateToken";

// Instancia de Router
const router = Router();

// Rutas de la API
router.get("/posts", authRequired, getPosts);
router.get("/posts/:id", authRequired, getPost);
router.post("/posts", authRequired, createPost);
router.delete("/posts/:id", authRequired, deletePost);
router.get("/posts/user/:id", authRequired, getPostsByUser);
router.put("/posts/:id", authRequired, updatePost);

// Exportacion del router
export default router;
