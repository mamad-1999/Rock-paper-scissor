"use client"

import Controller from "../components/Controller"
import GameView from "../components/GameView"
import Round from "../components/Round"
import Scores from "../components/Scores"
import { randomPcMove } from "../../../utils/randomPcMove"
import { useGameContext } from "../context/gameContext"
import { useEffect } from "react"

const GamePage = () => {
    const { state, dispatch } = useGameContext()

    useEffect(() => {
        const { userSelect, pcSelect } = state
        if (userSelect && pcSelect) {
            determineWinner(userSelect, pcSelect)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.pcSelect, state.userSelect])

    const pcMoveHandler = () => {
        // setTimeout(() => {
        const { title, image } = randomPcMove()
        dispatch({ type: "SET_PC_IMAGE", payload: image })
        dispatch({ type: "SET_PC_SYMBOL", payload: title })
        // }, 300);
    }

    const determineWinner = (user: string, pc: string) => {
        console.log(user, pc)
        if (user === pc) {
            return dispatch({ type: "INCREMENT_GAME_TIES" })
        }

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
        <div className="w-full min-h-screen bg-stone-200 flex flex-col select-none">
            <Scores />
            <Round />
            <GameView />
            <Controller pcMove={pcMoveHandler} />
        </div>
    )
}

export default GamePage