import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { achievementCards } from '../constants/documents';

const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  isDarkMode
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={`rounded-lg relative overflow-hidden h-40 md:h-56 w-full transition-all duration-300 ease-out bg-[#0a0a0a] ${
      hovered !== null && hovered !== index ? 'blur-sm scale-[0.98]' : ''
    }`}
  >
    <img
      src={card.image}
      alt={card.title}
      className={`w-full h-full ${card.view ? 'object-contain p-3' : 'object-cover'}`}
    />
    <div
      className={`absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300 ${
        hovered === index ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="w-full flex items-center justify-between gap-3">
        <div className="text-xl md:text-2xl font-modern-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
        {card.view && (
          <a
            href={card.view}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full font-modern transition-transform duration-200 hover:scale-105 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            style={{ backgroundColor: '#F5F5F5', color: '#050505', outline: 'none', boxShadow: 'none' }}
          >
            View
          </a>
        )}
      </div>
    </div>
    {card.category && (
      <div className="absolute top-4 right-4">
        <span 
          className="px-3 py-1 text-xs font-medium rounded-full font-modern"
          style={{ backgroundColor: '#050505', color: '#F5F5F5' }}
        >
          {card.category}
        </span>
      </div>
    )}
  </div>
));

Card.displayName = "Card";

const Achievements = () => {
  const [hovered, setHovered] = useState(null);
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

  const achievements = achievementCards.map(a => ({
    title: a.title,
    image: a.src,
    view: a.view,
    category: a.category,
  }));

  return (
    <section 
      id="achievements" 
      className="py-16 px-8"
      style={{ 
        backgroundColor: isDarkMode ? '#000000' : '#F5F5F5',
        color: isDarkMode ? '#F5F5F5' : '#262626'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-modern-bold mb-6"
            style={{ color: isDarkMode ? '#F5F5F5' : '#262626' }}
          >
            Achievements
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto font-modern"
            style={{ color: isDarkMode ? '#F5F5F5' : '#262626' }}
          >
            Recognition and accomplishments that highlight my dedication to excellence in technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto md:px-8 w-full">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              card={achievement}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div 
            className="rounded-lg p-8 group hover:scale-105 transition-all duration-300" 
            style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF' }}
          >
            <h3 
              className="text-2xl font-modern-medium mb-4 group-hover:text-[#F5F5F5] transition-colors" 
              style={{ color: isDarkMode ? '#F5F5F5' : '#262626' }}
            >
              Continuous Learning
            </h3>
            <p 
              className="leading-relaxed max-w-2xl mx-auto group-hover:text-[#F5F5F5] transition-colors font-modern" 
              style={{ color: isDarkMode ? '#F5F5F5' : '#262626' }}
            >
              I believe in continuous improvement and staying updated with the latest technologies. 
              These achievements represent milestones in my journey of growth and learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
