import React, { useRef } from 'react';
import { Search, ShieldCheck, Zap, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight, staggerContainerSlow, defaultViewport } from '../animations/variants';

const stepVariant = {
  hidden: { opacity: 0, x: -80, scale: 0.9 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
};

const Step = ({ icon: Icon, title, description, stepNumber, isLast }) => (
  <motion.div variants={stepVariant} className="relative flex group mb-0">
    {!isLast && (
      <motion.div
        className="absolute left-8 top-16 bottom-0 w-0.5 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        style={{ backgroundColor: '#cbd5e1' }}
      />
    )}
    <motion.div
      className="relative flex-shrink-0 z-10 w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm group-hover:border-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300"
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Icon className="w-8 h-8 text-slate-500 group-hover:text-cyan-600 transition-colors duration-300" />
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-slate-100 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white transition-all duration-300"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={defaultViewport}
        transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
      >
        {stepNumber}
      </motion.div>
    </motion.div>
    <div className="ml-8 pb-16 pt-2">
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 leading-relaxed max-w-xl">{description}</p>
    </div>
  </motion.div>
);

const Methodology = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven: left column pin-like upward drift  
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  // Right column drifts upward faster (parallax depth)
  const rightY = useTransform(scrollYProgress, [0, 1], [100, -30]);

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Threat Modeling',
      description: 'We start by understanding not just the features you need, but the data you handle. We create a privacy-first architecture that minimizes liability and maximizes user trust from Day 1.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Development Cycle',
      description: 'Code is written with strict typing and automated security linters. Every commit is scanned for vulnerabilities before it even reaches the testing environment.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'We obsess over the Critical Rendering Path. By optimizing assets, lazy-loading components, and minimizing bundle sizes, we target sub-100ms interaction times.',
    },
    {
      icon: Rocket,
      title: 'Audited Deployment',
      description: "Launch isn't the finish line. We deploy with strict Content Security Policies (CSP), automated backups, and real-time monitoring to ensure long-term integrity.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#ecf4ff] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column — entrance slide-in + scroll-driven depth drift */}
          <motion.div
            style={{ y: leftY, scale: leftScale }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={defaultViewport}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                The OPTITech Process
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Engineering with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                  Deliberate Intent
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just write code; we architect solutions. Our methodology ensures that "fast" never comes at the expense of "safe."
              </p>
              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center space-x-2 text-cyan-700 font-semibold hover:text-cyan-500 transition-colors group"
              >
                <span>Start a Project</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column — entrance cascade + scroll-driven upward drift (faster) */}
          <motion.div
            style={{ y: rightY }}
            className="mt-8 lg:mt-0"
          >
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {steps.map((step, index) => (
                <Step
                  key={index}
                  {...step}
                  stepNumber={index + 1}
                  isLast={index === steps.length - 1}
                />
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;