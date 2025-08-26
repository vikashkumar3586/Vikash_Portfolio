import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
// interface ThemeContextProps {
//     theme: Theme;
//     setTheme: (theme: Theme) => void;
// }

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({ theme: "dark", setTheme: () => { } });
// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => { return (localStorage.getItem("theme") as Theme) || "dark" });
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
// In React, a component is a function that returns JSX (React elements), 
// while a hook is a function (usually starting with "use") that returns values or functions, not JSX.