"use client";

import { Howl } from "howler";
import { useGameContext } from "../context/gameContext";

function ButtonBox() {
  const { dispatch } = useGameContext();

  const sound = new Howl({
    src: ["/resetSound.mp3"],
  });

  const resetGame = () => {
    dispatch({ type: "RESET" });
    sound.play();
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 absolute md:left-8 md:top-8 top-48 left-8 z-10">
      <button
        type="button"
        onClick={resetGame}
        className="flex justify-center items-center w-10 md:w-12 h-10 md:h-12 rounded-3xl bg-zinc-600 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-6 md:w-8 h-6 md:h-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonBox;
