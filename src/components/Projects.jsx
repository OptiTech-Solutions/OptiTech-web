import React, { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import careconnect from "../assets/careconnect.png";
import { fadeUp, zoomIn, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../animations/variants';

const ProjectCard = ({ title, description, tags, status, id, githubLink, externalLink, image, index }) => (
  <motion.div
    variants={index % 2 === 0 ? slideInLeft : slideInRight}
    whileHover={{
      y: -16,
      scale: 1.02,
      boxShadow: '0 40px 80px -20px rgba(6, 182, 212, 0.3)',
      transition: { type: 'spring', stiffness: 250, damping: 18 },
    }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-colors duration-300 group flex flex-col h-full relative cursor-pointer"
  >
    <Link to={`/project-scope/${id}`} className="absolute inset-0 z-0">
      <span className="sr-only">View {title}</span>
    </Link>
    <div className="h-48 bg-slate-900/80 relative overflow-hidden">
      {image ? (
        <img src={careconnect} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
            <div className="w-24 h-24 border-2 border-cyan-400 rounded-full animate-pulse" />
            <div className="absolute w-32 h-32 border border-purple-500 rounded-full" />
          </div>
        </>
      )}
      <div className="absolute top-4 right-4 z-20">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={defaultViewport}
          transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${status === 'Live' ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-amber-500/10 border-amber-500 text-amber-400'
            }`}
        >
          {status}
        </motion.span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow pointer-events-none">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <div className="flex space-x-3 pointer-events-auto z-10 relative">
          <a href={githubLink} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={externalLink} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-800/50">{tag}</span>
        ))}
      </div>
      <div className="text-center w-full py-2 mt-auto text-sm font-medium text-cyan-400 border border-cyan-900/50 rounded group-hover:bg-cyan-900/20 transition-colors">
        View Case Study
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven: blobs drift in opposite directions while scrolling through
  const blob1X = useTransform(scrollYProgress, [0, 1], [-100, 60]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blob2X = useTransform(scrollYProgress, [0, 1], [100, -60]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  // Cards container drifts upward slightly
  const cardsY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const projects = [
    {
      id: 'beldepot',
      title: 'BelDepot System',
      description: 'A comprehensive booking and inventory management system developed for a beverage distribution company. Features real-time stock tracking, automated reorder alerts, and secure user authentication.',
      tags: ['Python', 'FastApi', 'React Native', 'Docker'],
      status: 'In Dev',
      githubLink: "https://github.com/OptiTech-Solutions/bel-depot-system",
      externalLink: "https://www.optitechsolutions.dev",
    },
    {
      id: 'care-connect',
      title: 'Care Connect',
      description: 'A simple platform for managers to track worker rating, get customer feedback and improve performance.',
      tags: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
      status: 'In Dev',
      githubLink: "#",
      externalLink: "https://care-connect-flame.vercel.app/",
      image: "./assets/careconnect",
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Scroll-driven decorative blobs — move apart as you scroll */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-20 left-[-100px] w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-20 right-[-100px] w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Entrance animation for header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2 variants={fadeUp} className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</motion.h2>
          <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</motion.h3>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-slate-300 text-lg">
            Bridging the gap between <span className="text-purple-400">complex security</span> requirements and <span className="text-cyan-400">intuitive user experiences</span>.
          </motion.p>
        </motion.div>

        {/* Cards: entrance (alternate slide-in) + scroll-driven upward drift — combined on one element */}
        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <a href="https://github.com/OptiTech-Solutions">
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(148,163,184,0.2)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 border border-slate-500 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium hover:border-slate-300"
            >
              View Github Profile
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;