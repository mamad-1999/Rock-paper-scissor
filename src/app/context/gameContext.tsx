"use client"

import { createContext, useReducer, Dispatch } from "react";

type StateType = {
    userScore: number
    pcScore: number
    gameTies: number
    roundCounter: number
    userSelect: string
}

type ActionType = {
    type: string
    payload: string
}

const initialState = {
    userScore: 0,
    gameTies: 0,
    pcScore: 0,
    roundCounter: 0,
    userSelect: ""
} as StateType

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_USER_SCORE": {
            return { ...state, userScore: state.userScore + 1 }
        }
        case "INCREMENT_PC_SCORE": {
            return { ...state, psScore: state.pcScore + 1 }
        }
        case "INCREMENT_GAME_TIES": {
            return { ...state, gameTies: state.gameTies + 1 }
        }
        case "INCREMENT_ROUND": {
            return { ...state, roundCounter: state.roundCounter + 1 }
        }
        case "INCREMENT_ROUND": {
            return { ...state, userSelect: action.payload }
        }
        default:
            return state;
    }
}


export const GameContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}