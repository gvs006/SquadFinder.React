import React from "react";
import logo from "../../assets/login/logo-full-white.png";
import darklogo from "../../assets/login/logo-full.png";
import Image from "../../assets/login/hero-bg-pqn.jpg";
import styled from "@emotion/styled";


export const HeaderStyle = styled.div`
  background-image: linear-gradient(180deg, #00000011 0%, #ffffff 88.02%),
    url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100%;
  width: 100%;
`;


function Header() {


  return (
    <>
      
        <HeaderStyle>
        <img src={logo} alt="logo" />
        </HeaderStyle>
   

 
    </>
  );
}

export default Header;
