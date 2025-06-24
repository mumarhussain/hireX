import api from "./axios";
import { API_PATHS } from "@/constants/api_paths";

export async function login({ email, password }) {
  const res = await api.post(API_PATHS.LOGIN, { email, password });
  return { user: res.data.user, message: res.data.message };
}
export async function fetchCurrentUser() {
  const res = await api.get(API_PATHS.ME);
  return res.data.user;
}

export async function logout() {
  localStorage.removeItem("token");
  const res = await api.get(API_PATHS.LOGOUT);
  return res;
}
