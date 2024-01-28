"use client";

import React, { useState } from "react";
import Page1 from "./_components/page1";
import Page2 from "./_components/page2";
import Image from "next/image";
import HeroImage2 from "../../../public/hero2.jpg";

const PollPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const getButtonClass = (pageName: string) => {
    return `mt-10 ${
      selectedPage === pageName ? "bg-[#6962AD]" : "bg-[#37B5B6]"
    } lg:text-xl text-white font-bold rounded-full w-36 lg:w-44 h-10 lg:h-14 border-b-4 border-b-[#3D3B40] border-r-4 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40]`;
  };

  return (
    <div className="mt-44 flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <button
          onClick={() => setSelectedPage("Page1")}
          className={getButtonClass("Page1")}
        >
          Poll 1
        </button>
        <button
          onClick={() => setSelectedPage("Page2")}
          className={getButtonClass("Page2")}
        >
          Poll 2
        </button>
      </div>
      <div>
        {selectedPage === "Page1" && <Page1 />}
        {selectedPage === "Page2" && <Page2 />}
      </div>

      {selectedPage === null && (
        <Image
          src={HeroImage2}
          width={500}
          height={500}
          alt="Picture of university"
          className="mt-16"
        />
      )}
    </div>
  );
};

export default PollPage;
