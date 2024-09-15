// Importacion de la conexion a la base de datos
import { pool } from "../db";
// Importacion de Request y Response de express
import { Request, Response } from "express";

// Interfas de usuario
interface User{
    username: string;
    country: string;
    password: string;
}

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    try {
        // Consulta a la base de datos
        const [rows] = await pool.query("SELECT * FROM users");
        // Respuesta de la API
        res.json(rows);
    } catch (error) {
        // Error en el servidor
        res.status(500).json({ message: "Error" });
    }
};

// Obtener un usuario
export const getUser = async (req: Request, res: Response) => {
    try {
        // Consulta a la base de datos
        const [rows] = await pool.query("SELECT * FROM users WHERE idUser = ?", [req.params.id]);
        // Respuesta de la API
        res.json(rows);
    } catch (error) {
        // Error en el servidor
        res.status(500).json({ message: "Error" });
    }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
    try {
        // Datos del body
        const { username, country, password } = req.body;
        // Consulta a la base de datos
        await pool.query("UPDATE users SET username = ?, country = ?, password = ? WHERE idUser = ?", [username, country, password, req.params.id]);
        // Respuesta de la API
        res.json({ message: "User updated successfully" });
    } catch (error) {
        // Error en el servidor
        res.status(500).json({ message: "Error" });
    }
};