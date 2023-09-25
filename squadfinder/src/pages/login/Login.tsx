import { useState } from "react";
import { LoginButton } from "../../components/Button/LoginButton.style";
import Input from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";


export default function Login() {
  const [input, setInput] = useState("");
  return (
    <>
    <Form>

      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="InputOutlined"
        label="Usuário ou Email"
      />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="InputOutlined"
        label="Senha"
      />
      <LoginButton>Entrar</LoginButton>
    </Form>
        
        
    </>
  );
}
