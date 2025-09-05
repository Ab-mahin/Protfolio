import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLoader from "./components/AppLoader";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Experience = lazy(() => import("./components/Experience"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Main Portfolio Component
const Portfolio = () => (
  <div className='relative z-0 bg-primary mx-auto max-w-7xl'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Tech />
    <Works />
    <Experience />
    <Achievements />
    <div className='relative z-0'>
      <Contact />
    </div>
    <Footer />
  </div>
);

// 404 Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-300 mb-6">Page not found</p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-tertiary text-white px-6 py-2 rounded-lg hover:bg-tertiary/80 transition-colors"
      >
        Go Home
      </button>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;