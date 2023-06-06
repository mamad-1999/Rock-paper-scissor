type ScoreBoxPropsType = {
    title: string
    score: number | string
}


const ScoreBox = ({ score, title }: ScoreBoxPropsType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <span className="text-xl bg-zinc-800 text-white rounded-lg py-1 px-3">{title}</span>
            <span className="text-4xl font-medium">{score}</span>
        </div>
    )
}

export default ScoreBox