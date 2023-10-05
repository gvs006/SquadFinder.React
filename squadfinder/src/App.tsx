import React from "react";
import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import Grid from "@mui/material/Grid";
import { AppThemeProvider } from "./shared/contexts";



// export const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
// }));

export const App = () => {
  return (
    
    <AppThemeProvider>
      
          
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          
          

     </AppThemeProvider>

       

    
  );
};
