import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="relative w-full h-screen bg-black text-white p-10 md:p-20 flex justify-center items-center overflow-hidden"
    >
      {/* Background Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full gap-6 md:flex-row md:justify-between md:text-left">
        {/* Left Side - Image */}
        <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
          <img
            className="object-cover h-full max-h-[450px] w-full md:w-[80%] rounded-lg"
            src={AboutImg}
            alt="About img"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-6">
          <h2 className="text-2xl md:text-4xl font-bold">About</h2>

          {/* Frontend Developer */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Enthusiastic frontend developer with a strong foundation in creating responsive, user-friendly web interfaces using modern technologies.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                Motivated backend developer with a solid grasp of building scalable, secure, and efficient server-side applications and APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
