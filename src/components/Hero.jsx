import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaLaptopCode, FaKeyboard } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si';

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for mouse movement
  const springConfig = { damping: 30, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform values for different parallax depths
  const parallax1X = useTransform(mouseXSpring, [-500, 500], [-30, 30]);
  const parallax1Y = useTransform(mouseYSpring, [-500, 500], [-30, 30]);
  const parallax2X = useTransform(mouseXSpring, [-500, 500], [-20, 20]);
  const parallax2Y = useTransform(mouseYSpring, [-500, 500], [-20, 20]);
  const parallax3X = useTransform(mouseXSpring, [-500, 500], [-10, 10]);
  const parallax3Y = useTransform(mouseYSpring, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Split title into spans for character animation
  const titleText = "Iniyan S";
  const titleChars = titleText.split('').map((char, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + i * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));

  // Tech stack floating badges
  const techItems = [
    { icon: <FaReact />,      label: 'React',       color: 'text-cyan-400',    border: 'border-cyan-500/40',    bg: 'bg-cyan-500/10',    position: 'top-[12%]  left-[7%]',   depth: 1, delay: 0    },
    { icon: <FaHtml5 />,      label: 'HTML5',       color: 'text-orange-400',  border: 'border-orange-500/40',  bg: 'bg-orange-500/10',  position: 'top-[8%]   right-[18%]', depth: 2, delay: 0.3  },
    { icon: <FaCss3Alt />,    label: 'CSS3',        color: 'text-blue-400',    border: 'border-blue-500/40',    bg: 'bg-blue-500/10',    position: 'top-[32%]  right-[8%]',  depth: 3, delay: 0.6  },
    { icon: <SiJavascript />, label: 'JavaScript',  color: 'text-yellow-400',  border: 'border-yellow-500/40',  bg: 'bg-yellow-500/10',  position: 'top-[58%]  left-[4%]',   depth: 2, delay: 0.9  },
    { icon: <FaNodeJs />,     label: 'Node.js',     color: 'text-green-400',   border: 'border-green-500/40',   bg: 'bg-green-500/10',   position: 'bottom-[28%] right-[6%]',depth: 1, delay: 1.2  },
    { icon: <SiMongodb />,    label: 'MongoDB',     color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', position: 'bottom-[14%] left-[14%]',depth: 3, delay: 1.5  },
    { icon: <FaGitAlt />,     label: 'Git',         color: 'text-red-400',     border: 'border-red-500/40',     bg: 'bg-red-500/10',     position: 'top-[18%]  right-[38%]', depth: 2, delay: 0.4  },
    { icon: <SiPostgresql />, label: 'PostgreSQL',  color: 'text-sky-400',     border: 'border-sky-500/40',     bg: 'bg-sky-500/10',     position: 'bottom-[38%] right-[16%]',depth: 3, delay: 1.8 },
    { icon: <FaLaptopCode />, label: '💻 Dev',      color: 'text-violet-400',  border: 'border-violet-500/40',  bg: 'bg-violet-500/10',  position: 'top-[68%]  right-[28%]', depth: 1, delay: 2.1  },
    { icon: <FaKeyboard />,   label: '⌨ Code',      color: 'text-pink-400',    border: 'border-pink-500/40',    bg: 'bg-pink-500/10',    position: 'top-[44%]  left-[18%]',  depth: 2, delay: 2.4  },
  ];

  const getParallaxStyle = (depth) => {
    switch (depth) {
      case 1: return { x: parallax1X, y: parallax1Y };
      case 2: return { x: parallax2X, y: parallax2Y };
      case 3: return { x: parallax3X, y: parallax3Y };
      default: return { x: parallax2X, y: parallax2Y };
    }
  };

  // Handle button clicks for smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center text-text-main relative bg-background"
    >
      {/* Decorative layer: overflow-hidden isolated here to prevent scroll paint artifact */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Animated Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:to-accent/10" />

        {/* Large Decorative Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(currentColor 1px, transparent 1px),
              linear-gradient(90deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Tech Stack Floating Badges */}
        {techItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position}`}
            style={getParallaxStyle(item.depth)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 + item.delay }}
          >
            <motion.div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${item.bg} ${item.border} shadow-lg`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
            >
              <span className={`text-lg ${item.color}`}>{item.icon}</span>
              <span className="text-xs font-semibold text-white/80 whitespace-nowrap">{item.label}</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-[40%] left-[30%] w-2 h-2 bg-primary rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ boxShadow: '0 0 20px var(--primary)' }}
        />
        <motion.div
          className="absolute top-[20%] right-[35%] w-1.5 h-1.5 bg-accent rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 15px var(--accent)' }}
        />
      </div>{/* end decorative layer */}

      {/* Main content with slight parallax */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left px-8 max-w-6xl mx-auto w-full"
        style={{ x: parallax3X, y: parallax3Y }}
      >
        {/* Left Side: Photo */}
        <motion.div
          className="hidden md:flex flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.img
            src="/hero.png"
            alt="Iniyan S"
            className="w-auto h-[35vh] md:h-[45vh] lg:h-[55vh] max-h-[400px] object-cover rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-center md:items-start z-10">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4 text-text-main leading-tight drop-shadow-sm">
            {titleChars}
          </h1>
          <motion.p
            className="hero-subtitle text-lg md:text-xl md:font-bold lg:text-4xl mb-10 text-text-secondary max-w-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Full Stack Developer

          </motion.p>
          <motion.div
            className="hero-buttons flex flex-col sm:flex-row gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px var(--card-border)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              View Projects
            </motion.button>
            <motion.a
              href="/resume/Iniyan S Resume latest.pdf"
              download="Iniyan_S_Resume.pdf"
              className="px-8 py-3 bg-card backdrop-blur-sm border border-border font-semibold rounded-lg text-text-main inline-flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--section-alt)',
                boxShadow: '0 20px 40px var(--card-border)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              ⬇ Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;