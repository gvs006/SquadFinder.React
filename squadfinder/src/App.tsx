import React from 'react';
import logo from './assets/login/logo-full-white.png';
import './App.css';
import { LoginButton } from './components/Button/Button.style';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header></Header>
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
        MANUTENÇÃO
        <br></br>
         <LoginButton>Entrar</LoginButton>
        </p>
      
      </header>
    </div>
    </>
  );
}

export default App;
