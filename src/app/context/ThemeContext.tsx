"use client"

import { createContext, useEffect, useState, useContext } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface ThemeContextProps {
    children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

const ThemeProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const getInitialTheme = (): string => {
            if (typeof window !== 'undefined' && window.localStorage) {
                const colorPrefers = window.localStorage.getItem('color-theme');
                if (typeof colorPrefers === 'string') return colorPrefers;
            }
            return 'light';
        };

        setTheme(getInitialTheme());
    }, []);

    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

// --- easy use this context --- //
export const useThemeCOntext = () => useContext(ThemeContext) 