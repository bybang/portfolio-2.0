import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCirlces({}: Props) {
  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute flex items-center justify-center inset-0"
      >
        {/* <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
        <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
        <div className="absolute border border-[#333333]  rounded-full h-[800px] w-[800px] mt-52" /> */}
        <div className="absolute border border-[#333333] rounded-full h-[30vw] w-[30vw] sm:h-[200px] sm:w-[200px] mt-52 2xl:h-[500px] 2xl:w-[500px] animate-ping 2xl:mt-80" />
        <div className="absolute border border-[#333333] rounded-full h-[45vw] w-[45vw] sm:h-[300px] sm:w-[300px] mt-52 2xl:h-[600px] 2xl:w-[600px] 2xl:mt-80" />
        <div className="absolute border border-[#333333] rounded-full h-[75vw] w-[75vw] sm:h-[500px] sm:w-[500px] mt-52 2xl:h-[800px] 2xl:w-[800px] 2xl:mt-80" />
        <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[95vw] w-[95vw] sm:h-[650px] sm:w-[650px] mt-52 animate-pulse 2xl:h-[950px] 2xl:w-[950px] 2xl:mt-80" />
        <div className="absolute border border-[#333333] rounded-full h-[115vw] w-[115vw] sm:h-[800px] sm:w-[800px] mt-52 2xl:h-[1100px] 2xl:w-[1100px] 2xl:mt-80" />
      </motion.div>
    </div>
  );
}

export default BackgroundCirlces;
