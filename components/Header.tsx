import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { useMediaQuery } from "react-responsive";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [iconSize, setIconSize] = useState<number>(50);
  const is2xl = useMediaQuery({ minWidth: "1920px" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIconSize(is2xl ? 100 : 50);
    }
  }, [is2xl]);

  return (
    <header className="flex items-start justify-between sticky top-0 max-w-7xl mx-auto p-5 z-20 xl:items-center 2xl:max-w-[1800px]">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center flex-wrap"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
          style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        />
        <Link href="#contact">
          <p className="text-sm text-gray-400 capitalize hidden md:inline-flex 2xl:text-2xl">
            Contact by Email
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
