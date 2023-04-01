import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-left items-center justify-evenly max-w-full px-2 lg:px-10 h-screen mx-auto md:flex-row"
    >
      <h3 className="absolute top-20 md:top-24 2xl:top-32 text-2xl text-gray-500 uppercase tracking-[10px] md:tracking-[20px] 2xl:text-4xl">
        Experience
      </h3>

      {/* ExperienceCard */}
      <div className="flex w-full space-x-5 overflow-x-scroll p-4 lg:p-8 xl:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A] max-h-screen md:max-h-[70vh] lg:max-h-[85vh] mt-8">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
