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
    <div className="">
      <h2>{question}</h2>
      <div className="flex flex-col">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            disabled={selectedOption !== null}
            className="bg-orange-300 mt-4"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-10">
        {Object.entries(results).map(([option, count]) => (
          <ul key={option}>
            <li className="bg-green-300 mt-4">{`${option}: ${count}`}</li>
          </ul>
        ))}
      </div>
      <button onClick={handleReset}>Reset Poll</button>
    </div>
  );
};

export default Poll;
