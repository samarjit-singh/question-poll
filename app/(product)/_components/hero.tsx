"use client";

import Image from "next/image";
import HeroImage1 from "../../../public/hero1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen mt-44 flex justify-center">
      <div className="w-5/6 lg:flex items-center justify-center gap-x-10">
        <div className="font-mono">
          <span className="flex items-center justify-center lg:items-start lg:justify-start gap-x-4">
            <p className="text-2xl lg:text-6xl font-bold text-[#22092C]">
              Break into a
            </p>
            <p className="text-2xl lg:text-6xl font-bold text-white bg-[#6962AD] w-32 lg:w-72 text-center rounded-full border-b-8 border-b-[#3D3B40] border-r-8 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40] -rotate-3">
              New Era
            </p>
          </span>

          <p className="text-2xl text-center lg:text-start lg:text-6xl font-bold text-[#22092C]">
            of Virtual Pool
          </p>

          <p className="lg:w-[35rem] mt-10 font-bold lg:text-xl text-center lg:text-start">
            CueSphere a developing pool application, offers a realistic,
            customizable digital pool experience, catering to enthusiasts and
            casual players alike.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/pool">
              <button className="mt-10 bg-[#6962AD] lg:text-xl text-white font-bold rounded-full w-36 lg:w-44 h-10 lg:h-14 border-b-4 border-b-[#3D3B40] border-r-4 border-r-[#3D3B40] border-t-2 border-t-[#3D3B40] border-l-2 border-l-[#3D3B40]">
                JOIN
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={HeroImage1}
            width={500}
            height={500}
            alt="Picture of university"
            className="mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
