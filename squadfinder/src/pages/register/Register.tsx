import { useState } from "react";
import { Form } from "../../components/Form/Form"
import Input from "../../components/Input/Input"

export const Register = () => {



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
       </Form>


        </>
    )
}