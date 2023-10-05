import React from "react";
import logo from "../../assets/login/logo-full-white.png";
import darklogo from "../../assets/login/logo-full.png";
import Image from "../../assets/login/hero-bg-pqn.jpg";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";


export const HeaderBackground = styled(Box)`
  background-image: linear-gradient(180deg, #00000011 0%, #ffffff 88.02%),
    url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;

`;


export const Header = () => {


  return (
    <>
<Grid container xs={12}>
        <HeaderBackground>
        <img src={logo} alt="logo" />
        </HeaderBackground>
        </Grid>

 
    </>
  );
}

