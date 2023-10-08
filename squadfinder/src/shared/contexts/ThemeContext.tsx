import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "../themes";
import Box from "@mui/material/Box";
import logo from "../../assets/login/logo-full-white.png";
import Image from "../../assets/login/hero-bg-pqn.jpg";
import { Header } from "../../components/Header/Header";

type Props = {
    children?: React.ReactNode
}

interface IThemeContextData {
themeName: 'light' | 'dark';
toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {

    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');

    }, []);

    const theme = useMemo(() => {
     if (themeName === 'light')   return LightTheme;
     return DarkTheme;
    },[themeName]);

    const headerStyle = {
        backgroundImage:`linear-gradient(180deg, #00000011 0%, #ffffff 88.02%), url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"100% auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };


    return ( 

        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box 
                width="100vw" 
                height="100vh"
                style={{ 
                    background: theme.palette.background.default,
                }}
                >
                    <Box 
                width="100%" 
                height="45vh"
                style={headerStyle} >
                    
                <Header></Header>
                 </Box>

                    {children}
                </Box>
            
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}