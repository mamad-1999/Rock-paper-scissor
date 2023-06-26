"use client";

import { useState, useEffect } from "react";
import "../flip.css";

type ScoreBoxPropsType = {
  title: string;
  score: number | string;
  scoreColor: string;
};

function ScoreBox({ score, title, scoreColor }: ScoreBoxPropsType) {
  const [change, setChange] = useState(true);

  useEffect(() => {
    setChange(!change);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const animation1 = change ? "fold" : "unfold";
  const animation2 = !change ? "fold" : "unfold";
  const number1 = change ? +score - 1 : score;
  const number2 = !change ? +score - 1 : score;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <span className="text-xl bg-zinc-700 text-white py-1 px-3">{title}</span>
      <div className="flipCounter">
        <div className="upperCard">
          <span className={`${scoreColor}`}>{score}</span>
        </div>
        <div className="lowerCard">
          <span className={`${scoreColor}`}>{+score - 1}</span>
        </div>
        <div className={`flipCard first ${animation1}`}>
          <span className={`${scoreColor}`}>{number1}</span>
        </div>
        <div className={`flipCard second ${animation2}`}>
          <span className={`${scoreColor}`}>{number2}</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBox;
