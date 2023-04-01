import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center text-left max-w-full mx-auto justify-evenly overflow-hidden h-screen md:flex-row z-0"
    >
      <h3 className="absolute top-20 md:top-24 2xl:top-32 text-2xl text-gray-500 uppercase tracking-[20px] 2xl:text-4xl">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center space-y-4 p-5 md:p-20 2xl:p-44 h-screen w-full flex-shrink-0 snap-center"
          >
            <Link key={project._id} href={project.linkToBuild} target="_blank">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt="project-image"
                className="relative mx-auto object-cover min-[320px]:w-48 min-[320px]:h-48 min-[390px]:w-64 min-[390px]:h-64 xl:w-[375px] xl:h-[21rem] 2xl:w-[800px] 2xl:h-[750px] mt-7 md:mt-20"
              />
            </Link>

            <div className="px-0 space-y-3 lg:space-y-10 md:px-10 max-w-6xl xl:space-y-4 2xl:space-y-10">
              <h4 className="text-xl lg:text-2xl 2xl:text-6xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="technology-used"
                    height={20}
                    width={20}
                    className="lg:w-10 lg:h-10 2xl:h-16 2xl:w-16"
                  />
                ))}
              </div>

              <p className="text-sm md:text-base 2xl:text-2xl text-center md:text-left max-h-44 overflow-y-scroll lg:overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB07]">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full bg-[#F7AB0A]/10 top-[30%] left-0 h-96 lg:h-[500px] 2xl:h-[800px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
