import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Project Card Micro Hover (0.2-0.3s)
 * Subtle, professional interactions
 */
export const projectHover = (element) => {
  gsap.to(element, {
    scale: 1.02,
    y: -8,
    duration: 0.25,
    ease: 'power2.out',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  });
};

export const projectHoverOut = (element) => {
  gsap.to(element, {
    scale: 1,
    y: 0,
    duration: 0.25,
    ease: 'power2.out',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  });
};

/**
 * Project Cards Stagger Animation
 * Cinematic 0.15s stagger (sweet spot)
 */
export const projectCardsStagger = (containerSelector = '.projects-section') => {
  const cards = document.querySelectorAll('.project-card');
  
  if (cards.length === 0) return;
  
  gsap.from(cards, {
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: containerSelector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Project image reveal on scroll
 */
export const projectImageReveal = (imageElement) => {
  gsap.from(imageElement, {
    scale: 1.2,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: imageElement,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Tech stack tags animation
 */
export const techStackStagger = (container) => {
  const tags = container.querySelectorAll('.tech-tag');
  
  gsap.from(tags, {
    scale: 0,
    opacity: 0,
    stagger: 0.05,
    duration: 0.4,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};