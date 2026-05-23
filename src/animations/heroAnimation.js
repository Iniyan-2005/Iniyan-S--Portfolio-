import gsap from 'gsap';

/**
 * Professional Cinematic Hero Animation
 * Uses overlapping timelines for premium feel
 * Duration: 1.2-1.6s (dramatic, hero only)
 */
export const heroAnimation = (container) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  // Cinematic entrance with overlapping animations
  tl.from('.hero-title span', {
    y: 120,
    opacity: 0,
    stagger: 0.04,
    duration: 1.1,
  })
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
  }, '-=0.6')  // Overlap for smooth flow
  .from('.hero-buttons', {
    y: 20,
    opacity: 0,
    duration: 0.6,
  }, '-=0.5')
  .from('.hero-image', {
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
  }, '-=1')
  .from('.hero-decoration', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
  }, '-=0.8');
  
  return tl;
};

/**
 * Hero text split animation for individual characters
 */
export const splitTextAnimation = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;
  
  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map(char => char === ' ' ? ' ' : `<span class="hero-char">${char}</span>`)
    .join('');
  
  gsap.from('.hero-char', {
    y: 100,
    opacity: 0,
    stagger: 0.03,
    duration: 0.8,
    ease: 'power3.out',
  });
};