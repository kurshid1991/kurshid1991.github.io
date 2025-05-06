import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import ProjectsPage from './components/ProjectsPage';  
import FunIntro from './components/FunIntro';
import ThesisDissertationPage from './components/ThesisDissertationPage';  
import Classrooms from './components/Classrooms';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router basename="/kurshid1991.github.io">
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800'}`}>
        <div className="absolute top-4 right-4 z-50">
          <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-300 dark:bg-gray-700 text-sm text-gray-800 dark:text-white px-4 py-2 rounded-full shadow hover:scale-105 transition">
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<><Hero /><FunIntro /></>} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/thesis" element={<ThesisDissertationPage />} />
          <Route path="/projects/classrooms" element={<Classrooms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
