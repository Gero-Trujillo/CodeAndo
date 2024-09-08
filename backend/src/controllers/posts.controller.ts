import { pool } from "../db";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query("SELECT * FROM posts");
      if ((rows as any[]).length > 0) {
        res.json(rows);
      } else {
        res.status(404).json({ message: "No posts found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

export const getPost = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [
      req.params.id,
    ]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("INSERT INTO posts SET ?", req.body);
    res.json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("DELETE FROM posts WHERE id = ?", [
      req.params.id,
    ]);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};