// Importacion de jsonwebtoken
import jwt from "jsonwebtoken";

// Clave secreta para firmar el token
export const SECRET_KEY: string = "thisisasecretkeyforjsonwebtoken";

// Funcion para crear un token de acceso
export function createAccessToken(payload: any) {
  // Retornamos una promesa con el token de acceso
  return new Promise((resolve, reject) => {
    // Firmamos el token con el payload y la clave secreta
    jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" }, (err, token) => {
      // Si ocurre un error, rechazamos la promesa
      if (err) reject(err);
      // Retornamos el token
      resolve(token);
    });
  });
}
