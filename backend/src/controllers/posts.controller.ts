// Importacion de la conexion a la base de datos
import { pool } from "../db";
// Importacion de Request y Response de express
import { Request, Response } from "express";

// Funciones de los controladores (CRUD)

// Obtener todos los posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("SELECT * FROM posts");
    // Respuesta de la API
    if ((rows as any[]).length > 0) {
      // Si hay posts
      res.json(rows);
    } else {
      // Si no hay posts
      res.status(404).json({ message: "No posts found" });
    }
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Obtener un post
export const getPost = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [
      req.params.id,
    ]);
    // Respuesta de la API
    res.json(rows);
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Crear un post
export const createPost = async (req: Request, res: Response) => {
  try {
    // Datos del body
    const { message, userId, username } = req.body;
    // Consulta a la base de datos
    const [rows] = await pool.query("INSERT INTO posts (message, userId, username) VALUES(?,?,?)", [message, userId, username]);
    // Respuesta de la API
    res.json({ message: "Post created successfully" });
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

// Eliminar un post
export const deletePost = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("DELETE FROM posts WHERE id = ?", [
      req.params.id,
    ]);
    // Respuesta de la API
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPostsByUser = async (req: Request, res: Response) => {
  try {
    // Consulta a la base de datos
    const [rows] = await pool.query("SELECT * FROM posts WHERE userId = ?", [
      req.params.id,
    ]);
    // Respuesta de la API
    if ((rows as any[]).length > 0) {
      // Si hay posts
      res.json(rows);
    } else {
      // Si no hay posts
      res.status(404).json({ message: "No posts found" });
    }
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
}

export const updatePost = async (req: Request, res: Response) => {
  try {
    // Datos del body
    const { username } = req.body;
    // Consulta a la base de datos
    const [rows] = await pool.query("UPDATE posts SET username = ? WHERE userId = ?", [username, req.params.id]);
  } catch (error) {
    // Error en el servidor
    res.status(500).json({ message: "Internal server error" });
  }
}