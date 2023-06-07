"use client"

import { useGameContext } from "../context/gameContext"
import ScoreBox from "./ScoreBox"

const Scores = () => {
    const { state } = useGameContext()
    const { gameTies, pcScore, userScore } = state
    return (
        <div className="w-full flex py-6 px-8 justify-center items-center gap-12 md:gap-28">
            <ScoreBox title="Win" score={userScore} />
            <ScoreBox title="Equal" score={gameTies} />
            <ScoreBox title="Win" score={pcScore} />
        </div>
    )
}

export default Scores