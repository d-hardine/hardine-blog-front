import axios from "axios"

//Backend URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})

api.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});

export default api