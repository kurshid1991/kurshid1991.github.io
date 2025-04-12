// src/components/ResumePage.jsx
import React from 'react';
import { saveAs } from 'file-saver';
import html2pdf from 'html2pdf.js';

const ResumePage = () => {
  const downloadPDF = () => {
    const resumeContent = document.getElementById('resume-content');
    html2pdf()
      .from(resumeContent)
      .save('resume.pdf');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8">
      <div id="resume-content" className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">My Resume</h1>

        {/* Add your resume content here */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Kurshid Banu Basheer</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Bioinformatician | Computational Biologist</p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-6">Summary: Passionate about using computational tools to analyze biological data and develop innovative solutions in the field of bioinformatics.</p>

        {/* Example of experience */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-gray-700 dark:text-gray-300">Subject Matter Expert at Chegg</li>
          <li className="text-gray-700 dark:text-gray-300">Project Assistant at ICMR Port Blair</li>
          <li className="text-gray-700 dark:text-gray-300">Project Intern at Biotecnika</li>
        </ul>

        <button
          onClick={downloadPDF}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
        >
          Download Resume as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
