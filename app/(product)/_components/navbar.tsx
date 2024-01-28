"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="font-mono z-50 fixed top-0 w-5/6 p-5 m-10 rounded-full bg-[#37B5B6] border-b-8 border-b-[#3D3B40] border-r-8 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <p className="font-bold text-2xl text-white">🎱 CueSphere</p>
          </Link>
          <div className="hidden sm:flex gap-x-5">
            <Link
              href="/"
              className="hover:bg-[#6962AD] text-center text-xl text-white font-bold rounded-full w-20 border-b-4 border-b-[#3D3B40] border-r-4 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/pool"
              className="hover:bg-[#6962AD] text-center text-xl text-white font-bold rounded-full w-28 border-b-4 border-b-[#3D3B40] border-r-4 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40] cursor-pointer"
            >
              Pool
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
