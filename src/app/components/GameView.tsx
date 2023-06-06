"use client"

import Image from "next/image"
import { useGameContext } from "../context/gameContext"

const GameView = () => {
    const { state } = useGameContext()
    return (
        <div className='w-full flex justify-between items-center mt-6'>
            <Image
                src={state.userImage}
                alt="player1"
                width={160}
                height={100}
                quality={100}
                priority={true}
                className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
            />
            <Image
                src={"/images/paper1.png"}
                alt="player1"
                width={160}
                height={100}
                quality={100}
                priority={true}
                className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
            />
        </div>
    )
}

export default GameView