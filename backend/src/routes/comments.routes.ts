// Importar Router desde express
import { Router } from "express";
// Importar funciones de los controladores
import {
  getComments,
  getComment,
  createComment,
  deleteComment,
} from "../controllers/comments.controller";

// Crear una instancia de Router
const router = Router();

// Rutas de la API
router.get("/comments", getComments);
router.get("/comments/:id", getComment);
router.post("/comments", createComment);
router.delete("/comments/:id", deleteComment);

// Exportar el router
export default router;