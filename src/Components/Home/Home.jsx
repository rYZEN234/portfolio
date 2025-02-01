import React from "react";
import { motion } from "framer-motion";
import TextChange from "../TextChange";

const FloatingCubes = () => {
  const cubes = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden z-0 w-full h-full">
      {cubes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 bg-sky-400 opacity-50 rounded-md"
          initial={{ y: "100vh", x: `${Math.random() * 100}vw`, rotate: Math.random() * 360 }}
          animate={{ y: "-10vh", rotate: 360 }}
          transition={{ duration: Math.random() * 7 + 5, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center text-white p-10 md:p-20 overflow-hidden">
      <FloatingCubes />
      <div className="relative z-10 flex flex-col justify-center items-center text-center w-full">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight max-w-2xl">
          Enthusiastic frontend developer with a strong foundation in creating responsive, user-friendly web interfaces using modern technologies.
        </p>
        <a href="#Footer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
