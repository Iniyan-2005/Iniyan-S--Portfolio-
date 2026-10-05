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

const getDisplayDomain = (project) => {
  if (project?.liveDemo) {
    try {
      const url = new URL(project.liveDemo);
      return url.hostname.replace('www.', '');
    } catch {
      // fallback
    }
  }
  return project ? `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app` : '';
};

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

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl overflow-y-auto modal-backdrop-anim"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Showcase Card: 2-column layout on desktop, stacked on mobile */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-card dark:bg-[#0f1222] border border-card-border dark:border-white/15 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] text-text-main flex flex-col md:flex-row overflow-hidden modal-card-anim my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Top right on mobile and desktop) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-5 md:right-5 p-2.5 rounded-full bg-black/30 md:bg-white/10 hover:bg-black/50 md:hover:bg-white/20 text-white transition-colors cursor-pointer z-30 shadow-md"
          aria-label="Close project modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* LEFT COLUMN: Visual Preview & Direct CTA Links */}
        <div className="w-full md:w-[48%] flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-section-alt/60 dark:bg-black/30 border-b md:border-b-0 md:border-r border-border dark:border-white/10 shrink-0">
          <div>
            {/* Browser Preview Window Frame */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#090b14] mb-5">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#141829] border-b border-white/10 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-gray-400 truncate max-w-[170px]">
                  {getDisplayDomain(project)}
                </span>
                <span className="w-2.5 h-2.5" />
              </div>

              {/* Screenshot Media */}
              <div className="relative w-full aspect-video bg-black/60 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 to-primary/40 text-white text-4xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Links - Always visible on desktop without scrolling */}
          <div className="flex flex-col gap-2.5 pt-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <FaExternalLinkAlt className="text-xs" /> Launch Live Demo
              </a>
            )}

            <div className="flex items-center gap-2.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/15 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <FaGithub className="text-sm" /> GitHub Repo
                </a>
              )}

              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-medium text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <FaLinkedin className="text-sm" /> LinkedIn Post
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Project Details, Full Description, Tech Stack */}
        <div className="w-full md:w-[52%] flex flex-col justify-between p-6 sm:p-7 md:p-8 overflow-y-auto modal-custom-scrollbar">
          <div>
            {/* Title */}
            <div className="pr-8 mb-4">
              <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-accent font-semibold mb-1">
                Featured Project
              </span>
              <h3
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-bold text-text-main bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight"
              >
                {project.title}
              </h3>
            </div>

            {/* Description with sleek custom scrollbar */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary dark:text-gray-400 mb-2">
                About the Project
              </h4>
              <p className="text-text-body dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-border dark:border-white/10">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-secondary dark:text-gray-400 mb-3">
              Technologies & Tools
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
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDetailModal;
