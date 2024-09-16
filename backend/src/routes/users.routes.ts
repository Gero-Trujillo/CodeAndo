// Importacion de Router desde express
import { Router } from "express";

// Importacion de los controladores de usuarios
import { getUsers, getUser, updateUser } from "../controllers/users.controller";
import { authRequired } from "../middlewares/validateToken";

// Instancia de Router
const router = Router();

// Rutas de usuarios
router.get("/users", authRequired, getUsers);
router.get("/users/:id", authRequired, getUser);
router.put("/users/:id", authRequired, updateUser);

// Exportacion de las rutas
export default router;
