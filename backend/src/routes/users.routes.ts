// Importacion de Router desde express
import { Router } from "express";

// Importacion de los controladores de usuarios
import { getUsers, getUser, updateUser } from "../controllers/users.controller";

// Instancia de Router
const router = Router();

// Rutas de usuarios
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

// Exportacion de las rutas
export default router;
