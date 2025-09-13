import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants/documents';

const Experience = () => {
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

  return (
    <section 
      id="experience" 
      className="py-16 px-8 min-h-screen"
      style={{
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
        color: isDarkMode ? '#F5F5F5' : '#000000'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            My professional journey and experience in software development and education.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg p-6 group transition-all duration-300"
              style={{ 
                backgroundColor: isDarkMode ? '#050505' : '#F5F5F5',
                border: `1px solid ${isDarkMode ? '#262626' : '#E0E0E0'}`
              }}
              whileHover={{ y: -2 }}
              tabIndex={0}
              onFocus={(e) => {
                e.currentTarget.style.outline = 'none';
                e.currentTarget.style.border = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1 transition-colors duration-300" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{exp.title}</h3>
                  <p className="font-medium transition-colors duration-300" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{exp.job}</p>
                </div>
                <span className="text-sm mt-2 md:mt-0 transition-colors duration-300" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{exp.date}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
              >
                <h4 className="text-sm font-semibold mb-2 transition-colors duration-300" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {exp.contents.map((content, contentIndex) => (
                    <motion.li 
                      key={contentIndex} 
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.15 + 0.7 + contentIndex * 0.1 
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? '#F5F5F5' : '#000000' }}></div>
                      <span className="text-sm transition-colors duration-300" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{content}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
