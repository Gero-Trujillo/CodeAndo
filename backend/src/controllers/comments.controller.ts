// Importacion de conexion a la base de datos
import { pool } from "../db";
// Importacion de Request y Response de express
import { Request, Response } from "express";

// Funciones de los controladores (CRUD)

// Obtener todos los comentarios
export const getComments = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("SELECT * FROM comments");
    // Respuesta de la API
    res.json(rows);
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Obtener un comentario
export const getComment = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("SELECT * FROM comments WHERE id = ?", [
      req.params.id,
    ]);
    // Respuesta de la API
    res.json(rows);
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Crear un comentario
export const createComment = async (req: Request, res: Response) => {
  try {
    // Datos del body
    const { message, postId, userId } = req.body;
    // Consulta a la base de datos
    const [rows] = await pool.query("INSERT INTO comments (message, postId, userId) VALUES(?,?,?)", [message, postId, userId]);
    // Respuesta de la API
    res.json({ message: "Comment created successfully" });
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Eliminar un comentario
export const deleteComment = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("DELETE FROM comments WHERE id = ?", [
      req.params.id,
    ]);
    // Respuesta de la API
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};