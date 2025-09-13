import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {copy, copyDone} from '../../assets'
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });
  const email = "mahin.cse7.bu@gmail.com";

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileTap={{ scale: 0.98 }}
      className="relative border px-1 py-4 text-sm text-center rounded-full font-extralight w-[12rem] cursor-pointer overflow-hidden outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
      style={{ 
        backgroundColor: isDarkMode ? '#404040' : '#FFFFFF', 
        color: isDarkMode ? '#F5F5F5' : '#000000', 
        border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'} !important`,
        WebkitTapHighlightColor: 'transparent',
        boxShadow: 'none !important'
      }}
      onFocus={(e) => {
        e.currentTarget.style.setProperty('outline', 'none', 'important');
        e.currentTarget.style.setProperty('box-shadow', 'none', 'important');
        e.currentTarget.style.setProperty('border', `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`, 'important');
      }}
      onBlur={(e) => {
        e.currentTarget.style.setProperty('border', `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`, 'important');
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.setProperty('border', `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`, 'important');
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.setProperty('border', `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`, 'important');
      }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img 
              src={copyDone} 
              className="w-5" 
              alt="copy Icon" 
              style={{ 
                filter: isDarkMode ? 'none' : 'invert(1)',
                opacity: isDarkMode ? 1 : 0.8
              }}
            />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img 
              src={copy} 
              className="w-5" 
              alt="copy icon" 
              style={{ 
                filter: isDarkMode ? 'none' : 'invert(1)',
                opacity: isDarkMode ? 1 : 0.8
              }}
            />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;