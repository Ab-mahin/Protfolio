import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Particles, Alert } from './canvas';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with current theme to prevent flash
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // fallback for SSR
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_gflgz7i",
        "template_phatd2j",
        {
          from_name: formData.name,
          to_name: "Mahin",
          from_email: formData.email,
          to_email: "mahin.cse7.bu@gmail.com",
          message: formData.message,
        },
        "9IU15HoquFp7hKt_W"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }}>
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Contact
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div 
              className="group transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Let's Connect</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? '#050505' : '#F5F5F5' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Email</p>
                    <p className="transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>mahin.cse7.bu@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? '#050505' : '#F5F5F5' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Location</p>
                    <p className="transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Faridpur, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg p-6 group transition-colors duration-300"
              style={{ backgroundColor: isDarkMode ? '#050505' : '#F5F5F5' }}
            >
              <h4 className="text-lg font-semibold mb-3 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>Quick Response</h4>
              <p className="leading-relaxed transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out through social media.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg p-8 group transition-colors duration-300"
            style={{ backgroundColor: isDarkMode ? '#050505' : '#F5F5F5' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                  style={{ 
                    backgroundColor: isDarkMode ? '#050505' : '#FFFFFF', 
                    color: isDarkMode ? '#F5F5F5' : '#000000', 
                    border: `1px solid ${isDarkMode ? '#262626' : '#E0E0E0'}`,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(170, 166, 195, 0.5)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(170, 166, 195, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = 'rgba(170, 166, 195, 0.3)';
                      e.target.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                  placeholder="Ab.Mahin"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                  style={{ 
                    backgroundColor: isDarkMode ? '#050505' : '#FFFFFF', 
                    color: isDarkMode ? '#F5F5F5' : '#000000', 
                    border: `1px solid ${isDarkMode ? '#262626' : '#E0E0E0'}`,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(170, 166, 195, 0.5)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(170, 166, 195, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = 'rgba(170, 166, 195, 0.3)';
                      e.target.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                  placeholder="mahin.cse7.bu@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 transition-colors" style={{ color: isDarkMode ? '#F5F5F5' : '#000000' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none focus:outline-none"
                  style={{ 
                    backgroundColor: isDarkMode ? '#050505' : '#FFFFFF', 
                    color: isDarkMode ? '#F5F5F5' : '#000000', 
                    border: `1px solid ${isDarkMode ? '#262626' : '#E0E0E0'}`,
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(170, 166, 195, 0.5)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(170, 166, 195, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = 'rgba(170, 166, 195, 0.3)';
                      e.target.style.boxShadow = '0 2px 4px -1px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (document.activeElement !== e.target) {
                      e.target.style.borderColor = isDarkMode ? '#262626' : '#E0E0E0';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 outline-none focus:outline-none focus:ring-0"
                style={{ 
                  backgroundColor: isDarkMode ? '#262626' : '#000000', 
                  color: isDarkMode ? '#F5F5F5' : '#FFFFFF',
                  border: `1px solid ${isDarkMode ? '#404040' : '#333333'}`,
                  boxShadow: isDarkMode ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#404040' : '#333333';
                  e.currentTarget.style.borderColor = isDarkMode ? '#aaa6c3' : '#666666';
                  e.currentTarget.style.boxShadow = isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#262626' : '#000000';
                  e.currentTarget.style.borderColor = isDarkMode ? '#404040' : '#333333';
                  e.currentTarget.style.boxShadow = isDarkMode ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;