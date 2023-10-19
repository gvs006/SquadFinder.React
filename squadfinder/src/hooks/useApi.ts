import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validatetoken: async (token: string) => {

    //TODO VALIDAR RETORNO TOKEN BACKEND
    return {
        token: '1234567'
    };
    const response = await api.post("/login", { token });
    return response.data;
  },

  signIn: async (email: string, password: string) => {
    //TODO VALIDAR RETORNO USERDATA BACKEND
      return {
          user: {id: 3, nickname: 'José', email: 'jose@gmail.com'},
          token: '1234567'
      };
    const response = await api.post("/login", { email, password });
    return response.data;
  },

  // TODO VALIDAÇÃO BACKEND LOGOUT
  logout: async () => {
    return {status: true}
    const response = await api.post("/logout");
    return response.data;
  },
});
