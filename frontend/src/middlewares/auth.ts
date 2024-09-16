// Importa el tipo MiddlewareHandler de Astro
import type { MiddlewareHandler } from 'astro';

// Exporta una función middleware que se encarga de verificar si el usuario está autenticado
export const authMiddleware: MiddlewareHandler = async (context, next) => {
  // Obtiene el token de las cookies
  const token = context.cookies.get('token')?.value;
  
  // Si no hay token y la URL es /protected, redirige a /login
  if (!token && context.url.pathname.startsWith('/protected')) {
    return context.redirect('/login');
  }
  
  // Si hay token y la URL es /login, redirige a /protected
  return next();
};