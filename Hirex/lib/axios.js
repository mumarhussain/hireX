import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL, // "http://localhost:8000"
  withCredentials: true, // << must be true
});

export default api;
