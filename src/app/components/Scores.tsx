"use client"

import ScoreBox from "./ScoreBox"

const Scores = () => {
    return (
        <div className="w-full flex py-6 px-8 justify-center items-center gap-12 md:gap-28">
            <ScoreBox title="Win" score={0} />
            <ScoreBox title="Equal" score={0} />
            <ScoreBox title="Win" score={0} />
        </div>
    )
}

export default Scores