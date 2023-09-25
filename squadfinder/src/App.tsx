import React from "react";
import logo from "./assets/login/logo-full-white.png";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const ContainerStyle = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

function App() {
  return (
    <>
      <ContainerStyle>
        <Header></Header>
        <Container fluid>
          <Row>
            <Col style={{display:'flex', justifyContent:'center'}}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </ContainerStyle>
    </>
  );
}

export default App;
