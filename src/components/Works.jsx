import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      year: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      status: "Active",
      year: "2024"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design, smooth animations, and responsive layout built with React and Framer Motion.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      status: "Active",
      year: "2024"
    }
  ];

  return (
    <section id="works" className="py-16 px-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            My Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Here are some of the projects I've worked on, showcasing my skills in 
            full-stack development and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg p-6 group hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: isDarkMode ? '#262626' : '#F5F5F5' }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span 
                    className="px-2 py-1 text-xs font-medium rounded-full"
                    style={{ 
                      backgroundColor: isDarkMode ? '#050505' : '#FFFFFF',
                      color: isDarkMode ? '#F5F5F5' : '#000000'
                    }}
                  >
                    {project.status}
                  </span>
                  <span className="text-sm" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{project.year}</span>
                </div>
              </div>
              
              <p className="mb-4 leading-relaxed transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF', color: isDarkMode ? '#F5F5F5' : '#000000' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 font-medium rounded-lg transition-all duration-300 group hover:scale-105"
            style={{ backgroundColor: '#050505', color: '#F5F5F5' }}
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
