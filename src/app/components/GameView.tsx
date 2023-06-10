"use client"

import { useGameContext } from "../context/gameContext"
import { GameViewImage } from "./index"

const GameView = () => {
    const { state } = useGameContext()

    return (
        <div className='w-full flex justify-between items-center mt-12 lg:mt-2'>
            <GameViewImage image={state.userImage} />
            <GameViewImage image={state.pcImage} />
        </div>
    )
}

export default GameView