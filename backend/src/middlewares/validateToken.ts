// Importacion de interfaces de express
import { NextFunction, Request, Response } from "express";
// Importacion de SECRET_KEY y jwt
import { SECRET_KEY } from "../libs/jwt";
import jwt from "jsonwebtoken";

// Middleware para validar el token de acceso
export const authRequired = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Obtenemos el token de acceso de las cookies
  const { accessToken } = req.cookies;
  // Si no existe el token de acceso, retornamos un error
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    // Verificamos el token de acceso
    jwt.verify(accessToken, SECRET_KEY, (err: any, user: any) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Continuamos con la ejecucion del codigo
      next();
    });
  } catch (err) {
    // Si ocurre un error, retornamos un error
    return res.status(401).json({ message: "Unauthorized" });
  }
};
