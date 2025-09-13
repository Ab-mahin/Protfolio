import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { myProjects } from '../constants/documents';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });
  const [activeTab, setActiveTab] = useState('personal');

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

  // Filter projects by type
  const personalProjects = myProjects.filter(project => project.type === 'personal').map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    thumbnail: project.title.substring(0, 3).toUpperCase(),
    thumbnailBg: "bg-blue-600",
    thumbnailText: "text-white",
    status: project.status,
    liveLink: project.liveLink,
    view: project.view,
    tags: project.tags,
    logo: project.logo
  }));

  const commercialProjects = myProjects.filter(project => project.type === 'commercial').map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    thumbnail: project.title.substring(0, 3).toUpperCase(),
    thumbnailBg: "bg-red-600",
    thumbnailText: "text-white",
    status: project.status,
    liveLink: project.liveLink,
    view: project.view,
    tags: project.tags,
    logo: project.logo
  }));

  const currentProjects = activeTab === 'personal' ? personalProjects : commercialProjects;

  return (
    <div className="min-h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      {/* Left Content Area - Responsive width */}
      <div
        className="w-full sm:w-full md:w-full lg:w-2/5 xl:w-2/5 2xl:w-1/3 pl-1 sm:pl-2 md:pl-3 lg:pl-4 xl:pl-6 2xl:pl-8 pr-1 sm:pr-2 md:pr-3 lg:pr-2 xl:pr-3 2xl:pr-6 pt-16 sm:pt-16 md:pt-16 lg:pt-4 xl:pt-6 2xl:pt-12 pb-2 sm:pb-4 md:pb-6 lg:pb-4 xl:pb-6 2xl:pb-12 overflow-hidden lg:overflow-y-auto"
        style={{ backgroundColor: isDarkMode ? '#050505' : '#F5F5F5' }}
      >
        {/* Header */}
        <h1 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 2xl:mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Project</h1>
        
        {/* Segmented Control */}
        <div className="relative rounded-lg p-0.5 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 2xl:mb-6 w-full" style={{ backgroundColor: isDarkMode ? '#262626' : '#E0E0E0' }}>
          <div className="flex">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex-1 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-5 2xl:px-6 py-1 sm:py-1.5 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'personal'
                  ? ''
                  : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor: activeTab === 'personal' ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent',
                color: activeTab === 'personal' ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000')
              }}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex-1 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-5 2xl:px-6 py-1 sm:py-1.5 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'commercial'
                  ? ''
                  : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor: activeTab === 'commercial' ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent',
                color: activeTab === 'commercial' ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000')
              }}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-2 xl:space-x-2.5 2xl:space-x-3 p-1 sm:p-1.5 md:p-2 lg:p-1.5 xl:p-2 2xl:p-2.5 rounded-lg hover:opacity-80 transition-all duration-200 cursor-pointer group"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#262626' : '#E0E0E0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onClick={() => {
                if (project.view) {
                  window.open(project.view, '_blank');
                }
              }}
            >
              {/* Thumbnail/Logo */}
              <div className={`w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 lg:w-12 lg:h-7 xl:w-14 xl:h-8 2xl:w-16 2xl:h-10 rounded flex items-center justify-center text-xs font-bold ${project.logo ? 'bg-transparent' : project.thumbnailBg} ${project.thumbnailText} flex-shrink-0 overflow-hidden`}>
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="w-full h-full object-contain rounded"
                  />
                ) : (
                  project.thumbnail
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-1.5 xl:space-x-2 2xl:space-x-2.5">
                  <h3 className="font-medium text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm truncate" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>{project.title}</h3>
                  {project.status === 'active' && (
                    <div className="w-1 h-1 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-1 lg:h-1 xl:w-1.5 xl:h-1.5 2xl:w-2 2xl:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  )}
                </div>
                <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs mt-0.5 sm:mt-0.5 md:mt-0.5 lg:mt-0.5 xl:mt-0.5 2xl:mt-0.5 truncate" style={{ color: isDarkMode ? '#F5F5F5' : '#000000', opacity: 0.7 }}>{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-0.5 sm:gap-0.5 md:gap-0.5 lg:gap-0.5 xl:gap-0.5 2xl:gap-1 mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-0.5 xl:mt-1 2xl:mt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs px-1 sm:px-1 md:px-1.5 lg:px-1 xl:px-1.5 2xl:px-2 py-0.5 sm:py-0.5 md:py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-0.5 rounded"
                        style={{ backgroundColor: isDarkMode ? '#404040' : '#E0E0E0', color: isDarkMode ? '#F5F5F5' : '#000000' }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Main Area - Responsive width with dotted grid */}
      <div 
        className="w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5 2xl:w-2/3 relative pt-16 sm:pt-16 md:pt-16 lg:pt-4 xl:pt-6 2xl:pt-12"
        style={{
          '--dot-bg': isDarkMode ? 'black' : 'white',
          '--dot-color': isDarkMode ? '#6b6b6b' : '#9ca3af',
          '--dot-size': '1px',
          '--dot-space': '22px',
          background: 'linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), var(--dot-color)',
          minHeight: '100vh'
        }}
      >
        {/* Empty main content area with dotted grid pattern */}
      </div>
    </div>
  );
};

export default Portfolio;