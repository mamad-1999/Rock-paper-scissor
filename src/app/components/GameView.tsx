"use client"

import Image from "next/image"
import { useGameContext } from "../context/gameContext"

const GameView = () => {
    const { state } = useGameContext()
    let imageClass = "sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"

    return (
        <div className='w-full flex justify-between items-center mt-12 lg:mt-2'>
            <Image
                src={state.userImage}
                alt="player1"
                width={160}
                height={100}
                quality={100}
                priority={true}
                className={imageClass}
            />
            <Image
                src={state.pcImage}
                alt="player2"
                width={160}
                height={100}
                quality={100}
                priority={true}
                className={imageClass}
            />
        </div>
    )
}

export default GameView