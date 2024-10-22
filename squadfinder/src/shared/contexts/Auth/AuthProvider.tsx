import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../../types/User";
import { useApi } from "../../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signIn = async (login: string, senha: string) => {
    const data = await api.signIn(login, senha);
    if (data.token) {
      setUser(data.user); // TODO FIX USER DATA FROM SPRING API
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.logout();
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validatetoken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };

    validateToken();
  }, [api]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
