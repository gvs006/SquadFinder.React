import { useState } from "react";
import Input from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import CustomLoginButton from "../../components/CustomLoginButton/CustomLoginButton.style";
import Swal from "sweetalert2";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleEntrar = () => {

    if(!user || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado!",
        footer: '<a href="">Porque estou tendo esse problema?</a>',
      });
    }
   
  };

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
          type="password"
        />
        <div>Esqueceu sua senha?</div>
        <div>
          Clique <a href="/">aqui</a>
        </div>
        <CustomLoginButton
          label={"Entrar"}
          onSubmit={(e) => handleEntrar()}
          onClick={console.log("Clicado")}
        ></CustomLoginButton>
      </Form>
    </>
  );
}
