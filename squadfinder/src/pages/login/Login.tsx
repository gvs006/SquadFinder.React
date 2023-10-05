import { useState } from "react";
import Input from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import CustomLoginButton from "../../components/CustomLoginButton/CustomLoginButton.style";
import Swal from "sweetalert2";

export default function Login() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");



  return (
    <>
      <Form>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          label="Usuário ou Email"
        />
        <Input
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          label="Senha"
          type="password"
        />
        <div>Esqueceu sua senha?</div>
        <div>
          Clique <a href="/">aqui</a>
        </div>
        <CustomLoginButton
          label={"Entrar"}
        ></CustomLoginButton>
      </Form>
    </>
  );
}
