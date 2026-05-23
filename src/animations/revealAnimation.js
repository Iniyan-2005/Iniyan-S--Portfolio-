import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Hierarchy System
 * - Hero: dramatic (handled separately)
 * - Projects: medium emphasis
 * - About/Resume: subtle
 * - Footer: minimal
 */

// Standard section reveal (duration: 0.8-1.2s)
export const revealAnimation = (element, options = {}) => {
  const defaults = {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    start: 'top 85%',
  };
  
  const config = { ...defaults, ...options };
  
  gsap.from(element, {
    y: config.y,
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
    scrollTrigger: {
      trigger: element,
      start: config.start,
      toggleActions: 'play none none none',
    },
  });
};

// Subtle reveal for secondary sections (About, Resume)
export const subtleRevealAnimation = (element) => {
  gsap.from(element, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

// Minimal reveal for Footer
export const minimalRevealAnimation = (element) => {
  gsap.from(element, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'circ.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 95%',
      toggleActions: 'play none none none',
    },
  });
};

// Stagger reveal for lists/grids
export const staggerRevealAnimation = (elements, options = {}) => {
  const defaults = {
    y: 60,
    opacity: 0,
    stagger: 0.15, // Cinematic sweet spot
    duration: 0.9,
    ease: 'power3.out',
    start: 'top 80%',
  };
  
  const config = { ...defaults, ...options };
  
  gsap.from(elements, {
    y: config.y,
    opacity: config.opacity,
    stagger: config.stagger,
    duration: config.duration,
    ease: config.ease,
    scrollTrigger: {
      trigger: elements[0]?.parentElement || elements,
      start: config.start,
      toggleActions: 'play none none none',
    },
  });
};

// Text line reveal animation
export const textLineReveal = (container) => {
  const lines = container.querySelectorAll('.reveal-line');
  
  gsap.from(lines, {
    y: 60,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};