import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:joshuabang26@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative flex flex-col items-center justify-evenly text-center max-w-7xl px-10 mx-auto h-screen">
      <h3 className="absolute top-20 md:top-24 2xl:top-32 text-2xl text-gray-500 uppercase tracking-[10px] md:tracking-[20px] 2xl:text-4xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-4 mt-10 md:mt-16 lg:mt-16 2xl:mt-0">
        <h4 className="flex flex-col md:flex-row gap-0 md:gap-3 text-lg md:text-4xl 2xl:text-6xl text-center font-semibold 2xl:mb-16">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        {/* Contact Info */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-16">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-lg lg:text-xl 2xl:text-4xl">
              {pageInfo?.phoneNumber}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-lg lg:text-xl 2xl:text-4xl">
              {pageInfo?.email}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapIcon className="w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-lg lg:text-xl 2xl:text-4xl">
              {pageInfo?.address}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 2xl:space-y-4 w-fit mx-auto"
          >
            <div className="flex md:space-x-2 2xl:space-x-4 flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 2xl:mt-12">
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="contactInput"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className="contactInput"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              type="text"
              className="contactInput"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput h-24"
            />
            <button
              type="submit"
              className="text-base md:text-lg text-black font-bold bg-[#F7AB0A] px-4 py-2 md:px-10 md:py-5 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
