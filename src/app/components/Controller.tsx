"use client"

import { useGameContext } from '../context/gameContext'
import ControllerItem from './ControllerItem'

type ControllerProps = {
    pcMove: () => void
}

const Controller = ({ pcMove }: ControllerProps) => {
    const { dispatch } = useGameContext()

    const dispatcher = (key: string, path: string) => {
        dispatch({ type: "SET_SYMBOL", payload: key })
        dispatch({ type: "SET_USER_IMAGE", payload: path })
        pcMove()
    }

    const rockClick = () => {
        dispatcher("rock", "/images/rock2.png")
    }

    const scissorClick = () => {
        dispatcher("scissor", "/images/scissors2.png")
    }

    const paperClick = () => {
        dispatcher("paper", "/images/paper2.png")
    }
    return (
        <div className='w-full mt-28 md:mt-12 flex gap-4 md:gap-8 items-center justify-center'>
            <ControllerItem click={rockClick} path='/images/rock-user.png' />
            <ControllerItem click={scissorClick} path='/images/paper-user.png' />
            <ControllerItem click={paperClick} path='/images/scissors-user.png' />
        </div>
    )
}

export default Controller