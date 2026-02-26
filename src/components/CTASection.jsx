import React, { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, defaultViewport } from '../animations/variants';

const CTASection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven: orbs pulse outward as you scroll in
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 1.1]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.0]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.4, 1.2]);
  // Content zooms in from slightly below
  const contentY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-slate-900 to-blue-900 py-24 relative overflow-hidden">
      {/* Scroll-driven animated orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          style={{ scale: orb1Scale }}
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl origin-center"
        />
        <motion.div
          style={{ scale: orb2Scale }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl origin-center"
        />
        <motion.div
          style={{ scale: orb3Scale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl origin-center"
        />
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

      {/* Content — entrance stagger + scroll-driven lift */}
      <motion.div
        style={{ y: contentY, scale: contentScale }}
        className="max-w-4xl mx-auto px-4 relative z-10 text-center"
      >
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={defaultViewport}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase"
          >
            Let's Build Together
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Optimize Your <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
              initial={{ opacity: 0, letterSpacing: '-0.05em' }}
              whileInView={{ opacity: 1, letterSpacing: '0em' }}
              viewport={defaultViewport}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Digital Workflow?
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            From enterprise-grade security to sub-100ms performance, we build software that respects your users and protects your data.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg transition-colors duration-300 flex items-center overflow-hidden"
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.08, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.96 }}
                className="group px-10 py-4 border border-slate-500 text-slate-300 rounded-full font-semibold text-lg hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-sm text-white/50">
            Typically replying within 24 hours. No spam, ever.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;