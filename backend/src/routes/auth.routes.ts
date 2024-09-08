// Importacion de Router de express
import {Router} from 'express';
// Importacion de las funciones de registro y login
import {register, login} from '../controllers/auth.controller';

// Instanciacion de Router
const router = Router();

// Rutas de registro y login
router.post('/register', register);
router.post('/login', login);

// Exportacion de las rutas
export default router;