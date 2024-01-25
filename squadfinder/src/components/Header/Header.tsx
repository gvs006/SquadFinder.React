import React, { useEffect } from "react";
import logoWhite from "../../assets/login/logo-full-white.png";
import logoDark from "../../assets/login/logo-full.png";
import {  useAppThemeContext } from "../../shared/contexts/ThemeContext";

import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";


export const Header = () => {
const theme = useAppThemeContext();

const saveTheme = () => {
  alert("Em desenvolvimento");
};
  return (
    <>
        <img src={theme.themeName === 'light' ? logoWhite:logoDark} alt="logo" style={{
          width: "300px",
        height: "300px",}} />
        
        <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Tema</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={theme.themeName}
    onChange={theme.toggleTheme}
  >
    <FormControlLabel value="dark" control={<Radio />} label="Escuro" />
    <FormControlLabel value="light" control={<Radio />} label="Claro" />
  </RadioGroup>
</FormControl>

<Button onClick={saveTheme}>Salvar nos Cookies</Button>
        </>

        
  );
}

