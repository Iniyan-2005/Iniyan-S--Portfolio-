import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work Experience', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Academics', id: 'academics' },
    // { name: 'Journey', id: 'journey' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Social', id: 'social' },
    // { name: 'Contact', id: 'contact' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(links[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/90 backdrop-blur-lg shadow-lg border-b border-border'
        : 'bg-background/5 backdrop-blur-sm'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-xl font-bold whitespace-nowrap bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Iniyan S
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1 items-center">
          {links.map((link) => (
            <motion.li
              key={link.id}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <a
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3 py-2 rounded-lg block whitespace-nowrap transition-colors duration-200 ${activeSection === link.id
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary hover:text-primary'
                  }`}
              >
                {link.name}
              </a>
              {activeSection === link.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent mx-3"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-section-alt hover:bg-border transition-colors"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMoon className="text-text-main text-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaSun className="text-yellow-400 text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-section-alt"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <FaMoon className="text-text-main" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </motion.button>

          <motion.button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-text-main block"
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-main block"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-main block"
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 px-4 space-y-2">
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`block py-2 px-4 rounded-lg transition-colors ${activeSection === link.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary'
                      }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;