"use client"

import { createContext, useEffect, useState, useContext } from "react";

type Theme = "light" | "dark"

type ContextType = {
    children: React.ReactNode
}

type ThemeStateType = {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const getInitialTheme = (): string => {
    if (typeof window !== undefined && window.localStorage) {
        const colorPrefers = window.localStorage.getItem("color-theme")

        if (typeof colorPrefers === "string") return colorPrefers

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) return "dark"
    }
    // default theme
    return "light"
}

export const ThemeContext = createContext<ThemeStateType>({} as ThemeStateType)

const ThemeProvider = ({ children }: ContextType) => {
    const [theme, setTheme] = useState<string>(getInitialTheme)

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
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

// --- easy use this context --- //
export const useThemeCOntext = () => useContext(ThemeContext) 