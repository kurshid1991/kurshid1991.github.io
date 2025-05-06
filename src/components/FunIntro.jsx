// src/components/FunIntro.jsx
import React, { useState } from 'react';

const FunIntro = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 px-6 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-3xl mx-4 mt-12 animate-fade-in">
      <div className="text-center md:text-left">
        {/* About Me Button with dynamic gradient based on light/dark mode */}
        <button
          onClick={toggleContent}
          className="bg-transparent border-2 border-gradient-to-r from-beige-300 via-beige-400 to-beige-500 text-transparent bg-clip-text font-medium py-3 px-12 rounded-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6"
        >
          <span className="text-white dark:text-transparent dark:bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text">
            About Me
          </span>
        </button>

        {/* Resume Button that Opens in a New Tab */}
        <a
          href="/resume"  // Link to your resume page
          target="_blank"  // Opens in a new tab
          rel="noopener noreferrer"  // Security precaution
          className="bg-transparent border-2 border-gradient-to-r from-beige-300 via-beige-400 to-beige-500 text-transparent bg-clip-text font-medium py-3 px-12 rounded-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6"
        >
          <span className="text-white dark:text-transparent dark:bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text">
            Resume
          </span>
        </a>

        {/* Content to Unfold */}
        {isContentVisible && (
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
              So, who am I really? 😄
            </h2>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              A bioinformatician by degree 🧬, a pipeline ninja by passion 🤓, and an omics enthusiast who believes biology is just data waiting to be decoded!
            </p>
            <p className="text-md md:text-xl text-gray-600 dark:text-gray-400 italic mb-6">
              "On a mission to blend code and cells into scientific clarity."
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FunIntro;
