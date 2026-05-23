import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {

  // Ordered: Present → Past (reverse chronological)
  const milestones = [
    {
      title: 'Full-Stack Developer Intern – KreupAI Technologies LLC',
      year: 'Dec 2025 – Jun 2026',
      description: 'Joined as a Full-Stack Developer Intern (remote, Dubai-based). Working on end-to-end web application development, building APIs and responsive UIs with the team.',
      icon: '🚀',
      current: true,
    },
    {
      title: 'Hackathons & Competitions',
      year: '2024 – 2025',
      description: 'Participated in Smart India Hackathon 2024, won Best Innovation Idea at SJIT, secured 2nd at Sathyabama National Conference, and reached finals at Ideathon2k25.',
      icon: '🏆',
    },
    {
      title: 'Self-Taught Full Stack Developer',
      year: '2023 – 2024',
      description: 'Self-trained in React, Node.js, MongoDB, Express.js (MERN stack), Java, HTML, CSS, and JavaScript through hands-on projects.',
      icon: '💻',
    },
    {
      title: 'Started B.E. CSE – MNM Jain Engineering College',
      year: '2023',
      description: 'Enrolled in Computer Science Engineering. Currently maintaining a CGPA of 8.2/10 (up to 5th semester).',
      icon: '🎓',
    },
    {
      title: '12th Grade – Chettinad Vidyashram',
      year: 'May 2023',
      description: 'Completed 12th Grade scoring 409/500. Developed interest in computers and decided to pursue engineering.',
      icon: '🏫',
    },
    {
      title: '10th Grade – Chettinad Vidyashram',
      year: 'Aug 2021',
      description: 'Completed 10th Grade with an outstanding score of 449/500, laying a strong academic foundation.',
      icon: '📚',
    },
  ];

  return (
    <section id="journey" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-violet-100/50 via-fuchsia-100/30 to-indigo-100/40 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Journey
        </motion.h2>
        <motion.p
          className="text-text-secondary text-sm mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Present → Past
        </motion.p>

        <div className="space-y-8 relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              className="flex items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-15%' }}
            >
              {/* Timeline dot — glowing for current role */}
              <motion.div
                className={`w-4 h-4 rounded-full z-10 mt-1.5 flex-shrink-0 shadow-lg ${
                  milestone.current
                    ? 'bg-accent ring-4 ring-accent/30 animate-pulse'
                    : 'bg-gradient-to-r from-accent to-primary'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
              />

              <motion.div
                className={`ml-6 rounded-xl p-4 w-full shadow-sm border ${
                  milestone.current
                    ? 'bg-primary/5 border-primary/30'
                    : 'bg-card border-card-border'
                }`}
                whileHover={{ y: -3, boxShadow: '0 10px 24px rgba(99,102,241,0.09)' }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xl">{milestone.icon}</span>
                  <h3 className="text-lg font-bold text-text-main leading-tight">{milestone.title}</h3>
                  {milestone.current && (
                    <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-accent font-semibold text-xs mb-2 ml-7">{milestone.year}</p>
                <p className="text-text-body text-sm ml-7">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;