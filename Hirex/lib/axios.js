// lib/axios.js
import axios from "axios";
import { getCookie } from "./cookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL, // e.g. "http://localhost:8000"
  withCredentials: true, // send cookies
  headers: {
    "Content-Type": "application/json", // default for all requests
  },
});

// Attach token (if present) to every request
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
