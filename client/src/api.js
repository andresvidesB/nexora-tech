import axios from 'axios';

const api = axios.create({
  baseURL: ' https://nexora-tech-y1ot.onrender.com', // La dirección de tu backend
  withCredentials: true // IMPORTANTE: Permite enviar/recibir cookies
});

export default api;