// Importacion de axios.ts
import axios from './axios';

// Definicion de interfaz User
interface User {
    username: string;
    country: string;
    password: string;
}

// Exportacion de funciones API
export const getUsers = () => axios.get('/users');
export const getUser = (userId: number) => axios.get(`/users/${userId}`);
export const updateUser = (userId: number, user: User) => axios.put(`/users/${userId}`, user);