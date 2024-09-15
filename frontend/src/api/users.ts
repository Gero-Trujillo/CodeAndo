import axios from './axios';

interface User {
    username: string;
    country: string;
    password: string;
}

export const getUsers = () => axios.get('/users');
export const getUser = (userId: number) => axios.get(`/users/${userId}`);
export const updateUser = (userId: number, user: User) => axios.put(`/users/${userId}`, user);