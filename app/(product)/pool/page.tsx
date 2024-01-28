"use client"

import React, { useState } from "react";
import Page1 from "./_components/page1";
import Page2 from "./_components/page2";

const PoolPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  return (
    <div className="mt-52">
      This is the Pool page
      <div className="flex gap-10">
        <button onClick={() => setSelectedPage("Page1")}>Show Page 1</button>
        <button onClick={() => setSelectedPage("Page2")}>Show Page 2</button>
      </div>
      <div>
        {selectedPage === "Page1" && <Page1 />}
        {selectedPage === "Page2" && <Page2 />}
      </div>
    </div>
  );
};

export default PoolPage;
