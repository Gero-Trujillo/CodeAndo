// Importacion de libreria axios
import axios from 'axios';

// Creacion de instancia de axios
const instance = axios.create({
    // Definicion de baseURL de la API
    baseURL: 'http://localhost:3000',
    // Definicion de withCredentials para que las cookies sean enviadas
    withCredentials: true,
});

// Exportacion de instancia de axios
export default instance;