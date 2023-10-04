import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import styled from "@emotion/styled";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export const ContainerStyle = styled.div`
  text-align: center;
  background-color: #ffffff;
  margin: -10px;
  padding: -10px;
`;

// export const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
// }));

function App() {
  return (
    <ContainerStyle>
        <Grid container>
          <Grid xs={12} alignItems="center">
            <Header></Header>
          </Grid>

          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </Grid>
        </Grid>
    </ContainerStyle>
  );
}

export default App;
