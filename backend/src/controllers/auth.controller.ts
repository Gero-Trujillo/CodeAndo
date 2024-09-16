// Importacion de Interfaces de express
import { Request, Response } from "express";
// Importacion de la conexion a la base de datos
import { pool } from "../db";
// Importacion de la funcion para crear el token de acceso
import { createAccessToken } from "../libs/jwt";

// Definicion de la interfaz de usuario
interface UserAuth {
  username: string;
  password: string;
  country: string;
}

// Definicion de la funcion de registro
export const register = async (
  req: Request<unknown, unknown, UserAuth>,
  res: Response
) => {
  try {
    // Obtencion de los datos del body
    const { username, password, country } = req.body;
    // Insercion de los datos en la base de datos
    await pool.query(
      "INSERT INTO users (username, password, country) VALUES(?,?,?)",
      [username, password, country]
    );
    // Respuesta de exito
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    // Respuesta de error
    return res.status(500).json({ message: "Error" });
  }
};

// Definicion de la funcion de login
export const login = async (
  req: Request<unknown, unknown, UserAuth>,
  res: Response
) => {
  try {
    // Obtencion de los datos del body
    const { username, password } = req.body;
    // Consulta de los datos en la base de datos
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    // Validacion de los datos
    if ((rows as any[]).length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const userId = (rows as any[])[0].idUser;
    // Creacion del token de acceso
    const token = await createAccessToken({ username });
    // Envio del token en la respuesta
    res.cookie("accessToken", token, { httpOnly: true });
    res.json([userId, username]);
  } catch (error) {
    // Respuesta de error
    return res.status(500).json({ message: "Error" });
  }
};

// Definicion de la funcion de logout
export const logout = async (req: Request, res: Response) => {
  try {
    // Eliminacion de la cookie del token de acceso
    res.clearCookie("accessToken");
    // Respuesta de exito
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    // Respuesta de error
    return res.status(500).json({ message: "Error" });
  }
};
