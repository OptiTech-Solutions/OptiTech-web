import React from 'react';
import { Shield, Zap, Code, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  fadeUp, flipIn, staggerContainer, staggerContainerSlow, slideInLeft, defaultViewport
} from '../animations/variants';

const CompetencyCard = ({ icon: Icon, title, items, colorClass }) => (
  <motion.div
    variants={flipIn}
    style={{ transformPerspective: 1000 }}
    whileHover={{
      y: -12,
      scale: 1.03,
      boxShadow: '0 30px 60px -10px rgba(6, 182, 212, 0.25)',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    }}
    className="bg-dark-secondary p-8 rounded-xl border border-slate-700/50 group cursor-default"
  >
    <motion.div
      initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={defaultViewport}
      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
    >
      <Icon className={`h-12 w-12 mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
    </motion.div>
    <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
          className="flex items-start"
        >
          <Check className="w-5 h-5 mr-3 text-status-ok flex-shrink-0 mt-1" />
          <span className="text-text-secondary leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Competencies = () => {
  const sectionRef = useRef(null);

  // Scroll-driven parallax: header drifts upward as you scroll through
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const competenciesData = [
    {
      icon: Code,
      title: 'Development',
      colorClass: 'text-brand-pink',
      items: ['React & TypeScript', 'React Native', 'Node.js & Python', 'CI/CD Pipelines'],
    },
    {
      icon: Shield,
      title: 'Security',
      colorClass: 'text-brand-cyan',
      items: ['Zero-Knowledge Architecture', 'OAuth 2.1 & OIDC', 'AES-256 Encryption', 'Automated Vulnerability Scanning'],
    },
    {
      icon: Zap,
      title: 'Optimization',
      colorClass: 'text-brand-purple',
      items: ['Performance Profiling', 'Algorithmic Efficiency', 'Latency Reduction', 'Core Web Vitals Mastery'],
    },
  ];

  return (
    <section ref={sectionRef} id="competencies" className="bg-dark-primary py-10 sm:py-20 overflow-hidden relative">

      {/* Scroll-driven bg glow — drifts upward while scrolling */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-cyan/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ENTRANCE: slides in on first view  |  SCROLL: drifts upward as you scroll through */}
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY, scale: headerScale }}
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2 variants={slideInLeft} className="text-base font-semibold text-brand-cyan tracking-wider uppercase">
            Core Services
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Our Expertise
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
            We combine enterprise-grade security with performance-obsessed development to build software that is both safe and fast.
          </motion.p>
        </motion.div>

        {/* Cards flip in on entrance; no scroll transform needed — hover is the interaction */}
        <motion.div
          className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {competenciesData.map((comp) => (
            <CompetencyCard key={comp.title} {...comp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Competencies;