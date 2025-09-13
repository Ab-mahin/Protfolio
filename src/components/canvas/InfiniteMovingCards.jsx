import { twMerge } from "tailwind-merge";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  isDarkMode = true
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={twMerge(
        "scroller relative z-20 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        isDarkMode ? "tech-scroller-container-dark" : "tech-scroller-container-light",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={twMerge(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-2 sm:gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className={twMerge(
              "relative w-[180px] max-w-full shrink-0 rounded-2xl border px-4 py-4 sm:w-[200px] sm:px-6 sm:py-5 md:w-[250px]",
              "transition-all duration-300 hover:scale-105 hover:shadow-lg group",
              isDarkMode ? "tech-card-dark" : "tech-card-light"
            )}
            key={item.name}>
            
            <div className="relative flex flex-col items-center justify-center text-center">
              {/* Icon container */}
              <div className="mb-4 p-3 rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback text */}
                <div 
                  className="w-12 h-12 flex items-center justify-center text-lg font-bold"
                  style={{ 
                    display: 'none',
                    color: isDarkMode ? '#F5F5F5' : '#000000'
                  }}
                >
                  {item.name.charAt(0)}
                </div>
              </div>
              
              {/* Tech name */}
              <span 
                className="text-sm font-semibold"
                style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}
              >
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
