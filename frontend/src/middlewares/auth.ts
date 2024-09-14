import type { MiddlewareHandler } from 'astro';

export const authMiddleware: MiddlewareHandler = async (context, next) => {
  // Tu lógica de autenticación aquí
  // Por ejemplo:
  const token = context.cookies.get('token')?.value;
  
  if (!token && context.url.pathname.startsWith('/protected')) {
    return context.redirect('/login');
  }
  
  return next();
};