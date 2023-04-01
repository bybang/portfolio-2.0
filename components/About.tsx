import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-evenly h-screen mx-auto text-center max-w-7xl 2xl:max-w-[1800px] px-10 md:flex-row md:text-left"
    >
      <h3 className="absolute top-20 md:top-24 2xl:top-32 text-2xl 2xl:text-4xl text-gray-500 uppercase tracking-[20px]">
        About
      </h3>

      <div className="flex flex-col md:flex-row mt-5 items-center justify-center">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePicture).url()}
          alt="profile-image"
          className="flex-shrink-0 w-56 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[50vh] 2xl:w-[800px] 2xl:h-auto mt-8 md:mt-0"
        ></motion.img>

        <div className="space-y-10 px-0 md:px-10 mt-12 md:m-0 2xl:h-full">
          <h4 className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold ">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-base 2xl:text-3xl max-h-[120px] md:max-h-[300px] lg:max-h-none xl:max-h-none overflow-y-scroll md:overflow-y-scroll lg:overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
