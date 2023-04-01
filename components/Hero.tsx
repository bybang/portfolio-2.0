import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirlces from "./BackgroundCirlces";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi The Name's ${pageInfo?.name}`,
      "Guy-who-loves-Game.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center space-y-8 h-screen text-center overflow-hidden min-h-screen">
      <BackgroundCirlces />
      <div className="relative">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          height={128}
          width={128}
          className="rounded-full object-cover xl:w-40 xl:h-40 2xl:h-64 2xl:w-64"
          alt="hero-image"
        />
      </div>

      <div className="relative z-20">
        <h2 className="text-sm text-gray-500 pb-2 uppercase tracking-[15px] 2xl:text-4xl">
          {pageInfo?.role}
        </h2>
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-10 2xl:text-8xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* shortcuts */}
        <div className="flex flex-wrap justify-center pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
