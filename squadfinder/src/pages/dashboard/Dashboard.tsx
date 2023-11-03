import Button from "@mui/material/Button";
import { AuthContext } from "../../shared/contexts/Auth/AuthContext"
import {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAppThemeContext } from "../../shared/contexts";
import FooterNav from "./footerNav/FooterNav";


export default function Dashboard () {

    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const theme = useAppThemeContext();



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
      
      <Box 
                height="100vh"
                width="auto"
                bgcolor="skygrey"
                >

                  
      Seja bem vindo {auth.user?.nickname ? auth.user?.nickname : " #NICKNAME "} o seu ID é {auth.user?.id ? auth.user?.id : " #ID "}, e o seu login é {auth.user?.login ? auth.user?.login : " #LOGIN "}
      
      <FooterNav></FooterNav>
      </Box>
      
      
     
    )
}