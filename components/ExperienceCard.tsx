import React, { useEffect, useState } from "react";
import { motion, useIsomorphicLayoutEffect } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [isMacbookAir, setIsMacbookAir] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useIsomorphicLayoutEffect(() => {
    setIsImageLoaded(true);
  }, []);

  useEffect(() => {
    setIsMacbookAir(window.matchMedia("(min-width: 1400px)").matches);
  }, []);

  return (
    <article
      className={`flex flex-col items-center space-y-7 rounded-lg bg-[#292929] flex-shrink-0 snap-center opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer p-6 xl:p-10 w-full md:w-[480px] md:h-[60vh] lg:w-[550px] lg:h-[65vh] xl:w-[900px] ${
        isMacbookAir && "h-[70vh]"
      } py-1 2xl-h-[75vh]`}
    >
      <motion.img
        initial={
          isMobile
            ? {
                y: -80,
                opacity: 0,
              }
            : {
                y: -100,
                opacity: 0,
              }
        }
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="experience-img"
        className={`rounded-full object-cover object-center w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:h-40 2xl:w-40 ${
          isMacbookAir ? "w-28 h-28" : ""
        }`}
        onLoad={() => setIsMacbookAir(true)}
      />

      <div className="px-0 md:px-10 2xl:h-full 2xl:space-y-6">
        <h4 className="text-xl lg:text-2xl xl:text-4xl font-light -mt-2">
          {experience?.company}
        </h4>
        <p className="text-sm lg:text-lg xl:text-2xl font-bold mt-1">
          {experience?.jobTitle}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="skills"
              width={24}
              height={24}
              className="md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-full"
            />
          ))}
        </div>

        <p className="text-gray-300 uppercase py-3 md:py-5 text-xs lg:text-base 2xl:text-xl">
          {new Date(experience.dateStarted).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
              })}
        </p>

        <ul
          className={`list-disc space-y-4 ml-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB07] max-h-44 md:max-h-32 lg:max-h-32 pr-5 text-sm md:text-base xl:text-xl xl:max-h-32 2xl:overflow-y-auto 2xl:max-h-full 2xl:h-full 2xl:text-2xl ${
            isMacbookAir && "h-24"
          }`}
        >
          {experience.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
