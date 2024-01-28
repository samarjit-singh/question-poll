"use client";

import Page1 from "./_components/page1";
import Page2 from "./_components/page2";

const PoolPage: React.FC = () => {
  return (
    <div className="mt-52">
      This is the Pool page
      <div className="flex gap-10">
        <Page1 />
        <Page2 />
      </div>
    </div>
  );
};

export default PoolPage;
