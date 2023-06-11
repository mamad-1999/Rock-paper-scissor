"use client"

import { Controller, Scores, Round, GameView, ToggleButton, ButtonBox } from "../components/index"
import { randomPcMove } from "../../../utils/randomPcMove"
import { useGameContext } from "../context/gameContext"
import { useEffect } from "react"

const GamePage = () => {
    const { state, dispatch } = useGameContext()

    // every change user and pc selection call determineWinner function
    useEffect(() => {
        const { userSelect, pcSelect } = state
        if (userSelect && pcSelect) {
            determineWinner(userSelect, pcSelect)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.pcSelect, state.userSelect])

    // handle pc Move after user clicked on controller button
    const pcMoveHandler = () => {
        const { title, image } = randomPcMove()
        // set in state
        dispatch({ type: "SET_PC_IMAGE", payload: image })
        dispatch({ type: "SET_PC_SYMBOL", payload: title })
    }

    // point the winner after each round
    const determineWinner = (user: string, pc: string) => {
        dispatch({ type: "INCREMENT_ROUND" })
        // check equal user and pc 
        if (user === pc) {
            return dispatch({ type: "INCREMENT_GAME_TIES" })
        }

        // condition for win the user
        // and else pc is winner
        if (
            (user === "rock" && pc === "scissor") ||
            (user === "paper" && pc === "rock") ||
            (user === "scissor" && pc === "paper")
        ) {
            dispatch({ type: "INCREMENT_USER_SCORE" })
        } else {
            dispatch({ type: "INCREMENT_PC_SCORE" })
        }

    }

    return (
        <div className="w-full min-h-screen bg-primary flex flex-col select-none relative">
            <Scores />
            <Round round={state.roundCounter} />
            <GameView />
            <Controller pcMove={pcMoveHandler} />
            <ToggleButton />
            <ButtonBox />
        </div>
    )
}

export default GamePage