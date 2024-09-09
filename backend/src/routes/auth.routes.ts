// Importacion de Router de express
import {Router} from 'express';
// Importacion de las funciones de registro y login
import {register, login, logout} from '../controllers/auth.controller';

// Instanciacion de Router
const router = Router();

// Rutas de registro y login
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Exportacion de las rutas
export default router;