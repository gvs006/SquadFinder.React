import { useState, useContext } from "react";
import Input from "../../components/Input/Input";
import { Form } from "../../components/Form/Form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button/Button";
import { AuthContext } from "../../shared/contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

// TODO REFATORAÇÃO

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {};

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if(isLogged){
        navigate("/dashboard");
      } else {
        alert("Não deu certo")
      }
    }
    console.log("handleLogin ativado");
  };

  return (
    <>
      <Box width="100%" height="55vh" display="flex" justifyContent="center">
        <Paper
          variant={"elevation"}
          elevation={24}
          square={false}
          style={{ width: "auto", display: "flex", justifyContent: "center" }}
        >
          <Form onSubmit={handleSubmit}>
            <Box
              marginBottom="40px"
              display="flex"
              justifyContent="space-around"
            >
              <Tooltip title="Login com o Google">
                <IconButton style={{ height: 48, width: 48 }}>
                  <svg
                    className="MuiSvgIcon-root-76"
                    viewBox="0 0 48 48"
                    style={{ height: 48, width: 48 }}
                  >
                    <g>
                      <path
                        fill="#FFC107"
                        d="M43.61 20.082H42V20H24v8h11.305c-1.653 4.656-6.082 8-11.305 8-6.629 0-12-5.371-12-12s5.371-12 12-12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 12.953 4 4 12.953 4 24s8.953 20 20 20 20-8.953 20-20c0-1.34-.137-2.648-.39-3.918z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.305 14.691l6.574 4.82C14.656 15.11 18.96 12 24 12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 16.316 4 9.656 8.336 6.305 14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.164 0 9.86-1.977 13.41-5.191L31.22 33.57A11.918 11.918 0 0124 36c-5.203 0-9.617-3.316-11.281-7.945l-6.524 5.023C9.504 39.555 16.227 44 24 44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.61 20.082H42V20H24v8h11.305a12.054 12.054 0 01-4.09 5.57h.004l6.191 5.239C36.973 39.203 44 34 44 24c0-1.34-.137-2.648-.39-3.918z"
                      ></path>
                    </g>
                  </svg>
                </IconButton>
              </Tooltip>

              <Tooltip title="Login com o Facebook">
                <IconButton style={{ height: 48, width: 48 }}>
                  <svg
                    className="MuiSvgIcon-root-76"
                    viewBox="0 0 34 33"
                    style={{ height: 48, width: 48 }}
                  >
                    <path
                      fill="#4267B2"
                      d="M17 0C7.887 0 .5 7.425.5 16.585c0 8.315 6.093 15.181 14.033 16.38V20.981h-4.082v-4.36h4.082v-2.902c0-4.803 2.328-6.91 6.3-6.91 1.902 0 2.907.14 3.384.205v3.805h-2.71c-1.686 0-2.275 1.607-2.275 3.418v2.383h4.942l-.67 4.36h-4.27V33C27.288 31.904 33.5 24.981 33.5 16.585 33.5 7.425 26.113 0 17 0z"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>

              <Tooltip title="Login com Apple ID">
                <IconButton style={{ height: 48, width: 48 }}>
                  <svg
                    className="MuiSvgIcon-root-76"
                    viewBox="0 0 1000 1187.198"
                    style={{ height: 34, width: 46, paddingBottom: "6px" }}
                  >
                    <path d="M979.042 925.188c-17.954 41.477-39.206 79.657-63.828 114.759-33.563 47.853-61.044 80.976-82.222 99.37-32.83 30.192-68.006 45.654-105.672 46.533-27.041 0-59.652-7.694-97.611-23.303-38.085-15.536-73.084-23.23-105.086-23.23-33.563 0-69.56 7.694-108.061 23.23-38.561 15.609-69.625 23.743-93.376 24.55-36.12 1.538-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.888-36.875-51.883-67.191-112.047-90.942-180.639C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.19 63.066-82.625 108.127-109.373 45.06-26.748 93.749-40.378 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.376 99.443-31.064 53.313-19.185 98.307-27.129 135.168-24 99.883 8.062 174.923 47.436 224.828 118.372-89.33 54.126-133.52 129.936-132.64 227.188.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.183 82.222 53.934-6.595 19.127-13.557 37.447-20.958 55.035zM749.964 23.75c0 59.374-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.497c0-56.999 24.813-117.998 68.878-167.874 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.187.88 7.937 1.246 15.875 1.246 23.75z"></path>
                  </svg>
                </IconButton>
              </Tooltip>
            </Box>

            <Box marginBottom="40px">
              <Divider>
                <Chip label="ou" />
              </Divider>
            </Box>

            <Box mb={3}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Usuário ou Email"
                required
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Digite sua senha"
                type="password"
                required
              />
            </Box>

            <Typography mt={0} mb={2} fontSize={12} textAlign="center">
              <Link href="/recover-password">Esqueci minha senha.</Link>
            </Typography>
            <Divider>
              <Chip label="ou" />
            </Divider>
            <Typography mt={2} variant="body2" textAlign="center">
              Cadastre-se <Link href="/register">aqui.</Link>
            </Typography>

            <Button onClick={handleLogin}>ENTRAR</Button>
          </Form>
        </Paper>
      </Box>
    </>
  );
}
