"use client";

import { useState, useEffect } from "react";

type RoundProps = {
  round: number;
};

function Round({ round }: RoundProps) {
  const [animation, setAnimation] = useState(false);

  // handle round number effect
  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [round]);

  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 py-3">
      <span className="text-xl text-primary">Round</span>
      <span
        className={`text-6xl lg:text-7xl text-primary ${
          animation && "animate-ping"
        }`}
      >
        {round}
      </span>
    </div>
  );
}

export default Round;
