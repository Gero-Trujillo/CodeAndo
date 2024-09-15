import { pool } from "../db";
import { Request, Response } from "express";

interface User{
    username: string;
    country: string;
    password: string;
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE idUser = ?", [req.params.id]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { username, country, password } = req.body;
        await pool.query("UPDATE users SET username = ?, country = ?, password = ? WHERE idUser = ?", [username, country, password, req.params.id]);
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};