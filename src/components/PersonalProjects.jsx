import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faTasks, 
  faCloudSun,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const PersonalProjects = () => {
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
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      stats: "500+ Users",
      status: "Active",
      icon: faShoppingCart,
      color: "bg-blue-500",
      url: "#"
    },
    {
      title: "Task Manager",
      description: "Collaborative task management app with real-time updates",
      stats: "100+ Users",
      status: "Active",
      icon: faTasks,
      color: "bg-green-500",
      url: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with interactive maps",
      stats: "1K+ Users",
      status: "Active",
      icon: faCloudSun,
      color: "bg-cyan-500",
      url: "#"
    }
  ];

  return (
    <section className="py-16 px-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Personal Projects
          </h2>
          <p className="text-lg" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Tinkering through code in various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg p-6 transition-all duration-300 group cursor-pointer"
              style={{ backgroundColor: isDarkMode ? '#262626' : '#F5F5F5', border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center text-white`}>
                  <FontAwesomeIcon icon={project.icon} className="w-6 h-6" />
                </div>
                <a
                  href={project.url}
                  className="transition-colors"
                  style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                </a>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                {project.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{project.stats}</span>
                <span className="font-medium" style={{ color: '#10B981' }}>{project.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
