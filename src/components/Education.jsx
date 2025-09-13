import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { educationItems as educationData } from "../constants/documents";

const Education = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });
  const educationItems = educationData;

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
    <section id="education" className="py-16 px-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Education
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg p-6 group transition-all duration-300"
              style={{ 
                backgroundColor: isDarkMode ? '#050505' : '#F5F5F5',
                border: `1px solid ${isDarkMode ? '#262626' : '#E0E0E0'}`
              }}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{item.degree}</h3>
                  <p className="font-medium transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{item.institution}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <span className="text-sm transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{item.year}</span>
                  <span 
                    className="px-3 py-1 text-sm rounded-full group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: isDarkMode ? '#262626' : '#E0E0E0', color: isDarkMode ? '#F5F5F5' : '#000000' }}
                  >
                    {item.gpa}
                  </span>
                </div>
              </div>
              
              <p className="leading-relaxed transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
