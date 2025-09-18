import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DownloadCVButton from "./DownloadCVButton";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true; // fallback for SSR
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100dvh-56px)] sm:min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#F5F5F5",
        color: isDarkMode ? "#F5F5F5" : "#262626",
      }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div
          className="rounded-xl p-8 md:p-10 border"
          style={{
            backgroundColor: isDarkMode ? "#050505" : "#FFFFFF",
            borderColor: isDarkMode ? "#1f1f1f" : "#e5e7eb",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <div
                className="w-16 h-16 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border mx-auto sm:mx-0"
                style={{
                  backgroundColor: isDarkMode ? "#0a0a0a" : "#F5F5F5",
                  borderColor: isDarkMode ? "#262626" : "#e5e7eb",
                }}
              >
                <span
                  className="text-lg sm:text-sm font-bold"
                  style={{ color: isDarkMode ? "#F5F5F5" : "#262626" }}
                >
                  AM
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-modern-bold mb-2 sm:mb-3 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: isDarkMode
                      ? "linear-gradient(to bottom, #fafafa, #d4d4d4)"
                      : "linear-gradient(to bottom, #262626, #737373)",
                  }}
                >
                  Hi, I'm Ab Mahin!
                </h1>
                <h2
                  className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-modern"
                  style={{
                    fontWeight: 400,
                    color: isDarkMode ? "#D1D5DB" : "#6B7280",
                  }}
                >
                  Problem Solver, and Tech Enthusiast.
                </h2>
                <p
                  className="text-xs sm:text-sm font-modern"
                  style={{ color: isDarkMode ? "#9CA3AF" : "#6B7280" }}
                >
                  (Ab-Mahin for non-native speakers)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-base font-modern-medium mb-4"
              style={{ color: isDarkMode ? "#D1D5DB" : "#6B7280" }}
            >
              Currently
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 shadow-lg shadow-blue-400/50 animate-pulse"></div>
                <p
                  className="text-sm font-modern"
                  style={{ color: isDarkMode ? "#D1D5DB" : "#6B7280" }}
                >
                  I want to become a{" "}
                  <span className="underline">Software Engineer</span> and
                  build technology that fulfills my dreams.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                <p
                  className="text-sm font-modern"
                  style={{ color: isDarkMode ? "#D1D5DB" : "#6B7280" }}
                >
                  Building <span className="underline">personal projects</span>{" "}
                  and learning new technologies on weekends.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2.5 flex-shrink-0 shadow-lg shadow-green-400/50 animate-pulse"></div>
                <p
                  className="text-sm font-modern"
                  style={{ color: isDarkMode ? "#D1D5DB" : "#6B7280" }}
                >
                  solve complex problems through programming and competitive
                  coding.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <DownloadCVButton isDarkMode={isDarkMode} variant="filled" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
