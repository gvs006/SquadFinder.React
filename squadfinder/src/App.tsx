import React from "react";
import logo from "./assets/login/logo-full-white.png";
import "./App.css";
import { LoginButton } from "./components/Button/Button.style";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Header from "./components/Header/Header";

export const ContainerStyle = styled.div`
  text-align: center;
  height: 100vh;
  background-color: #fff;

`;

function App() {
  return (
    <>
      <ContainerStyle>
        <Header></Header>
        <Container fluid>
          <Row>
            <Col>
              <LoginButton>Entrar</LoginButton>
            </Col>
          </Row>
        </Container>
      </ContainerStyle>
    </>
  );
}

export default App;
