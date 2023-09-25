import React from "react";
import logo from "../../assets/login/logo-full-white.png";
import darklogo from "../../assets/login/logo-full.png"
import img from "../../assets/login/hero-bg-pqn.jpg"
import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-image: linear-gradient(180deg, #00000011 0%, #ffffff 88.02%), url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 50vh;
`;

export const DarkHeaderStyle = styled.div`
background-image: linear-gradient(180deg, #00000011 0%, #000000 88.02%), url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: 100% auto;
height: 50vh;
`;
function Header() {

  const isLight: boolean = true;
  
  return (
    <>
    { isLight &&
      <HeaderStyle>
        <img src={logo} alt="logo" />
      </HeaderStyle>}

      { !isLight &&
      <DarkHeaderStyle>
       <img src={darklogo} alt="logo" />
       
      </DarkHeaderStyle>}
    </>
  );
}

export default Header;
