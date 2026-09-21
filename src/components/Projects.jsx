import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import { projects } from '../data/projects';

// Tech-color mapping for distinct tag colours
const techColors = {
  'React': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  'Next.js': 'bg-gray-800/10 text-gray-700 dark:text-gray-300 border-gray-500/20',
  'Node.js': 'bg-green-500/10 text-green-700 border-green-500/20',
  'MongoDB': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  'Firebase Auth': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
  'Firebase Hosting': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
  'Firebase': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
  'HTML': 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  'CSS': 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  'JavaScript': 'bg-yellow-400/10 text-yellow-700 border-yellow-400/20',
  'Figma': 'bg-purple-500/10 text-purple-700 border-purple-500/20',
  'Vercel': 'bg-black/10 text-gray-800 dark:text-gray-200 border-gray-400/20',
  'TMDB API': 'bg-teal-500/10 text-teal-700 border-teal-500/20',
  'OpenWeather API': 'bg-sky-500/10 text-sky-700 border-sky-500/20',
  'Zoho Catalyst': 'bg-red-500/10 text-red-700 border-red-500/20',
  'UI/UX Design': 'bg-pink-500/10 text-pink-700 border-pink-500/20',
  'Supabase': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  'NVIDIA Nemotron': 'bg-lime-500/10 text-lime-700 border-lime-500/20',
  'Razorpay API': 'bg-blue-600/10 text-blue-700 border-blue-600/20',
  'Bright Data': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  'Gemini AI': 'bg-violet-500/10 text-violet-600 border-violet-500/20',
  'Tailwind CSS': 'bg-sky-500/10 text-sky-600 border-sky-500/20',
};

const getTechClass = (tech) =>
  techColors[tech] || 'bg-primary/10 text-primary border-primary/20';

// Placeholder gradient colours for missing project images
const gradients = [
  'from-indigo-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-violet-500 to-pink-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-orange-500',
  'from-amber-500 to-yellow-400',
  'from-fuchsia-500 to-pink-500',
  'from-sky-500 to-indigo-500',
];

const ProjectCard = ({ project, index, isActive }) => {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`w-full h-full flex flex-col bg-card rounded-2xl shadow-xl border border-card-border overflow-hidden transition-all duration-300 ${isActive ? 'hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:-translate-y-2 pointer-events-auto' : 'pointer-events-none'
        }`}
    >
      {/* Image / Gradient placeholder */}
      <div className={`relative h-44 md:h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 pointer-events-none"
          />
        ) : (
          <div className="text-white/80 text-5xl font-bold select-none opacity-30">
            {project.title.charAt(0)}
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 overflow-y-auto">
        <h3 className="text-lg font-bold mb-2 text-text-main leading-tight">{project.title}</h3>
        <p className="text-text-body text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechClass(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-border">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              className="text-primary font-semibold text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              Live Demo →
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              className="text-text-secondary font-semibold text-sm hover:text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              GitHub →
            </motion.a>
          )}
          {project.linkedin && (
            <motion.a
              href={project.linkedin}
              className="text-blue-500 font-semibold text-sm hover:text-blue-400 hover:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin className="text-base" /> Post
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 via-pink-100/30 to-indigo-100/40 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-text-body mb-10 text-lg text-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A collection of things I've built — swipe or click to explore these full-stack apps and UI/UX prototypes.
        </motion.p>

        {/* Innovative 3D Carousel */}
        <div className="relative w-full flex flex-col items-center justify-center perspective-[1200px]">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm lg:max-w-md h-[460px] md:h-[480px] flex items-center justify-center z-10">
            {projects.map((project, index) => {
              // Calculate shortest distance in a circular array
              let relativeIndex = index - currentIndex;
              if (relativeIndex > projects.length / 2) relativeIndex -= projects.length;
              if (relativeIndex < -projects.length / 2) relativeIndex += projects.length;

              // Only render items within a certain range to optimize performance
              const isVisible = Math.abs(relativeIndex) <= 2;

              if (!isVisible && projects.length > 5) return null;

              const isActive = relativeIndex === 0;

              return (
                <motion.div
                  key={project.id}
                  className="absolute w-full h-full origin-center"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 1 - Math.abs(relativeIndex) * 0.12,
                    opacity: isActive ? 1 : 1 - Math.abs(relativeIndex) * 0.35,
                    x: `${relativeIndex * 50}%`,
                    rotateY: relativeIndex * -10,   // Subtle 3D rotation
                    z: -Math.abs(relativeIndex) * 60, // Move back in 3D space
                    zIndex: projects.length - Math.abs(relativeIndex),
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ transformStyle: 'preserve-3d', cursor: 'grab' }}
                  whileTap={{ cursor: 'grabbing' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -40) {
                      handleNext();
                    } else if (swipe > 40) {
                      handlePrev();
                    }
                  }}
                >
                  <ProjectCard project={project} index={index} isActive={isActive} />
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-6 mt-8 md:mt-10 z-20">
            <button
              onClick={handlePrev}
              className="p-3 md:p-4 rounded-full bg-card shadow-lg border border-card-border hover:bg-primary/10 text-primary transition-all hover:scale-110 active:scale-95"
              aria-label="Previous Project"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 md:p-4 rounded-full bg-card shadow-lg border border-card-border hover:bg-primary/10 text-primary transition-all hover:scale-110 active:scale-95"
              aria-label="Next Project"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 mt-6 z-20 flex-wrap justify-center">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-text-secondary/40 hover:bg-primary/60'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;