import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import CollapsibleExample from "./components/CustomNavBarHome/CustomNavBarHome";
import "./styles.scss"

export const ContainerStyle = styled.div`
  text-align: center;

  background-color: #ffffff;
`;

function App() {
  return (
    <>

<ContainerStyle>
    <CollapsibleExample></CollapsibleExample>
    
    <Container fluid>
    
      
        <Header></Header>
        
          <Row>
          
            <Col style={{display:'flex', justifyContent:'center', padding: 0}}>
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
