import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadCVButton = ({ isDarkMode = true, variant = "default" }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/cv/Mahin(CV).pdf';
      link.download = 'Ab_Mahin_CV.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset downloading state after a short delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error('Error downloading CV:', error);
      setIsDownloading(false);
    }
  };

  // Different button variants
  const getButtonStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: variant === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      fontSize: variant === 'small' ? '0.875rem' : '1rem',
      transition: 'all 0.3s ease',
      cursor: isDownloading ? 'not-allowed' : 'pointer',
      opacity: isDownloading ? 0.7 : 1,
      border: 'none',
      outline: 'none',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent'
    };

    if (variant === 'outline') {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isDarkMode ? '#F5F5F5' : '#000000',
        border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`,
      };
    } else if (variant === 'filled') {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isDarkMode ? '#F5F5F5' : '#000000',
        border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`,
      };
    } else {
      // default variant
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isDarkMode ? '#F5F5F5' : '#000000',
        border: `1px solid ${isDarkMode ? '#404040' : '#E0E0E0'}`,
      };
    }
  };

  const getHoverStyles = () => {
    if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        borderColor: isDarkMode ? '#666666' : '#CCCCCC',
      };
    } else if (variant === 'filled') {
      return {
        backgroundColor: 'transparent',
        borderColor: isDarkMode ? '#666666' : '#CCCCCC',
      };
    } else {
      return {
        backgroundColor: 'transparent',
        borderColor: isDarkMode ? '#666666' : '#CCCCCC',
      };
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className="transition-all duration-200 focus:outline-none focus:ring-0"
      style={getButtonStyles()}
      whileHover={!isDownloading ? { scale: 1.02 } : {}}
      whileTap={!isDownloading ? { scale: 0.98 } : {}}
      onMouseEnter={(e) => {
        if (!isDownloading) {
          const hoverStyles = getHoverStyles();
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (!isDownloading) {
          Object.assign(e.currentTarget.style, getButtonStyles());
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <FontAwesomeIcon 
        icon={faDownload} 
        className={`${isDownloading ? 'animate-spin' : ''}`}
        style={{ 
          width: variant === 'small' ? '14px' : '16px',
          height: variant === 'small' ? '14px' : '16px'
        }}
      />
      <span>
        {isDownloading ? 'Downloading...' : 'Download CV'}
      </span>
    </motion.button>
  );
};

export default DownloadCVButton;
