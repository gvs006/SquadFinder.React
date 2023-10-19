import Button from "@mui/material/Button";
import { AuthContext } from "../../shared/contexts/Auth/AuthContext"
import {useContext} from "react";


export default function Dashboard () {

    const auth = useContext(AuthContext)
    return (
      <>
      Seja bem vindo {auth.user?.nickname} o seu ID é {auth.user?.id}, e o seu email é {auth.user?.email}
      {auth.user &&  <Button>Sair</Button>}
      
      </>
     
    )
}