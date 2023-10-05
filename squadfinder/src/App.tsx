import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./styles.scss";
import styled from "@emotion/styled";

import Grid from "@mui/material/Grid";


export const ContainerStyle = styled.div`
  text-align: center;
  background-color: #ffffff;
  margin: -10px;
  padding: -10px;
`;

// export const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
// }));

export const App = () => {
  return (
    <ContainerStyle>

        <Grid container>
        <Header></Header>

        {/* GRID ROUTER */}
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </Grid>
        </Grid>
         {/* FIM GRID ROUTER */}
         
    </ContainerStyle>
  );
}
