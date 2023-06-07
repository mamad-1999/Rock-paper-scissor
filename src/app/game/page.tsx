"use client"

import Controller from "../components/Controller"
import GameView from "../components/GameView"
import Round from "../components/Round"
import Scores from "../components/Scores"
import { randomPcMove } from "../../../utils/randomPcMove"

const GamePage = () => {

    const pcMoveHandler = () => {
        setTimeout(() => {
            const { title, image } = randomPcMove()
            console.log(title)
        }, 300);
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