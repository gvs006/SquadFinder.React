import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  validatetoken: async (token: string) => {
    return true;
    const response = await api.post("/token", { token });
    return response.data;
  },

  signIn: async (login: string, senha: string) => {

    const response = await api.post("/login", { login, senha });
    return response.data;
  },

  // TODO VALIDAÇÃO BACKEND LOGOUT
  logout: async () => {
    return {status: true}
    const response = await api.post("/logout");
    return response.data;
  },
});
