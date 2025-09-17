import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faCode, 
  faChartLine, 
  faTrophy, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { mySocials } from '../constants/documents';
import light from '../assets/light.svg';

const Navbar = ({ activeSection = "home", onNavigate }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    if (onNavigate) onNavigate(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { id: "home", name: "Home", icon: faHome },
    { id: "about", name: "About", icon: faUser },
    { id: "achievements", name: "Achievements", icon: faTrophy },
    { id: "experience", name: "Experience", icon: faChartLine },
    { id: "education", name: "Education", icon: faCode },
    { id: "contact", name: "Contact", icon: faEnvelope }
  ];

  const bottomNavItems = [
    { id: "home", name: "Home", icon: faHome },
    { id: "about", name: "About", icon: faUser },
    { id: "achievements", name: "Achievements", icon: faTrophy },
    { id: "contact", name: "Contact", icon: faEnvelope }
  ];

  const socialIconByName = (name) => {
    const key = (name || '').toLowerCase();
    if (key.includes('whats')) return faWhatsapp;
    if (key.includes('linked')) return faLinkedin;
    if (key.includes('insta')) return faInstagram;
    if (key.includes('face')) return faFacebook;
    if (key.includes('git')) return faGithub;
    if (key === 'x' || key.includes('twitter')) return faTwitter;
    return faGithub;
  };

  const socialLinks = (mySocials || []).map(s => ({
    name: s.name,
    url: s.href,
    icon: socialIconByName(s.name)
  }));

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Mobile Blur Header Row */}
      <div 
        className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-3"
        style={{ 
          backgroundColor: isDarkMode ? 'rgba(15, 15, 15, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          boxShadow: isDarkMode 
            ? '0 4px 24px 0 rgba(0, 0, 0, 0.2)' 
            : '0 4px 24px 0 rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Mobile Logo/Avatar - Inside Blur Row */}
        <motion.button
          className="w-8 h-8 rounded-full flex items-center justify-center group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(5, 5, 5, 0.8)' : 'rgba(0, 0, 0, 0.8)',
            border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.15)'}`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-bold text-xs" style={{ color: '#FFFFFF' }}>AM</span>
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="lg:hidden fixed left-0 top-0 h-full w-80 z-50 overflow-y-auto scrollbar-hide overflow-x-hidden"
        style={{ backgroundColor: isDarkMode ? '#262626' : '#FFFFFF' }}
      >
        <div className="p-6">
          {/* Mobile Header with Avatar */}
          <motion.button
            className="flex items-center space-x-3 mb-8 group hover:scale-105 transition-all duration-300 w-full text-left focus:outline-none focus:ring-0"
            onClick={() => handleNavigate('home')}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? '#050505' : '#000000' }}>
          <span className="font-bold text-xs" style={{ color: isDarkMode ? '#F5F5F5' : '#FFFFFF' }}>AM</span>
        </div>
        <div>
          <h1 className="font-semibold text-sm transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Ab Mahin</h1>
        </div>
      </motion.button>

          {/* Mobile Main Navigation */}
          <div className="flex-1 flex flex-col">
            <ul className="flex flex-col space-y-2 mb-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                onClick={() => handleNavigate(item.id)}
                    className="flex flex-row items-center justify-start space-x-3 px-3 py-2 text-left transition-colors duration-200 rounded focus:outline-none focus:ring-0 border-0 text-sm w-full"
                style={{
                  backgroundColor: activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent',
                  color: activeSection === item.id ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000'),
                  border: 'none',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.border = 'none';
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                  e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent';
                  e.currentTarget.style.color = activeSection === item.id ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000');
                }}
              >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
              </motion.button>
            </li>
          ))}
        </ul>

            {/* Mobile Projects Section */}
            <motion.div className="mb-6 transition-colors duration-300">
           <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000', opacity: 0.5 }}>Projects</h3>
          <ul className="space-y-2">
            <li>
              <motion.button
                onClick={() => handleNavigate('portfolio')}
                className="relative flex items-center space-x-2 transition-colors duration-200 rounded px-2 py-1 text-sm w-full outline-none focus:outline-none focus:ring-0"
                style={{ color: isDarkMode ? '#F5F5F5' : '#000000', backgroundColor: 'transparent', outline: 'none', boxShadow: 'none' }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                  e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                }}
              >
                <span className="text-xs font-mono px-1.5 py-0.5 rounded text-[10px]" style={{ backgroundColor: isDarkMode ? '#404040' : '#E0E0E0', color: isDarkMode ? '#F5F5F5' : '#000000' }}>Ab</span>
                <span className="text-sm">In Past</span>
                <span className="text-sm absolute right-2">↗</span>
              </motion.button>
            </li>
          </ul>
        </motion.div>

            {/* Mobile Online Section */}
            <motion.div className="mb-6 transition-colors duration-300">
             <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000', opacity: 0.5 }}>Online</h3>
          <ul className="space-y-2">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center space-x-2 transition-colors duration-200 rounded px-2 py-1 text-sm w-full outline-none focus:outline-none focus:ring-0"
                  style={{ color: isDarkMode ? '#F5F5F5' : '#000000', backgroundColor: 'transparent', outline: 'none', boxShadow: 'none' }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                    e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3 h-3" />
                  <span className="text-sm">{social.name}</span>
                  <span className="text-sm absolute right-2">↗</span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

            {/* Mobile Separator */}
             <div
              className="mt-4 mb-3 h-px"
               style={{
                 backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#404040' : '#E0E0E0'} 1px, transparent 1px)`,
                 backgroundSize: '8px 1px',
                 backgroundRepeat: 'repeat-x',
                 width: 'calc(100% + 3rem)',
                 marginLeft: '-1.5rem'
               }}
             />

            {/* Mobile Theme Toggle */}
            <motion.div className="flex justify-center items-center h-10">
        <motion.button 
          onClick={toggleTheme}
          className="transition-colors flex items-center justify-center"
          style={{ 
            color: isDarkMode ? '#F5F5F5' : '#000000',
            backgroundColor: 'transparent'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={light} alt="Toggle theme" className="w-7 h-7" style={{ filter: isDarkMode ? 'invert(1)' : 'invert(0)' }} />
        </motion.button>
      </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      {!isMobileMenuOpen && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 flex flex-row justify-around items-center py-3 px-4 z-50 border-t" style={{ 
          backgroundColor: isDarkMode ? '#262626' : '#FFFFFF',
          borderColor: isDarkMode ? '#404040' : '#E0E0E0'
        }}>
          {bottomNavItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="flex flex-col items-center justify-center space-y-1.5 px-2 py-2 text-center transition-all duration-200 focus:outline-none focus:ring-0 border-0 flex-1"
              style={{
                color: activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : (isDarkMode ? '#A0A0A0' : '#999999'),
                border: 'none',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.outline = 'none';
                e.target.style.border = 'none';
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className={`w-3.5 h-3.5 transition-all duration-200 ${activeSection === item.id ? 'scale-110' : ''}`}
                style={{
                  color: activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : (isDarkMode ? '#A0A0A0' : '#999999')
                }}
              />
              {activeSection === item.id && (
                <div 
                  className="w-5 h-0.5 rounded-full"
                  style={{ backgroundColor: isDarkMode ? '#F5F5F5' : '#000000' }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:block w-72 h-screen fixed left-0 top-0 flex flex-col z-50 overflow-y-auto scrollbar-hide" style={{ backgroundColor: isDarkMode ? '#262626' : '#FFFFFF' }}>
        <div className="p-6 h-full flex flex-col">
          {/* Desktop Header with Avatar */}
          <motion.button
            className="flex items-center space-x-3 mb-8 group hover:scale-105 transition-all duration-300 w-full text-left focus:outline-none focus:ring-0"
            onClick={() => handleNavigate('home')}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? '#050505' : '#000000' }}>
              <span className="font-bold text-xs" style={{ color: isDarkMode ? '#F5F5F5' : '#FFFFFF' }}>AM</span>
            </div>
            <div>
              <h1 className="font-semibold text-sm transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Ab Mahin</h1>
            </div>
          </motion.button>

          {/* Main Navigation */}
          <div className="flex-1 flex flex-col">
          <ul className="flex flex-col space-y-2 mb-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => handleNavigate(item.id)}
                  className="flex flex-row items-center justify-start space-x-3 px-3 py-2 text-left transition-colors duration-200 rounded focus:outline-none focus:ring-0 border-0 text-sm w-full"
                  style={{
                    backgroundColor: activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent',
                    color: activeSection === item.id ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000'),
                    border: 'none',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.border = 'none';
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                    e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = activeSection === item.id ? (isDarkMode ? '#F5F5F5' : '#000000') : 'transparent';
                    e.currentTarget.style.color = activeSection === item.id ? (isDarkMode ? '#050505' : '#FFFFFF') : (isDarkMode ? '#F5F5F5' : '#000000');
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Projects Section */}
          <motion.div className="mb-6 transition-colors duration-300">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000', opacity: 0.5 }}>Projects</h3>
            <ul className="space-y-2">
              <li>
                <motion.button
                  onClick={() => handleNavigate('portfolio')}
                  className="relative flex items-center space-x-2 transition-colors duration-200 rounded px-2 py-1 text-sm w-full outline-none focus:outline-none focus:ring-0"
                  style={{ color: isDarkMode ? '#F5F5F5' : '#000000', backgroundColor: 'transparent', outline: 'none', boxShadow: 'none' }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                    e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                  }}
                >
                  <span className="text-xs font-mono px-1.5 py-0.5 rounded text-[10px]" style={{ backgroundColor: isDarkMode ? '#404040' : '#E0E0E0', color: isDarkMode ? '#F5F5F5' : '#000000' }}>Ab</span>
                  <span className="text-sm">In Past</span>
                  <span className="text-sm absolute right-2">↗</span>
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Online Section */}
          <motion.div className="mb-6 transition-colors duration-300">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000', opacity: 0.5 }}>Online</h3>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center space-x-2 transition-colors duration-200 rounded px-2 py-1 text-sm w-full outline-none focus:outline-none focus:ring-0"
                    style={{ color: isDarkMode ? '#F5F5F5' : '#000000', backgroundColor: 'transparent', outline: 'none', boxShadow: 'none' }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#F0F0F0';
                      e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = isDarkMode ? '#F5F5F5' : '#000000';
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-3 h-3" />
                    <span className="text-sm">{social.name}</span>
                    <span className="text-sm absolute right-2">↗</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Separator */}
          <div
            className="mt-4 mb-3 h-px"
            style={{
              backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#404040' : '#E0E0E0'} 1px, transparent 1px)`,
              backgroundSize: '8px 1px',
              backgroundRepeat: 'repeat-x',
              width: 'calc(100% + 3rem)',
              marginLeft: '-1.5rem'
            }}
          />

          {/* Theme Toggle - Responsive positioning */}
          <motion.div 
            className="flex justify-center items-center h-12 mt-auto"
          >
            <motion.button 
              onClick={toggleTheme}
              className="transition-colors flex items-center justify-center p-2 rounded-lg"
              style={{ 
                color: isDarkMode ? '#F5F5F5' : '#000000',
                backgroundColor: 'transparent'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={light} 
                alt="Toggle theme" 
                className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" 
                style={{ filter: isDarkMode ? 'invert(1)' : 'invert(0)' }} 
              />
            </motion.button>
          </motion.div>
          </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;