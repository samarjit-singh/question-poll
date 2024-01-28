"use client";

import Pool from "./_components/pool";

const PoolPage: React.FC = () => {
  const question1 = "How do you feel today?";
  const option1 = ["Brilliant!", "Could be worse", "End my misery"];

  const question2 = "How you like the Opinary test?";
  const option2 = [
    "It was great and so challenging.",
    "Not bad, but you can improve.",
    "It was a nightmare, never again.",
  ];

  return (
    <div className="mt-52">
      This is the Pool page
      <div className="flex gap-10">
        <Pool question={question1} options={option1} />
        <Pool question={question2} options={option2} />
      </div>
    </div>
  );
};

export default PoolPage;
