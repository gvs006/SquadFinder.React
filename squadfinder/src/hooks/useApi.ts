import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validatetoken: async (token: string) => {
    const response = await api.post("/validate", { token });
    return response.data;
  },

  signIn: async (email: string, password: string) => {
    const response = await api.post("/login", { email, password });
    return response.data;
  },

  // TODO VALIDAÇÃO BACKEND LOGOUT
//   logout: async () => {
//     const response = await api.post("/logout");
//     return response.data;
//   },
});