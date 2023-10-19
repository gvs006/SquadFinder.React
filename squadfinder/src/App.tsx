import {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import { AppThemeProvider } from "./shared/contexts";
import { AuthProvider } from "./shared/contexts/Auth/AuthProvider";
import { AuthContext } from "./shared/contexts/Auth/AuthContext";

export const App = () => {

  const auth = useContext(AuthContext);

  return (
    <AuthProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </AuthProvider>
  );
};
