import {useContext} from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../../pages/login/Login";

export const RequireAuth = ({ children } : { children: JSX.Element}) => {
    
    const auth = useContext(AuthContext)

    const token = localStorage.getItem('authToken');

    if(!token) {
        return <Login />
    }

    return children;
}