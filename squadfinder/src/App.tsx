import React from 'react';
import logo from './assets/login/logo-full-white.png';
import './App.css';
import { LoginButton } from './components/Button/Button.style';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <Header></Header>
    
    <Container>

   
        <img src={logo} alt="logo" />
        <p>
        MANUTENÇÃO
        <br></br>
         <LoginButton>Entrar</LoginButton>
        </p>

    </Container>
    </>
  );
}

export default App;
