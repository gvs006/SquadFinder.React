import Button from "@mui/material/Button";
import { AuthContext } from "../../shared/contexts/Auth/AuthContext"
import {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard () {

    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');


 const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
 }

 useEffect(() => {
  if(!token) {
   handleLogout();
}
 }, []);
    
    return (
      <>
      Seja bem vindo {auth.user?.nickname} o seu ID é {auth.user?.id}, e o seu login é {auth.user?.login}
      {token &&  <Button onClick={handleLogout}>Sair</Button>}
      
      </>
     
    )
}