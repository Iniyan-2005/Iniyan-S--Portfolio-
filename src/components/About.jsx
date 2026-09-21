import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const delay = 0.3 + index * 0.1;
    const timer = setTimeout(() => {
      const controls = animate(count, skill.level, {
        duration: 1.2,
        ease: 'easeOut',
      });
      return controls.stop;
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-15%' }}
    >
      <div className="flex justify-between mb-1">
        <p className="font-medium text-text-main text-sm">{skill.name}</p>
        <p className="text-sm font-semibold" style={{ color: '#3b82f6' }}>
          <motion.span>{rounded}</motion.span>%
        </p>
      </div>
      <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: 'rgba(128,128,160,0.25)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(to right, #3b82f6, #60a5fa)' }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const About = () => {

  const programmingSkills = [
    { name: 'HTML, CSS, JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Java', level: 78 },
    { name: 'MERN Stack (MongoDB, Express, Node)', level: 75 },
    { name: 'C', level: 70 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'PostgreSQL', level: 50 },
  ];

  const softSkills = [
    'Bold Public Speaker',
    'Adept Leadership',
    'Team Worker',
    'Multi-Tasking',
    'Self-taught Dancer',
    'Amateur Football Player',
    'Self-taught Artist',
    'YouTuber (350+ subscribers)',
    'Video Editing',
  ];

  const languages = ['English', 'Tamil'];

  return (
    <section id="about" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-purple-100/40 to-cyan-100/30 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="mb-10 text-lg leading-relaxed text-text-body max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Profoundly self-motivated and aspiring CSE student at MNM Jain Engineering College, looking
          for opportunities to develop and design software where I can utilise and enhance my skills.
          Self-trained developer intrigued by <span className="text-primary font-semibold">Full Stack Development</span> and{' '}
          <span className="text-accent font-semibold">Responsive Web Development</span>.Previously worked as a
          Full-Stack Developer Intern at KreupAI Technologies LLC, contributing to end-to-end web
          application development across frontend and backend.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-text-main"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Programming Skills
            </motion.h3>
            <div className="space-y-5">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills + Languages */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-text-main"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Skills & Interests
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-text-body shadow-sm"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.h3
              className="text-xl font-bold mb-3 text-text-main"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Languages Spoken
            </motion.h3>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
