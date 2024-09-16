// Importacion de axios.ts
import axios from './axios';

// Definicion de interfaz Credentials
interface Credentials {
    username: string;
    password: string;
    country: string;
}

// Exportacion de funciones API
export const loginRequest = (user: Credentials) => axios.post('login', user);
export const registerRequest = (user: Credentials) => axios.post('register', user);
export const logoutRequest = () => axios.post('logout');