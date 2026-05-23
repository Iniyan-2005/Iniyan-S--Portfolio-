import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollTrigger = () => {
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    markers: false,
  });
};