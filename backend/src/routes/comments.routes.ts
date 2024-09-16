// Importar Router desde express
import { Router } from "express";
// Importar funciones de los controladores
import {
  getComments,
  getComment,
  createComment,
  deleteComment,
} from "../controllers/comments.controller";
import { authRequired } from "../middlewares/validateToken";

// Crear una instancia de Router
const router = Router();

// Rutas de la API
router.get("/comments", authRequired, getComments);
router.get("/comments/:id", authRequired, getComment);
router.post("/comments", authRequired, createComment);
router.delete("/comments/:id", authRequired, deleteComment);

// Exportar el router
export default router;
