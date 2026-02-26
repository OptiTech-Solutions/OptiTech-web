import React, { useRef } from 'react';
import { Linkedin, Github, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../animations/variants';

const memberVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.85, rotateY: -15 },
  visible: {
    opacity: 1, y: 0, scale: 1, rotateY: 0,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
};

const TeamMember = ({ name, role, tags, image, linkedin, github }) => (
  <motion.div
    variants={memberVariant}
    style={{ transformPerspective: 800 }}
    whileHover={{
      y: -14,
      scale: 1.04,
      rotateY: 3,
      boxShadow: '0 30px 60px -15px rgba(167, 139, 250, 0.3)',
      transition: { type: 'spring', stiffness: 250, damping: 16 },
    }}
    className="group relative cursor-default"
  >
    <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800">
      <div className={`w-full h-full bg-gradient-to-br ${image} group-hover:scale-105 transition-transform duration-700`} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{name}</h3>
        <p className="text-cyan-200 text-sm font-medium mb-3">{role}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={defaultViewport}
              transition={{ type: 'spring', stiffness: 200, delay: 0.4 + i * 0.06 }}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
          <motion.a href={linkedin} whileHover={{ scale: 1.2, rotate: -5 }} className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-400 transition-colors">
            <Linkedin size={16} />
          </motion.a>
          <motion.a href={github} whileHover={{ scale: 1.2, rotate: 5 }} className="p-2 rounded-full bg-slate-800 hover:bg-purple-500 hover:text-white text-slate-400 transition-colors">
            <Github size={16} />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven: blob 1 drifts right+up, blob 2 drifts left+down
  const blob1X = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob2X = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  // Grid drifts upward gently as you scroll
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -30]);

  const members = [
    {
      name: "Barabara Sackey",
      role: "Data and Security Engineer",
      tags: ["Data Privacy", "Development", "Security"],
      image: "from-slate-700 to-slate-600",
      linkedin: "https://www.linkedin.com/in/barbara-sackey-536316377/",
      github: "https://github.com/Kiekie-28",
    },
    {
      name: "Grant Boamah",
      role: "Frontend Engineer",
      tags: ["React", "React Native", "Figma"],
      image: "from-slate-700 to-blue-900",
      linkedin: "https://www.linkedin.com/in/emmanuel-grant-boamah-19ab8626a/",
      github: "https://github.com/GranTech-hub",
    },
    {
      name: "Jeffrey Eshun",
      role: "Backend Engineer",
      tags: ["Python", "Docker"],
      image: "from-slate-700 to-purple-900",
      linkedin: "https://www.linkedin.com/in/jeffrey-eshun-38b523347/",
      github: "https://github.com/1of1jey",
    },
    {
      name: "Prince Amuzu",
      role: "Fullstack Engineer",
      tags: ["MERN Stack", "Team Leadership"],
      image: "from-slate-700 to-pink-900",
      linkedin: "https://www.linkedin.com/in/prince-elikplim-amuzu/",
      github: "https://github.com/eliamuzu",
    },
  ];

  return (
    <section ref={sectionRef} id="team" className="py-24 bg-dark-primary relative overflow-hidden">
      {/* Scroll-driven blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <motion.div style={{ x: blob2X, y: blob2Y }} className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — entrance: slide from opposite sides */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          variants={staggerContainer(0.3, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div variants={slideInLeft}>
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2">
              <Users size={20} />
              <span className="uppercase tracking-wider text-sm">The Collective</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Builders</span>
            </h2>
          </motion.div>
          <motion.p variants={slideInRight} className="max-w-md text-slate-400 text-lg">
            We are a group of passionate student developers bridging the gap between academic theory and real-world production constraints.
          </motion.p>
        </motion.div>

        {/* Grid — entrance: 3D flip-in cascade  |  scroll-driven: floats upward */}
        <motion.div style={{ y: gridY }}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer(0.18, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
          >
            {members.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;