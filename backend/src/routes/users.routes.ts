import { Router } from "express";

import { getUsers, getUser, updateUser } from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

export default router;