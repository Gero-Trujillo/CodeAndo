import axios from './axios';

interface Credentials {
    username: string;
    password: string;
    country: string;
}

export const loginRequest = (user: Credentials) => axios.post('login', user);
export const registerRequest = (user: Credentials) => axios.post('register', user); 