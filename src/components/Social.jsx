import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/siniyan2005',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-600/10',
      label: 'LinkedIn',
      handle: 'in/siniyan2005',
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: 'https://github.com/Iniyan-2005',
      color: 'hover:text-gray-900 dark:hover:text-white',
      bg: 'hover:bg-gray-500/10',
      label: 'GitHub',
      handle: 'Iniyan-2005',
    },
    {
      id: 3,
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@dancetamil/shorts',
      color: 'hover:text-red-500',
      bg: 'hover:bg-red-500/10',
      label: 'YouTube',
      handle: '@dancetamil',
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      url: 'mailto:iniyansoiciall@gmail.com',
      color: 'hover:text-primary',
      bg: 'hover:bg-primary/10',
      label: 'Email',
      handle: 'iniyansoiciall@gmail.com',
    },
  ];

  return (
    <section id="social" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-violet-100/40 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto text-center px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-text-body mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Find me across the web — let's build something great together.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.id !== 4 ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-6 bg-card border border-card-border rounded-2xl shadow-sm w-44 transition-all duration-300 ${link.bg}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(99,102,241,0.13)' }}
              whileTap={{ scale: 0.97 }}
              aria-label={link.label}
            >
              <span className={`text-4xl text-text-secondary transition-colors duration-300 ${link.color}`}>
                {link.icon}
              </span>
              <div>
                <p className="font-bold text-text-main text-sm">{link.label}</p>
                <p className="text-text-secondary text-xs mt-0.5 break-all">{link.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;