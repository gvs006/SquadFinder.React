import React from "react";
import logoWhite from "../../assets/login/logo-full-white.png";
import logoDark from "../../assets/login/logo-full.png";
import Image from "../../assets/login/hero-bg-pqn.jpg";
import { ThemeProvider } from "@mui/material";


export const Header = () => {

  return (
        <img src={logoWhite} alt="logo" style={{
          width: "450px",
        height: "450px",}} />
  );
}

