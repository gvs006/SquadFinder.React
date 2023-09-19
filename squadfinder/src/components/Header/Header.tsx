import React from "react";
import logo from "../../assets/login/logo-full-white.png";
import img from "../../assets/login/hero-bg-pqn.jpg"
import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-image: linear-gradient(180deg, #00000011 0%, #ffffff 88.02%), url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 50vh;
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
