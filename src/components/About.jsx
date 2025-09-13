import { useRef, lazy, Suspense, useState, useEffect } from "react";
import { coding, csharp, dotnetPink, pic3, pic1 } from "../assets";
import Card from "../card/card";
import { CopyEmailButton, InfiniteMovingCards } from "./canvas";


import cplusplus from "../assets/tech/cplusplus.svg";
import dotnet from "../assets/tech/dotnet.svg";
import sqlite from "../assets/tech/sqlite.svg";
import sqlserver from "../assets/tech/microsoftsqlserver.svg";
import python from "../assets/tech/py.svg";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import javascript from "../assets/tech/javascript.png";
import tailwind from "../assets/tech/tailwind.png";
import docker from "../assets/tech/docker.png";
import html from "../assets/tech/html.png";




const LazyCustomeGlobe = lazy(() => import("./canvas/CustomeGlobe").then(m => ({ default: m.CustomeGlobe })));

const About = ({ onNavigate }) => {
  const grid2Container = useRef(null);
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

  const techItems = [
    { name: "React", image: reactjs },
    { name: "JavaScript", image: javascript },
    { name: "Python", image: python },
    { name: "C++", image: cplusplus },
    { name: ".NET", image: dotnet },
    { name: "SQLite", image: sqlite },
    { name: "SQL Server", image: sqlserver },
    { name: "CSS", image: css },
    { name: "Tailwind", image: tailwind },
    { name: "Docker", image: docker },
    { name: "HTML", image: html },
  ];

  return (
    <section 
      className="c-space" 
      id="about"
      style={{
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
        color: isDarkMode ? '#F5F5F5' : '#000000',
        minHeight: '100vh',
        paddingTop: '5rem',
        paddingBottom: '2rem'
      }}
    >
      {/* Intro Section - simple, text-first layout */}
      <div className="max-w-3xl mx-auto mb-16" style={{ paddingTop: '3rem' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-8" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Hi again, I'm Ab Mahin!</h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
          I am a Software Developer based in Bangladesh. I build products for web and mobile,
          focusing on performance, clear UX, and maintainable engineering.
        </p>
        <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
          Previously, I honed my skills in competitive programming and deepened my understanding of
          algorithms and data structures. I enjoy going end-to-end on projects and understanding how
          things work from the fundamentals up.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
          Beyond software, I like exploring new tools, learning continuously, and collaborating on
          meaningful work. Check out my projects and feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 mt-6">

        {/* Location Card */}
        <div className="xl:col-span-3 p-3 md:p-6 relative overflow-hidden" style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF' }}>
          {/* Background Globe */}
          <div className="absolute inset-0 opacity-100 pointer-events-none overflow-hidden">
            <Suspense fallback={null}>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-full scale-100 sm:scale-110 md:scale-120" style={{ transformOrigin: 'center' }}>
                  <LazyCustomeGlobe />
                </div>
              </div>
            </Suspense>
          </div>
          
          {/* Gradient Overlay - Top Section Only */}
          <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none" style={{ background: isDarkMode ? 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' : 'linear-gradient(to bottom, rgba(245,245,245,0.8) 0%, rgba(245,245,245,0.4) 50%, transparent 100%)' }}></div>

          <div className="relative z-0 flex flex-col justify-end min-h-[60px] xs:min-h-[80px] sm:min-h-[120px] md:min-h-[180px] lg:min-h-[220px] xl:min-h-[250px]">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ 
                backgroundImage: isDarkMode ? 'linear-gradient(to bottom right, #171717, #404040)' : 'linear-gradient(to bottom right, #E5E5E5, #D1D5DB)'
              }}>
                <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-xl font-bold" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Location</h3>
            </div>
            
            <p className="mb-2 text-xs md:text-base" style={{ color: isDarkMode ? '#D1D5DB' : '#333333' }}>
              Based in Bangladesh, open to remote work worldwide
            </p>
            
            
          </div>
        </div>

        
       
        
         {/* Skills & Technologies */}
         <div className="xl:col-span-3 p-6 relative overflow-hidden mt-16 mb-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
           <div className="relative z-0 pt-12 pb-8">
             <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Tech Stack</h3>
             <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
               I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
             </p>
             <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
               From frontend technologies like React and Vue.js to backend systems with Node.js and Python, I enjoy working across the full stack to create comprehensive solutions.
             </p>
             <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#D4D4D4' : '#333333' }}>
               I'm always exploring new technologies and frameworks to stay current with industry trends and deliver the best possible user experiences.
             </p>
             
             <div className="mt-8">
               <InfiniteMovingCards
                 items={techItems}
                 direction="left"
                 speed="slow"
                 pauseOnHover={true}
                 className=""
               />
             </div>
           </div>
         </div>


         
          {/* Call to Action */}
        <div className="group rounded-3xl p-[1px] shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden xl:col-span-3 max-w-xl md:max-w-2xl mx-auto" style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF' }}>
          <div className="rounded-3xl p-8 md:p-10 relative" style={{ backgroundColor: isDarkMode ? '#050505' : '#FFFFFF' }}>

            <div className="relative z-0 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                Ready to Start a Project?
              </h3>
              <p className="text-sm md:text-base mb-6" style={{ color: isDarkMode ? '#D1D5DB' : '#333333' }}>
                Let's collaborate and bring your ideas to life with clean code and great UX.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CopyEmailButton />
                <button
                  type="button"
                  aria-label="Navigate to contact section"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-transform duration-200 hover:scale-[1.02] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
                  style={{ 
                    backgroundColor: isDarkMode ? '#404040' : '#FFFFFF', 
                    color: isDarkMode ? '#F5F5F5' : '#000000', 
                    border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`,
                    WebkitTapHighlightColor: 'transparent' 
                  }}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('contact');
                      // ensure scroll to top of main content
                      requestAnimationFrame(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      });
                    } else {
                      const el = document.getElementById('contact');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        window.location.hash = '#contact';
                      }
                    }
                  }}
                  onFocus={(e) => { e.currentTarget.style.outline = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <span>Let’s Talk</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;