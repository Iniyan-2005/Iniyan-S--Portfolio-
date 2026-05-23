import { useEffect, useState } from 'react';

/**
 * Custom hook for parallax effect based on mouse movement
 * @param {number} depth - How much the element should move (0-1)
 * @returns {{ x: number, y: number }} - Transform values
 */
export const useParallax = (depth = 0.5) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = (clientX / innerWidth - 0.5) * 2;
      const normalizedY = (clientY / innerHeight - 0.5) * 2;
      
      // Apply depth factor
      setPosition({
        x: normalizedX * depth * 50,
        y: normalizedY * depth * 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [depth]);

  return position;
};

/**
 * Custom hook for scroll-based parallax
 * @param {number} speed - Speed multiplier for parallax effect
 * @returns {number} - Y offset value
 */
export const useScrollParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export default useParallax;
