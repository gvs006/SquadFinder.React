import { useState } from "react";
import Input from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import CustomLoginButton from "../../components/CustomLoginButton/CustomLoginButton.style";


export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <Form>
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        label="Usuário ou Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Senha"
      />
      <div>Esqueceu sua senha?</div>
      <div>Clique <a href="/">aqui</a></div>
      <CustomLoginButton href={""} label={"Entrar"}></CustomLoginButton>
    </Form>
        
        
    </>
  );
}
