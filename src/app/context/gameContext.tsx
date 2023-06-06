"use client"

type StateType = {
    userScore: number
    pcScore: number
    gameTies: number
    roundCounter: number
    userSelect: string
}

const initialState = {
    userScore: 0,
    gameTies: 0,
    pcScore: 0,
    roundCounter: 0,
    userSelect: ""
} as StateType

import { createContext } from "react";

export const GameContext = createContext({})

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <GameContext.Provider value={{}}>
            {children}
        </GameContext.Provider>
    )
}