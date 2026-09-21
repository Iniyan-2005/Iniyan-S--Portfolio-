import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGlobe, FaMobileAlt, FaServer, FaDatabase, FaRocket, FaCog,
  FaBullseye, FaCode, FaComments, FaClock, FaStar, FaTags,
  FaLightbulb, FaPencilRuler, FaLaptopCode, FaCheckCircle,
  FaLinkedin, FaEnvelope, FaInstagram, FaLongArrowAltRight
} from 'react-icons/fa';

const FreelancerPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const services = [
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      title: "Web Development",
      desc: "Modern, responsive websites and web applications | React.js, Next.js, Modern UI/UX"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-accent" />,
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps that provide great user experience | Android, iOS, Cross-platform"
    },
    {
      icon: <FaServer className="text-4xl text-primary" />,
      title: "Backend Development",
      desc: "Robust APIs and backend systems built for performance and scale | Node.js, Express.js, REST APIs"
    },
    {
      icon: <FaDatabase className="text-4xl text-accent" />,
      title: "Database Integration",
      desc: "SQL/NoSQL databases, design, optimization and management | MongoDB, MySQL, PostgreSQL"
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: "Deployment & Support",
      desc: "Deployment, maintenance and ongoing support | AWS, Vercel, Netlify, Docker"
    },
    {
      icon: <FaCog className="text-4xl text-accent" />,
      title: "Custom Solutions",
      desc: "Tailored to your business needs to solve your unique challenges"
    }
  ];

  const reasons = [
    {
      icon: <FaBullseye className="text-3xl text-primary" />,
      title: "Focused on Your Goals",
      desc: "I understand your requirements and build solutions that create real impact"
    },
    {
      icon: <FaCode className="text-3xl text-accent" />,
      title: "Clean & Scalable Code",
      desc: "Well-structured, scalable and maintainable code for long-term success"
    },
    {
      icon: <FaComments className="text-3xl text-primary" />,
      title: "Clear Communication",
      desc: "Regular updates, transparency and quick responses"
    },
    {
      icon: <FaClock className="text-3xl text-accent" />,
      title: "Reliable & On Time",
      desc: "Committed to delivering quality work within the agreed timeline"
    },
    {
      icon: <FaStar className="text-3xl text-primary" />,
      title: "Client Satisfaction",
      desc: "I believe in building long-term relationships through trust, quality and results"
    },
    {
      icon: <FaTags className="text-3xl text-accent" />,
      title: "Flexible Pricing",
      desc: "Flexible & reasonable pricing based on project scope and complexity"
    }
  ];

  const steps = [
    { icon: <FaLightbulb />, title: "Understand Requirements" },
    { icon: <FaPencilRuler />, title: "Plan & Design" },
    { icon: <FaLaptopCode />, title: "Develop & Test" },
    { icon: <FaRocket />, title: "Deploy & Deliver" },
    { icon: <FaCog />, title: "Support & Improve" }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "JavaScript", "TypeScript",
    "PostgreSQL", "MongoDB", "Tailwind CSS", "Firebase", "Supabase",
    "Vercel", "Docker", "Git"
  ];

  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full text-text-main">

      {/* Section 1 - Hero */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1 px-3 rounded-full bg-card border border-border text-sm font-medium text-text-secondary mb-6"
            >
              Ideas + Code = Solutions
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Turning Your Ideas Into <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
            >
              I help businesses and individuals bring their ideas to life with modern, reliable and scalable software.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-card/50 border border-border p-6 rounded-2xl mb-10 max-w-2xl mx-auto italic text-text-secondary"
            >
              "Quality work. Clear communication. On-time delivery. That's my promise."
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a
                href="#cta-section"
                onClick={scrollToCTA}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Let's Build Together <FaLongArrowAltRight />
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-xl bg-card border border-border text-text-main font-medium hover:bg-border/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                View My Work <FaLongArrowAltRight />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary"
            >
              <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                <FaGlobe className="text-primary" /> Modern Websites
              </span>
              <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                <FaMobileAlt className="text-accent" /> Mobile Applications
              </span>
              <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                <FaServer className="text-primary" /> Business Software
              </span>
              <span className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full">
                <FaRocket className="text-accent" /> Cloud & Deployment
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-12 text-lg font-medium text-text-main tracking-wider uppercase opacity-70"
            >
              Your idea. My code. Real results.
            </motion.p>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Section 2 - My Freelancing Journey */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              From 'No' to My First 'Yes'
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 text-lg text-text-secondary leading-relaxed"
            >
              <motion.p variants={fadeInUp}>
                "I started my freelancing journey by reaching out to different businesses — making calls, visiting local businesses, approaching clinics, shops, and explaining how I could build software to solve their problems."
              </motion.p>
              <motion.p variants={fadeInUp}>
                "I heard a lot of 'No's', received very little response, and had conversations that never turned into projects."
              </motion.p>
              <motion.p variants={fadeInUp}>
                "I even visited a business owner in person and created a sample application specifically for their requirements. Unfortunately, I couldn't close that deal."
              </motion.p>
              <motion.p variants={fadeInUp}>
                "But I didn't stop. I kept approaching businesses, improving my skills, building demos, and learning how to communicate the value of software — not just how to write code."
              </motion.p>
              <motion.p variants={fadeInUp} className="text-2xl font-bold text-text-main italic pt-4">
                "And eventually... I got my first client."
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card border border-card-border rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <FaRocket /> My First Client Project
              </h3>

              <ul className="space-y-3 mb-8">
                {[
                  "Final version completed with all planned features",
                  "Testing completed successfully",
                  "Application handed over to the client",
                  "Client conducting their own testing",
                  "Open for feedback, refinements, and future improvements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-background rounded-xl p-5 border border-border">
                <h4 className="font-semibold mb-3">Project Involved:</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Understanding real business requirements",
                    "Designing features around actual users",
                    "Frontend & application development",
                    "Backend & database integration",
                    "Testing and debugging",
                    "Client feedback and communication",
                    "Deployment and production considerations"
                  ].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-card border border-border rounded-full text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Services I Offer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="bg-card border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="mb-6 p-4 bg-background inline-block rounded-xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Why Work With Me? */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Work With Me?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="bg-card border border-card-border p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="mt-1">{reason.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - My Development Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Development Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 relative max-w-5xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.5 } }
                }}
                className="relative z-10 flex flex-col items-center text-center max-w-[150px] w-full"
              >
                <div className="w-20 h-20 bg-card border-2 border-primary rounded-full flex items-center justify-center text-3xl text-primary mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-background border border-primary text-primary rounded-full flex items-center justify-center font-bold text-sm absolute -top-2 -right-2">
                  {index + 1}
                </div>
                <h3 className="font-bold text-text-main">{step.title}</h3>

                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-accent text-2xl">
                    <FaLongArrowAltRight className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Technologies I Work With */}
      <section className="py-20 bg-section-alt overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technologies I Work With
          </h2>
        </div>

        {/* Wrapping / Scrolling tech strip */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: (index % 5) * 0.1, duration: 0.4 } }
                }}
                className="px-6 py-3 bg-card border border-border hover:border-primary/50 text-text-secondary hover:text-primary transition-all rounded-full font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - CTA */}
      <section id="cta-section" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto bg-card border border-card-border rounded-3xl p-10 md:p-16 shadow-2xl text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4">
              Have an Idea or a Project?
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
              LET'S BUILD IT TOGETHER!
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Whether you're a startup, small business, or an individual with an idea — I'm here to help you turn it into a working product.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://www.linkedin.com/in/siniyan2005/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#004182] transition-colors"
              >
                <FaLinkedin className="text-2xl" /> DM me on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/itsinyancse/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <FaInstagram className="text-2xl" /> DM me on Instagram
              </a>
              <a
                href="mailto:iniyansofficiall@gmail.com"
                className="px-8 py-4 bg-card border-2 border-primary text-text-main hover:bg-primary hover:text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-colors"
              >
                <FaEnvelope className="text-2xl" /> Email Me
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 border-t border-border">
              <p className="font-semibold mb-4 text-text-secondary uppercase tracking-wider text-sm">Currently Open For</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2"><FaCheckCircle className="text-primary" /> Freelance Projects</span>
                <span className="flex items-center gap-2"><FaCheckCircle className="text-primary" /> Collaborations</span>
                <span className="flex items-center gap-2"><FaCheckCircle className="text-primary" /> Long-Term Opportunities</span>
                <span className="flex items-center gap-2"><FaCheckCircle className="text-primary" /> Interesting Ideas</span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-12 text-xl font-medium italic text-text-secondary">
              "No idea is too small! I'm just a message away."
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default FreelancerPage;
