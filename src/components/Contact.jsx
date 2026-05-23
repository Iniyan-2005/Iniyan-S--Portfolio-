import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
        }
      );
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  const inputClass =
    'w-full p-3 bg-card rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors duration-300 text-text-main placeholder-text-secondary';

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'iniyansoiciall@gmail.com',
      href: 'mailto:iniyansoiciall@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/siniyan2005',
      href: 'https://www.linkedin.com/in/siniyan2005',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/Iniyan-2005',
      href: 'https://github.com/Iniyan-2005',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 via-indigo-100/30 to-cyan-100/30 dark:from-transparent dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-15%' }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-text-body mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have a project or opportunity in mind? I'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl shadow-sm hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                <span className="text-2xl text-primary">{info.icon}</span>
                <div>
                  <p className="text-xs text-text-secondary font-medium">{info.label}</p>
                  <p className="text-text-main font-semibold text-sm mt-0.5">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {[
              { custom: 0, type: 'text', name: 'name', placeholder: 'Your Name' },
              { custom: 1, type: 'email', name: 'email', placeholder: 'Your Email' },
              { custom: 2, type: 'text', name: 'subject', placeholder: 'Subject' },
            ].map((field) => (
              <motion.div
                key={field.name}
                className="relative"
                custom={field.custom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10%' }}
                variants={fieldVariants}
              >
                <input
                  type={field.type}
                  name={field.name}
                  className={inputClass}
                  placeholder={field.placeholder}
                  required
                />
              </motion.div>
            ))}

            <motion.div
              className="relative"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={fieldVariants}
            >
              <textarea
                name="message"
                className={`${inputClass} resize-none`}
                placeholder="Your Message"
                rows="4"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-lg disabled:opacity-60"
              whileHover={{ scale: status === 'sending' ? 1 : 1.04, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className="text-green-500 font-medium text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-red-500 font-medium text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ❌ Failed to send. Please email me directly.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;