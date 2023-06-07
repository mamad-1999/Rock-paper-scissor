"use client"

import { useGameContext } from "../context/gameContext"
import ScoreBox from "./ScoreBox"

const Scores = () => {
    const { state } = useGameContext()
    const { gameTies, pcScore, userScore } = state
    return (
        <div className="w-full flex py-6 px-8 justify-center items-center gap-12 md:gap-28">
            <ScoreBox
                title="Win"
                score={userScore}
                scoreColor={userScore > pcScore ?
                    "text-green-500" :
                    userScore === pcScore ?
                        "text-blue-500" :
                        "text-red-500"} />
            <ScoreBox
                title="Equal"
                score={gameTies}
                scoreColor="text-zinc-900" />
            <ScoreBox
                title="Win"
                score={pcScore}
                scoreColor={pcScore > userScore ?
                    "text-green-500" :
                    userScore === pcScore ?
                        "text-blue-500" :
                        "text-red-500"} />
        </div>
    )
}

export default Scores