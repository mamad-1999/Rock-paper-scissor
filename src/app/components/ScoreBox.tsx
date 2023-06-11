type ScoreBoxPropsType = {
    title: string
    score: number | string
    scoreColor: string
}

const ScoreBox = ({ score, title, scoreColor }: ScoreBoxPropsType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <span className="text-xl bg-zinc-700 text-white rounded-lg py-1 px-3">{title}</span>
            <span className={`text-5xl ${scoreColor} font-medium`}>{score}</span>
        </div>
    )
}

export default ScoreBox