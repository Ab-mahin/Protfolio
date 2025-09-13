import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { About, Contact, Experience, Achievements, Hero, Navbar, Education, Portfolio } from "./components";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Listen for theme changes from navbar
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial theme check
    handleThemeChange();

    // Listen for class changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col lg:flex-row'>
        <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
        
        <main 
          className="flex-1 overflow-y-auto lg:ml-72 pb-20 lg:pb-0 transition-colors duration-300"
          style={{ 
            backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
            color: isDarkMode ? '#F5F5F5' : '#262626'
          }}
        >
          {activeSection === 'home' && <Hero />}
          {activeSection === 'about' && <About onNavigate={setActiveSection} />}
          {activeSection === 'portfolio' && <Portfolio />}
          {activeSection === 'achievements' && <Achievements />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;