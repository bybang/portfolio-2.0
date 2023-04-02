import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import { useMediaQuery } from "react-responsive";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div className="relative flex group cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -90 : 90,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill?.image).url()}
        className={`w-14 h-14 md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 border border-gray-500 rounded-full object-cover xl:w-20 xl:h-20 2xl:w-40 2xl:h-40 filter group-hover:grayscale transition duration-300 ease-in-out`}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out w-14 h-14 md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-40 2xl:h-40 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-black font-bold opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
