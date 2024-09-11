import axios from './axios';

interface Credentials {
    username: string;
    password: string;
    country: string;
}

export const login = (user: Credentials) => axios.post('login', user);
export const register = (user: Credentials) => axios.post('register', user); 