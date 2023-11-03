import React from "react";
import logoWhite from "../../assets/login/logo-full-white.png";
import logoDark from "../../assets/login/logo-full.png";
import {  useAppThemeContext } from "../../shared/contexts/ThemeContext";

import Button from "@mui/material/Button";


export const Header = () => {
const theme = useAppThemeContext();
  return (
    <>
        <img src={theme.themeName === 'light' ? logoWhite:logoDark} alt="logo" style={{
          width: "300px",
        height: "300px",}} />
        <Button onClick={theme.toggleTheme}>Toggle Mode</Button>
        </>

        
  );
}

