import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true); // local toggle for each section

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-xl font-semibold text-purple-700 dark:text-purple-400 hover:underline"
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className="mt-2 ml-4">{children}</div>}
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl mx-4 mt-12 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-100">
        Projects
      </h2>

      {/* Each section manages its own state */}
      <Section title="📂 General Projects">
        <ul className="list-disc pl-6">
          <li>Spatial Transcriptomics ML Pipeline</li>
          <li>Multi-Omics Subtyping Tool</li>
        </ul>
      </Section>

      <Section title="📺 YouTube Series">
        <ul className="list-disc pl-6">
          <li>Spatial Omics Basics – Episode 1</li>
        </ul>
      </Section>

      <Section title="🎓 Google Classroom Content">
        <ul className="list-disc pl-6">
          <li>Bioinformatics Bootcamp – Module 1</li>
        </ul>
      </Section>
    </section>
  );
};

export default Projects;
