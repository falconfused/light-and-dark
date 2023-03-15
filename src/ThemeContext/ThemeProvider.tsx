import { themeContext } from "./ThemeContext";
import React, { useState } from 'react';

function ThemeProvider(props: any) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }


    return <themeContext.Provider value={{ theme, toggleTheme }}>{props.children}</themeContext.Provider>
}
 export  default ThemeProvider;