import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {

  const experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'KreupAI Technologies LLC',
      location: 'Dubai, UAE — Remote',
      period: 'Dec 2025 – Jun 2026',
      bullets: [
        'Contributed to end-to-end web application development across frontend and backend.',
        'Built responsive UI and developed & integrated backend APIs for core functionality.',
        'Participated in testing, debugging, and performance optimization of features.',
        'Collaborated with team to ensure smooth deployment and application reliability.',
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <section id="resume" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-100/50 via-blue-100/30 to-indigo-100/40 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Work Experience
        </motion.h2>

        {/* Work Experience */}
        {/* <motion.h3
          className="text-2xl font-bold mb-6 text-text-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

        </motion.h3> */}
        <div className="space-y-8 relative mb-14">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="flex items-start"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-15%' }}
              variants={itemVariants}
            >
              <motion.div
                className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full z-10 mt-1.5 flex-shrink-0 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
              />
              <div className="ml-6 bg-card border border-card-border rounded-xl p-5 w-full shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">{exp.title}</h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium">
                      {exp.period}
                    </span>
                    <p className="text-xs text-text-secondary mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 list-none">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;