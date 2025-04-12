// src/components/ProjectsPage.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Research/Internship Projects', link: '/projects/research' },
  { title: 'Thesis Dissertations', link: '/projects/thesis' },
  { title: 'Training/Certification', link: '/projects/training' },
  { title: 'YouTube', link: '/projects/youtube' },
  { title: 'Classrooms', link: '/projects/classrooms' },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-8">
      {/* 🔥 Gradient Typewriter Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
          <Typewriter
            words={['Projects']}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      {/* 🔳 Section Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <Link
            to={section.link}
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
          >
            <h2
              className="text-xl font-bold text-orange-500 dark:text-orange-400 transition-all duration-300 group-hover:text-[#FFD700] group-hover:[font-family:'Monotype_Corsiva',cursive]"
            >
              {section.title}
            </h2>
            {/* 🖼️ Placeholder for future images */}
            <div className="mt-4 h-40 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
