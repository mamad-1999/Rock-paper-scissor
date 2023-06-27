"use client";

import { useGameContext } from "../context/gameContext";
import ControllerItem from "./ControllerItem";

type ControllerProps = {
  pcMove: () => void;
};

function Controller({ pcMove }: ControllerProps) {
  const { dispatch } = useGameContext();

  // dispatcher is handler the user clicked on controller func
  const dispatcher = (key: string, path: string) => {
    dispatch({ type: "ACTIVE_IS_CLICK" });
    // call pcMove to move the pc by the random chose
    setTimeout(() => {
      dispatch({ type: "SET_USER_SYMBOL", payload: key });
      dispatch({ type: "SET_USER_IMAGE", payload: path });
      pcMove();
      dispatch({ type: "INACTIVE_IS_CLICK" });
    }, 1000);
  };

  // rock, scissor and paper click handler
  const rockClick = () => {
    dispatcher("rock", "/images/rock2.png");
  };

  const scissorClick = () => {
    dispatcher("scissor", "/images/scissors2.png");
  };

  const paperClick = () => {
    dispatcher("paper", "/images/paper2.png");
  };
  return (
    <div className="w-full mt-28 md:mt-12 absolute bottom-24 sm:bottom-16 md:bottom-10 flex gap-4 md:gap-8 items-center justify-center z-10">
      <ControllerItem click={rockClick} path="/images/rock-user.png" />
      <ControllerItem click={paperClick} path="/images/paper-user.png" />
      <ControllerItem click={scissorClick} path="/images/scissors-user.png" />
    </div>
  );
}

export default Controller;
