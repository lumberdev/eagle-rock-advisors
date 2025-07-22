import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="mx-auto mb-4 h-12 w-48 rounded bg-gray-200"></div>
        <p className="text-gray-500"></p>
      </div>
    </div>
  );
};

export default LoadingFallback;
