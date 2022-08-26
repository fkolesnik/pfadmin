import axios from "axios";
import {API_URL} from "../constants";

export const pfApi = axios.create({
  baseURL: API_URL,
});

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  if (token) {
    pfApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}