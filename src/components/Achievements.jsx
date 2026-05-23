import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { certificates } from '../data/certificates';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 via-purple-100/40 to-pink-100/30 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card p-6 bg-card rounded-2xl shadow-lg border border-card-border flex flex-col gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-10%' }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.13)' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{achievement.icon}</span>
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-text-body text-sm leading-relaxed">{achievement.description}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-500 hover:text-blue-400 underline underline-offset-2 mt-1 w-fit"
                >
                  View Proof →
                </a>
              )}
              {achievement.links && (
                <div className="flex gap-3 mt-1 flex-wrap">
                  {achievement.links.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-500 hover:text-blue-400 underline underline-offset-2"
                    >
                      View Proof {i + 1} →
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        {/* Certificates */}
        <motion.h3
          className="text-2xl font-bold mt-16 mb-6 text-text-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="flex items-center gap-4 bg-card border border-card-border rounded-xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(99,102,241,0.10)' }}
            >
              <span className="text-3xl flex-shrink-0">{cert.icon}</span>
              <div className="min-w-0">
                <p className="text-text-main font-semibold text-sm leading-snug">{cert.title}</p>
                <p className="text-text-secondary text-xs mt-0.5">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-400 underline underline-offset-2 mt-1 inline-block"
                  >
                    View Proof →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;