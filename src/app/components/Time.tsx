"use client"

const Time = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <h3 className="text-9xl text-white font-thin">16:00</h3>
            <button className="bg-indigo-300 w-36 h-36 rounded-full flex items-center justify-center mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
            </button>
        </div>
    )
}

export default Time