import React, { useContext } from "react";
import logoWhite from "../../assets/login/logo-full-white.png";
import logoDark from "../../assets/login/logo-full.png";
import { AppThemeProvider, useAppThemeContext } from "../../shared/contexts/ThemeContext";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";


export const Header = () => {
const theme = useAppThemeContext();
  return (
    <>
        <img src={theme.themeName === 'light' ? logoWhite:logoDark} alt="logo" style={{
          width: "200px",
        height: "200px",}} />
        <Button onClick={theme.toggleTheme}>Toggle Mode</Button>
        </>

        
  );
}

