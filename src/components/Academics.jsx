import React from 'react';
import { motion } from 'framer-motion';

const Academics = () => {

  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Misrimal Navajee Munoth Jain Engineering College',
      period: '2023 - 2027',
      score: 'Till 5th sem  CGPA is 8.2',
    },
    {
      degree: '12th Grade',
      institution: 'Chettinad Vidyashram',
      period: '2022 - 2023',
      score: '409 / 500',
    },
    {
      degree: '10th Grade',
      institution: 'Chettinad Vidyashram',
      period: '2021 - 2022',
      score: '449 / 500',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-background relative overflow-hidden">
      {/* Colorful gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-cyan-100/30 to-indigo-100/40 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Academics
        </motion.h2>
        <div className="space-y-8 relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="flex items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-15%' }}
            >
              <motion.div
                className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full z-10 mt-1.5 flex-shrink-0 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
              />
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1 text-text-main">{edu.degree}</h3>
                <h4 className="text-base text-text-body mb-3">{edu.institution}</h4>

                <div className="flex flex-wrap gap-3 mt-1">
                  {edu.period && (
                    <span className="text-primary font-semibold text-xs bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {edu.period}
                    </span>
                  )}
                  {edu.score && (
                    <span className="text-accent font-semibold text-xs bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      Marks: {edu.score}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;