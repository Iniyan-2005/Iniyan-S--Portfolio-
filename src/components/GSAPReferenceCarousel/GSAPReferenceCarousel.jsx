import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';
import { projects as defaultProjects } from '../../data/projects';
import ProjectDetailModal from './ProjectDetailModal';
import './GSAPReferenceCarousel.css';

/**
 * GSAPReferenceCarousel
 * 
 * Recreates the exact motion design language of the Scrolltide Arc Carousel:
 * "Cards riding a very large circle with the focused one upright at its apex,
 *  each tilted tangent to the curve. Position and tilt fall out of a single
 *  rotation, so there is no per-card trigonometry anywhere in it."
 * 
 * Optimized with landscape 16:10 browser frames so website screenshots fit
 * cleanly with full headlines, diagrams, and controls visible without cropping.
 */
const GSAPReferenceCarousel = ({ items = defaultProjects }) => {
  const count = items.length;

  // Visual state managed by GSAP proxy object - avoids React re-renders during 60fps animation
  const proxy = useRef({ progress: 0 });
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Modal state
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // DOM Refs
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const innerRefs = useRef([]);
  const tweenRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  // Drag tracking refs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startProgressRef = useRef(0);
  const hasMovedRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Responsive geometry config tailored for landscape website screenshots
  const [config, setConfig] = useState({
    radius: 1020,
    cardWidth: 320,
    cardHeight: 215,
    stepAngle: 18.5,
    stageHeight: 650,
    infoTop: 295,
  });

  // Calculate responsive parameters based on viewport width
  useEffect(() => {
    const updateConfig = () => {
      const w = window.innerWidth;
      if (w >= 1440) {
        setConfig({
          radius: 1180,
          cardWidth: 350,
          cardHeight: 235,
          stepAngle: 17.5,
          stageHeight: 680,
          infoTop: 320,
        });
      } else if (w >= 1024) {
        setConfig({
          radius: 1020,
          cardWidth: 320,
          cardHeight: 215,
          stepAngle: 18.5,
          stageHeight: 650,
          infoTop: 295,
        });
      } else if (w >= 640) {
        setConfig({
          radius: 800,
          cardWidth: 260,
          cardHeight: 180,
          stepAngle: 21,
          stageHeight: 590,
          infoTop: 250,
        });
      } else {
        setConfig({
          radius: 540,
          cardWidth: 215,
          cardHeight: 150,
          stepAngle: 25,
          stageHeight: 520,
          infoTop: 215,
        });
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  /**
   * Helper: Calculates shortest modular distance between card index i and current float progress.
   * Handles seamless infinite wrapping across the circle boundary.
   */
  const getShortestOffset = useCallback((i, currentProgress) => {
    let diff = ((i - currentProgress) % count + count) % count;
    if (diff > count / 2) diff -= count;
    return diff;
  }, [count]);

  /**
   * Helper: Extracts a clean short display domain for the browser header
   */
  const getDisplayDomain = (project) => {
    if (project.liveDemo) {
      try {
        const url = new URL(project.liveDemo);
        return url.hostname.replace('www.', '');
      } catch {
        // fallback
      }
    }
    return `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app`;
  };

  /**
   * Renders the cards at the current proxy.progress position.
   * Directly sets GPU-accelerated transforms on the DOM elements without React re-rendering.
   */
  const render = useCallback(() => {
    const p = proxy.current.progress;
    const { radius, stepAngle } = config;

    for (let i = 0; i < count; i++) {
      const slotEl = cardRefs.current[i];
      const innerEl = innerRefs.current[i];
      if (!slotEl || !innerEl) continue;

      const offset = getShortestOffset(i, p);
      const absOffset = Math.abs(offset);
      const angle = offset * stepAngle;

      // Depth hierarchy: apex card is scale 1.12, neighbors scale down smoothly
      const scale = Math.max(0.5, 1.12 - absOffset * 0.13);

      // Opacity fades out towards the edges; beyond 4.2 items away is invisible
      const opacity = absOffset > 4.2 ? 0 : Math.max(0, 1 - Math.pow(absOffset / 4.0, 2.1));

      // Dim non-focused cards for photographic depth
      const brightness = Math.max(0.35, 1 - absOffset * 0.16);

      // Z-Index: cards nearest apex stack on top
      const zIndex = Math.round(100 - absOffset * 10);

      // Single rotation around the shared distant pivot point (50%, radius)
      // "Position and tilt fall out of a single rotation, so there is no per-card trigonometry anywhere in it."
      gsap.set(slotEl, {
        rotation: angle,
        transformOrigin: `50% ${radius}px`,
        zIndex: zIndex,
        visibility: opacity > 0.01 ? 'visible' : 'hidden',
      });

      gsap.set(innerEl, {
        scale: scale,
        opacity: opacity,
        filter: `brightness(${brightness})`,
      });

      if (absOffset < 0.5) {
        slotEl.classList.add('is-active');
      } else {
        slotEl.classList.remove('is-active');
      }
    }

    // Check if integer active index has changed
    const currentActiveInt = ((Math.round(p) % count) + count) % count;
    if (currentActiveInt !== activeIndexRef.current) {
      activeIndexRef.current = currentActiveInt;
      setActiveIndex(currentActiveInt);

      // Smooth slide-fade for the active title and description text
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', overwrite: 'auto' }
        );
      }
      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.38, delay: 0.04, ease: 'power2.out', overwrite: 'auto' }
        );
      }
    }
  }, [config, count, getShortestOffset]);

  // Initial render when config or items change
  useEffect(() => {
    render();
  }, [config, render]);

  /**
   * Smoothly animates carousel to a target card index using GSAP
   */
  const goTo = useCallback((targetIndex, customDuration = 0.75) => {
    if (tweenRef.current) tweenRef.current.kill();

    const currentP = proxy.current.progress;
    const diff = getShortestOffset(targetIndex, currentP);
    const targetP = currentP + diff;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 0.05 : customDuration;

    tweenRef.current = gsap.to(proxy.current, {
      progress: targetP,
      duration: duration,
      ease: 'power3.out',
      onUpdate: render,
      onComplete: () => {
        // Normalize progress value periodically to prevent float overflow
        const normalized = ((Math.round(proxy.current.progress) % count) + count) % count;
        proxy.current.progress = normalized;
        render();
      },
    });
  }, [count, getShortestOffset, render]);

  const handlePrev = useCallback(() => {
    if (tweenRef.current) tweenRef.current.kill();
    const target = Math.round(proxy.current.progress) - 1;
    tweenRef.current = gsap.to(proxy.current, {
      progress: target,
      duration: 0.65,
      ease: 'power2.out',
      onUpdate: render,
    });
  }, [render]);

  const handleNext = useCallback(() => {
    if (tweenRef.current) tweenRef.current.kill();
    const target = Math.round(proxy.current.progress) + 1;
    tweenRef.current = gsap.to(proxy.current, {
      progress: target,
      duration: 0.65,
      ease: 'power2.out',
      onUpdate: render,
    });
  }, [render]);

  /**
   * Pointer Drag & Swipe Handlers
   */
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (tweenRef.current) tweenRef.current.kill();

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    startProgressRef.current = proxy.current.progress;
    hasMovedRef.current = false;
    velocityRef.current = 0;
    lastTimeRef.current = performance.now();

    if (wrapperRef.current) {
      wrapperRef.current.classList.add('is-dragging');
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasMovedRef.current = true;
    }

    // Velocity calculation for flick inertia
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = (e.clientX - lastXRef.current) / dt;
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;
    }

    // Sensitivity factor: maps horizontal pixel movement to card units
    const sensitivity = config.cardWidth * 1.35;
    proxy.current.progress = startProgressRef.current - deltaX / sensitivity;
    render();
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (wrapperRef.current) {
      wrapperRef.current.classList.remove('is-dragging');
    }

    // If dragged with notable flick velocity, add momentum
    const v = velocityRef.current;
    let target = proxy.current.progress;

    if (Math.abs(v) > 0.4) {
      const inertiaDelta = -Math.sign(v) * Math.min(2, Math.max(1, Math.round(Math.abs(v) * 1.5)));
      target = Math.round(target + inertiaDelta);
    } else {
      target = Math.round(target);
    }

    const duration = Math.min(0.9, Math.max(0.5, 0.6 + Math.abs(v) * 0.2));

    tweenRef.current = gsap.to(proxy.current, {
      progress: target,
      duration: duration,
      ease: 'power3.out',
      onUpdate: render,
    });
  };

  /**
   * Clicking a card:
   * If clicked without dragging, animates clicked card to apex!
   */
  const handleCardClick = (e, index) => {
    e.stopPropagation();
    if (hasMovedRef.current) return; // Ignore clicks if user was dragging

    goTo(index, 0.75);
  };

  /**
   * Keyboard accessibility
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only respond if modal is not open
      if (isModalOpen) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isModalOpen]);

  // Clean up GSAP animations on unmount
  useEffect(() => {
    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const activeProject = items[activeIndex] || items[0];

  return (
    <div
      ref={wrapperRef}
      className="arc-carousel-wrapper w-full relative py-6 select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="region"
      aria-label="Arc Carousel of Projects"
      tabIndex={0}
    >
      {/* Curved Arc Stage */}
      <div
        ref={stageRef}
        className="arc-stage"
        style={{
          height: `${config.stageHeight}px`,
        }}
      >
        {/* Render all cards on the arc */}
        {items.map((project, index) => (
          <div
            key={project.id || index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="arc-card-slot cursor-pointer"
            style={{
              width: `${config.cardWidth}px`,
              height: `${config.cardHeight}px`,
              marginLeft: `-${config.cardWidth / 2}px`,
              top: '40px',
            }}
            onClick={(e) => handleCardClick(e, index)}
            role="button"
            tabIndex={index === activeIndex ? 0 : -1}
            aria-label={`Select ${project.title}`}
          >
            <div
              ref={(el) => (innerRefs.current[index] = el)}
              className="arc-card-inner"
            >
              {/* Browser Window Bar */}
              <div className="arc-browser-bar">
                <div className="arc-window-dots">
                  <span className="arc-dot arc-dot-red" />
                  <span className="arc-dot arc-dot-yellow" />
                  <span className="arc-dot arc-dot-green" />
                </div>
                <span className="arc-browser-url">
                  {getDisplayDomain(project)}
                </span>
                <span className="arc-card-counter">
                  {String(index + 1).padStart(2, '0')}/{String(count).padStart(2, '0')}
                </span>
              </div>

              {/* Media Preview Container */}
              <div className="arc-card-media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="arc-card-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="arc-card-fallback">
                    <span className="text-4xl font-bold opacity-30 mb-2">
                      {project.title.charAt(0)}
                    </span>
                    <span className="text-xs font-medium opacity-70">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Central Information Block nestled inside the concave cradle of the arc */}
        <div
          className="arc-info-block absolute left-0 right-0 px-4"
          style={{
            top: `${config.infoTop}px`,
          }}
        >
          {/* Navigation Title Row with < > Chevrons */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-3 max-w-2xl mx-auto w-full">
            <button
              onClick={handlePrev}
              className="arc-nav-btn shrink-0"
              aria-label="Previous project"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            <h3
              ref={titleRef}
              onClick={() => {
                setSelectedProject(activeProject);
                setIsModalOpen(true);
              }}
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white cursor-pointer hover:text-primary transition-colors text-center line-clamp-1 drop-shadow"
            >
              {activeProject?.title}
            </h3>

            <button
              onClick={handleNext}
              className="arc-nav-btn shrink-0"
              aria-label="Next project"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

          {/* Subtitle / Short Description */}
          <p
            ref={descRef}
            className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 max-w-lg mx-auto text-center line-clamp-2 mb-4 leading-relaxed px-4"
          >
            {activeProject?.description}
          </p>

          {/* Action Buttons: Pill Details + Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            <button
              onClick={() => {
                setSelectedProject(activeProject);
                setIsModalOpen(true);
              }}
              className="arc-pill-btn"
              aria-label="View project details"
            >
              <FaInfoCircle className="text-xs text-primary" /> Details
            </button>

            {activeProject?.liveDemo && (
              <a
                href={activeProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="arc-link-btn"
              >
                <FaExternalLinkAlt className="text-[10px]" /> Live Demo
              </a>
            )}

            {activeProject?.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="arc-link-btn"
              >
                <FaGithub className="text-xs" /> GitHub
              </a>
            )}

            {activeProject?.linkedin && (
              <a
                href={activeProject.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="arc-link-btn text-[#38bdf8] hover:text-[#7dd3fc]"
              >
                <FaLinkedin className="text-xs" /> Post
              </a>
            )}
          </div>

          {/* Dash Progress Indicators */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-xs mx-auto">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`arc-dash-indicator ${
                  idx === activeIndex
                    ? 'w-7 bg-primary'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
};

export default GSAPReferenceCarousel;
