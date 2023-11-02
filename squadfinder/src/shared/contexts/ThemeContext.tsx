import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "../themes";
import Box from "@mui/material/Box";


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
                    

                    {children}
                </Box>
            
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}