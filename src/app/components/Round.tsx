
type RoundProps = {
    round: number
}

const Round = ({ round }: RoundProps) => {
    return (
        <div className="w-full flex items-center justify-center flex-col gap-2 py-3">
            <span className="text-xl">Round</span>
            <span className="text-6xl">{round}</span>
        </div>
    )
}

export default Round