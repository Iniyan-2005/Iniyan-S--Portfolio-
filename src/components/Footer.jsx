import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/siniyan2005', label: 'LinkedIn' },
    { icon: <FaGithub />,   href: 'https://github.com/Iniyan-2005',          label: 'GitHub'   },
    { icon: <FaYoutube />,  href: 'https://www.youtube.com/@dancetamil/shorts', label: 'YouTube'  },
    { icon: <FaEnvelope />, href: 'mailto:iniyansoiciall@gmail.com',         label: 'Email'    },
  ];

  return (
    <motion.footer
      className="py-10 bg-background-secondary border-t border-border relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
      viewport={{ once: true, margin: '-5%' }}
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-5">
        {/* Social Icons */}
        <div className="flex gap-6">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-xl"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
            Iniyan S
          </span>
          {' '}· Made with ❤️ using React & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;