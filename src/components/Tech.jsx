import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Tech = () => {
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
  const technologies = [
    { name: "JavaScript", category: "Language", level: "Expert" },
    { name: "TypeScript", category: "Language", level: "Advanced" },
    { name: "React", category: "Frontend", level: "Expert" },
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "Python", category: "Language", level: "Intermediate" },
    { name: "C++", category: "Language", level: "Advanced" },
    { name: "C#", category: "Language", level: "Intermediate" },
    { name: "MongoDB", category: "Database", level: "Intermediate" },
    { name: "PostgreSQL", category: "Database", level: "Intermediate" },
    { name: "Docker", category: "DevOps", level: "Beginner" },
    { name: "Git", category: "Version Control", level: "Advanced" },
    { name: "AWS", category: "Cloud", level: "Beginner" }
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="tech" className="py-16 px-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Technologies
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Here are the technologies and tools I work with to build modern applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="rounded-lg p-6 group hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: isDarkMode ? '#262626' : '#F5F5F5' }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="rounded-lg p-4 text-center group-hover:scale-105 transition-all duration-300 group"
                      style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF' }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="font-medium mb-2 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                        {tech.name}
                      </div>
                      <div 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: isDarkMode ? '#262626' : '#E0E0E0', color: isDarkMode ? '#F5F5F5' : '#000000' }}
                      >
                        {tech.level}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
