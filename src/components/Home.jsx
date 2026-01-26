import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <NavBar active="home" />
      <div className="flex flex-col xl:grid grid-cols-12 lg:mt-20 mx-10 lg:mx-20 justify-center items-center gap-10">
        <div className="col-span-5 lg:mt-0 w-64 h-64 md:h-80 md:w-80 xl:w-full xl:max-w-[500px] xl:h-auto xl:aspect-square flex justify-center items-center">
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <img src="/simonas2.jpeg" alt="Simonas" className="profile-image" />
          </motion.div>
        </div>
        <div className="col-span-7 flex flex-col justify-center items-center xl:items-start mt-10 xl:mt-0">
          <div className="font-semibold wrapper">
            <div className="typing-home">simonas tamkevicius</div>
          </div>
          <p className="mt-5 max-w-[700px] text-center xl:text-start xl:text-lg intro-text">
            Hello! I'm Simonas, a full-stack developer dedicated to creating
            remarkable digital experiences. Feel free to browse through my
            portfolio, and let's collaborate on something extraordinary!
          </p>
          <Link
            to="/about"
            className="flex flex-row space-x-1 justify-center items-center mt-10 more-about-me"
          >
            <p>more about me</p>
            <FaArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
