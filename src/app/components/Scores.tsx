"use client"

const Scores = () => {
    return (
        <div className="w-full flex py-6 px-8 justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-xl bg-zinc-800 text-white rounded-lg py-1 px-3">Win</span>
                <span className="text-4xl font-medium">0</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-xl bg-zinc-800 text-white rounded-lg py-1 px-3">Equal</span>
                <span className="text-4xl font-medium">0</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-xl bg-zinc-800 text-white rounded-lg py-1 px-3">Win</span>
                <span className="text-4xl font-medium">0</span>
            </div>
        </div>
    )
}

export default Scores