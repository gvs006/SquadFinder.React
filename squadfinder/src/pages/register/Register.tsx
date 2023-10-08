import { useState } from "react";
import { Form } from "../../components/Form/Form"
import Input from "../../components/Input/Input"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CustomLoginButton from "../../components/CustomLoginButton/CustomLoginButton.style";
import Link from "@mui/material/Link";

export const Register = () => {
  
  // TODO
  
  
    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
    
  
    return (
      <>


        <Box width="100%" height="100vh" display="flex" justifyContent="center">
          <Paper variant={"elevation"} elevation={24} square={false}
          style={{minWidth:"33%", display: "flex", justifyContent:"center"}} 
          >
            <Form>

            <Typography mt={2} mb={3} variant="body2" textAlign="center">
              
              Já tem cadastro? Faça log-in <Link href="/login">aqui.</Link>
            
            </Typography>

            <Divider>
                <Chip label="ou" />
              </Divider>

              <Typography mt={5} mb={5} variant="h4" textAlign="center">
              Cadastre-se abaixo:
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
                label="Repita sua senha"
                type="password"
              />

                <Input
                value={passwordConfirmInput}
                onChange={(e) => setPasswordConfirmInput(e.target.value)}
                label="Data de Nascimento [DD-MM-YYYY]"
                type="date"
              />

                <Input
                value={passwordConfirmInput}
                onChange={(e) => setPasswordConfirmInput(e.target.value)}
                label="Sexo"
                type="radio"
              />

              </Box>
            
            
              
              
  
              <CustomLoginButton label={"Cadastrar"} />
            </Form>
          </Paper>
        </Box>
      </>
    );
  }
  
