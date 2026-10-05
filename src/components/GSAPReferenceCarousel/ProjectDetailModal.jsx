import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const techColors = {
  'React': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Next.js': 'bg-gray-500/10 text-gray-300 border-gray-500/30',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/30',
  'MongoDB': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Firebase Auth': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'Firebase Hosting': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'Firebase': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'HTML': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'CSS': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'JavaScript': 'bg-yellow-400/10 text-yellow-300 border-yellow-400/30',
  'Figma': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Vercel': 'bg-white/10 text-gray-200 border-white/20',
  'TMDB API': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'OpenWeather API': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'Zoho Catalyst': 'bg-red-500/10 text-red-400 border-red-500/30',
  'UI/UX Design': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  'Supabase': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'NVIDIA Nemotron': 'bg-lime-500/10 text-lime-400 border-lime-500/30',
  'Razorpay API': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Bright Data': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'Gemini AI': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  'Tailwind CSS': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
};

const getTechClass = (tech) =>
  techColors[tech] || 'bg-primary/10 text-primary border-primary/30';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project || !mounted) return null;

  // Render via React Portal directly into document.body to escape any parent stacking contexts
  // and guarantee it renders in front of the fixed navbar with z-[9999]
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 pb-10 bg-black/85 backdrop-blur-md overflow-y-auto transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] my-auto overflow-y-auto bg-card dark:bg-[#121424] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-text-main p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Title */}
        <h3
          id="modal-title"
          className="text-2xl sm:text-3xl font-bold mb-3 text-text-main bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pr-8"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-body text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechClass(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all hover:-translate-y-0.5"
            >
              <FaGithub className="text-sm" /> GitHub Repo
            </a>
          )}
          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <FaLinkedin className="text-sm" /> LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDetailModal;
