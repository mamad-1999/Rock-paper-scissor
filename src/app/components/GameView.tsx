import Image from "next/image"

const GameView = () => {
    return (
        <div className='w-full flex justify-between items-center mt-6'>
            <Image src={"/images/rock2.png"} alt="player1" width={200} height={100} />
            <Image src={"/images/paper1.png"} alt="player1" width={200} height={100} />
        </div>
    )
}

export default GameView