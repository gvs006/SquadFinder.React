import Grid from "@mui/material/Grid";
import "../styles.scss";
import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const cardRegister = (
    <React.Fragment>
      <CardContent>
      <Typography variant="h5" component="div">
        Cadastro
        </Typography>

  
        <Typography variant="body2">
        Acesse nosso formulário rápido ou faça login utilizando sua conta Google, Apple ou Facebook.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/register">CADASTRAR</Button>
      </CardActions>
    </React.Fragment>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <>
   
      <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">
        <Card style={{ width: "20rem" }}>{card}</Card>
        <Card style={{ width: "20rem" }}>{cardRegister}</Card>
        <Card style={{ width: "20rem" }}>{card}</Card>
      </Grid>

    </>
  );
}
