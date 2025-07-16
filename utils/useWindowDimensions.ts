import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set initial size
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
