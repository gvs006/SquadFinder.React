import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    
    <AppThemeProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
     </AppThemeProvider>

  );
};
