import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { defaultViewport } from '../animations/variants';

const TechStack = () => {
  const sectionRef = useRef(null);

  // Scroll-driven: heading drifts upward, strip drifts downward (parallax depth)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const stripY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const stripScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  const tools = [
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
  ];

  return (
    <section ref={sectionRef} className="bg-dark-secondary py-14 border-slate-800 overflow-hidden">
      {/* Heading — entrance fade+scale + scroll-driven vertical drift */}
      <motion.div
        className="max-w-7xl mx-auto px-4 mb-10 text-center"
        style={{ y: headingY, opacity: headingOpacity }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-widest">
          Powered By Enterprise Technology
        </h3>
      </motion.div>

      {/* Marquee strip — scroll-driven subtle float */}
      <motion.div style={{ y: stripY, scale: stripScale }}>
        <div className="relative flex overflow-hidden w-full group">
          <style>{`
            @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .animate-scroll-custom {
              display: flex;
              width: fit-content;
              animation: infinite-scroll 25s linear infinite;
            }
            .animate-scroll-custom:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="animate-scroll-custom">
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[150px] mx-8"
                whileHover={{ scale: 1.25, y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16 }}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                />
                <motion.span
                  className="mt-2 text-xs text-slate-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;