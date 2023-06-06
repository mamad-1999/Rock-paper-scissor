"use client"

import { useGameContext } from '../context/gameContext'
import ControllerItem from './ControllerItem'

const Controller = () => {
    const { state, dispatch } = useGameContext()

    const dispatcher = (key: string) => {
        dispatch({ type: "SET_SYMBOL", payload: key })
    }

    const rockClick = () => {
        dispatcher("rock")
    }

    const scissorClick = () => {
        dispatcher("scissor")
    }

    const paperClick = () => {
        dispatcher("paper")
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