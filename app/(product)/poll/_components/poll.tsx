"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface PollProps {
  question: string;
  options: string[];
}

interface Results {
  [key: string]: number;
}

const Poll: React.FC<PollProps> = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<Results>({});

  useEffect(() => {
    const savedResults = localStorage.getItem(question);
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      const initialResults = options.reduce((acc: Results, option: any) => {
        acc[option] = 0;
        return acc;
      }, {});
      setResults(initialResults);
    }
  }, [question, options]);

  const triggerConfetti = () => {
    confetti({
      angle: 90,
      spread: 360,
      startVelocity: 30,
      elementCount: 100,
      dragFriction: 0.12,
      duration: 1500,
      stagger: 3,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });
  };

  const handleVote = (option: string) => {
    const newResults = { ...results, [option]: (results[option] || 0) + 1 };
    setResults(newResults);
    localStorage.setItem(question, JSON.stringify(newResults));
    setSelectedOption(option);

    triggerConfetti();
  };

  const handleReset = () => {
    const initialResults = options.reduce((acc: Results, option) => {
      acc[option] = 0;
      return acc;
    }, {});

    setResults(initialResults);
    localStorage.setItem(question, JSON.stringify(initialResults));
    setSelectedOption(null);
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center font-mono p-6">
      <h2 className="font-bold text-xl lg:text-3xl">{question}</h2>
      <div className="flex flex-col w-full">
        <p className="text-gray-400/50 ">Options:</p>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            disabled={selectedOption !== null}
            className="mt-4 flex gap-2 items-start justify-start font-semibold text-lg lg:text-2xl cursor-pointer"
          >
            <p>👉</p>
            <p>{option}</p>
          </button>
        ))}
        <p className="text-gray-400/50 mt-10">Result:</p>
      </div>

      <div className="w-full">
        {Object.entries(results).map(([option, count]) => (
          <ul key={option}>
            <li className="mt-4 flex justify-between">
              <p>{`${option}:`}</p>
              <p data-testid={`count-${option}`}>{`${count}`}</p>
            </li>
          </ul>
        ))}
      </div>
      <button
        onClick={handleReset}
        className="bg-[#F6D776] lg:text-xl mt-4 text-[#0A1D56] font-bold rounded-full w-36 lg:w-44 h-10 lg:h-14 border-b-4 border-b-[#3D3B40] border-r-4 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40]"
      >
        Reset Poll
      </button>
    </div>
  );
};

export default Poll;
