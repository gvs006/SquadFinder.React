import Button from "@mui/material/Button";
import { AuthContext } from "../../shared/contexts/Auth/AuthContext"
import {useContext} from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard () {

    const auth = useContext(AuthContext)
    const navigate = useNavigate();

 const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
 }

    
    return (
      <>
      Seja bem vindo {auth.user?.nickname} o seu ID é {auth.user?.id}, e o seu email é {auth.user?.email}
      {auth.user &&  <Button onClick={handleLogout}>Sair</Button>}
      
      </>
     
    )
}