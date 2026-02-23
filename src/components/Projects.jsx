import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, status, id, githubLink, externalLink }) => (
  // Updated card background to be slightly transparent to blend with gradient
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group flex flex-col h-full relative cursor-pointer">
    
    {/* The main card link - using absolute positioning to cover the whole card */}
    <Link to={`/project-scope/${id}`} className="absolute inset-0 z-0">
      <span className="sr-only">View {title}</span>
    </Link>

    {/* Project Preview / Placeholder */}
    <div className="h-48 bg-slate-900/80 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
      
      {/* Abstract decorative pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-500">
        <div className="w-24 h-24 border-2 border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute w-32 h-32 border border-purple-500 rounded-full"></div>
      </div>
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          status === 'Live' ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-amber-500/10 border-amber-500 text-amber-400'
        }`}>
          {status}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow pointer-events-none"> {/* Ensure clicks pass through container but content stays visible */}
      <div className="flex justify-between items-start mb-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
        </h3>
        
        {/* External Links - re-enabled pointer events for these specifically */}
        <div className="flex space-x-3 pointer-events-auto z-10 relative">
          <a href={githubLink} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={externalLink} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>
      
      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-800/50">
            {tag}
          </span>
        ))}
      </div>

       {/* View Case Study Button - purely visual now as the whole card is a link */}
       <div className="text-center w-full py-2 mt-auto text-sm font-medium text-cyan-400 border border-cyan-900/50 rounded group-hover:bg-cyan-900/20 transition-colors">
        View Case Study
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: 'beldepot', // Added ID for routing
      title: 'BelDepot System',
      description: 'A comprehensive booking and inventory management system developed for a beverage distribution company. Features real-time stock tracking, automated reorder alerts, and secure user authentication.',
      tags: ['Python', 'FastApi', 'React Native', 'Docker'],
      status: 'In Dev',
      githubLink:"https://github.com/OptiTech-Solutions/bel-depot-system",
      externalLink:"https://www.optitechsolutions.dev",
    },
    {
      id: 'care-connect', // Added ID for routing
      title: 'Care Connect',
      description: 'A simple platform for managers to track worker rating get customer feedback and improve customer performance.',
      tags: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
      status: 'In Dev',
      githubLink:"#",
      externalLink:"https://care-connect-flame.vercel.app/"
    }   
  ];

  return (
    // Updated background to match Hero gradient
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Bridging the gap between <span className="text-purple-400">complex security</span> requirements and <span className="text-cyan-400">intuitive user experiences</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* 'View More' Button */}
        <a href="https://github.com/OptiTech-Solutions">
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-slate-500 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium hover:border-slate-300">
            View Github Profile
          </button>
        </div>
        </a>

      </div>
    </section>
  );
};

export default Projects;