import React from 'react';

const AppLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default AppLoader;
