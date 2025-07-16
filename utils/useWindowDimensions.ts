import { useState, useEffect } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
  isDesktop: boolean;
}

function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
    isDesktop: false,
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
          isDesktop: window.innerWidth >= 1024,
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
