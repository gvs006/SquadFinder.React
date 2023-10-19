import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import { AppThemeProvider } from "./shared/contexts";
import { AuthProvider } from "./shared/contexts/Auth/AuthProvider";

export const App = () => {
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
