"use client"

import Controller from "../components/Controller"
import GameView from "../components/GameView"
import Round from "../components/Round"
import Scores from "../components/Scores"

const GamePage = () => {
    return (
        <div className="w-full min-h-screen bg-stone-200 flex flex-col select-none">
            <Scores />
            <Round />
            <GameView />
            <Controller />
        </div>
    )
}

export default GamePage