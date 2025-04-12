// src/components/Hero.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';  // Import the Link component from react-router-dom

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 px-6 bg-white dark:bg-gray-900 shadow-xl rounded-3xl mx-4 mt-12 animate-fade-in">
      
      {/* Left content */}
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-4xl font-extrabold text-slate-700 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Kurshid Banu Basheer
          </span>
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 mx-auto md:mx-0"></div>

        <div className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed min-h-[96px]">
          <Typewriter
            words={[
              "Bioinformatician & Computational Biologist",
              "Passionate about ML Pipelines & Spatial Omics",
              "Precision diagnosis and treatment of diseases",
              "Open for project collaboration and technical assistance",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>

        {/* Updated button wrapped in Link component */}
        <Link
          to="/projects"  // Use Link to navigate to the /projects route
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </Link>
      </div>

      {/* Right image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/omics-logic-code.appspot.com/o/Users%2FCBf1n3YXhBfBSn0B3vEn5zglfxi1%2Favatar?alt=media&token=d7044633-bb19-4c9c-9b54-f9e9e6508c94"
          alt="Kurshid Banu"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-300 dark:border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
