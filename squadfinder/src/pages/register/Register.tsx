import { useState } from "react";
import { Form } from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CustomLoginButton from "../../components/CustomLoginButton/CustomLoginButton.style";
import Link from "@mui/material/Link";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export const Register = () => {
  // TODO

  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

  return (
    <>
      <Box width="100%" height="80vh" display="flex" justifyContent="center">
        <Paper
          variant={"elevation"}
          elevation={24}
          square={false}
          style={{ minWidth: "33%", display: "flex", justifyContent: "center" }}
        >
          <Form>
            <Typography mt={2} mb={3} variant="body2" textAlign="center">
              Já tem cadastro? Faça log-in <Link href="/login">aqui.</Link>
            </Typography>

            <Divider>
              <Chip label="ou" />
            </Divider>

            <Typography mt={5} mb={5} variant="h4" textAlign="center">
              Crie sua conta
            </Typography>

            <Box mb={3} mt={3}>
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                label="Email"
              />
              <Input
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                label="Senha"
                type="password"
              />
              <Input
                value={passwordConfirmInput}
                onChange={(e) => setPasswordConfirmInput(e.target.value)}
                label="Confirme sua senha"
                type="password"
              />

              <Input
                value={passwordConfirmInput}
                label=""
                type="date"
                
              />

              <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Feminino"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Feminino"
                  control={<Radio />}
                  label="Feminino"
                />
                <FormControlLabel
                  value="Masculino"
                  control={<Radio />}
                  label="Masculino"
                />
                <FormControlLabel
                  value="Outro"
                  control={<Radio />}
                  label="Outro"
                />
              </RadioGroup>
            </Box>

            <CustomLoginButton label={"Cadastrar"} />
          </Form>
        </Paper>
      </Box>
    </>
  );
};
