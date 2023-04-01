import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { useMediaQuery } from "react-responsive";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  const [isMacbookAir, setIsMacbookAir] = useState(false);

  const macbookAir = useMediaQuery({ minWidth: 1400 });

  useEffect(() => {
    setIsMacbookAir(window.matchMedia("(min-width: 1400px)").matches);
  }, []);

  useEffect(() => {
    setIsMacbookAir(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center items-center justify-center h-screen max-w-[2000px] min-h-screen mx-auto md:text-left xl:flex-row xl:px-10 xl:space-y-0"
    >
      <h3 className="absolute top-20 md:top-24 2xl:top-32 text-2xl text-gray-500 uppercase tracking-[20px] 2xl:text-4xl">
        Skiils
      </h3>

      <h3 className="absolute top-36 text-sm text-gray-500 tracking-[3px] uppercase 2xl:text-3xl 2xl:top-48">
        Hover over a skill for current proficiency
      </h3>

      <div
        onLoad={() => setIsMacbookAir(true)}
        className={`mt-16 md:mt-28 xl:mt-48 lg:mt-32 ${
          isMacbookAir && macbookAir ? "pt-20" : ""
        }`}
      >
        <div className={`grid grid-cols-4 gap-5`}>
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
