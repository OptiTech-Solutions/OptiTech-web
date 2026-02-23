import React from 'react';
import { Linkedin, Github, Users } from 'lucide-react';

const TeamMember = ({ name, role, tags, image }) => (
  <div className="group relative">
    <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800">
      {/* Placeholder Image / Gradient since we don't have real photos yet */}
      <div className={`w-full h-full bg-gradient-to-br ${image} group-hover:scale-105 transition-transform duration-500`}></div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{name}</h3>
        <p className="text-cyan-200 text-sm font-medium mb-3">{role}</p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-400 transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-purple-500 hover:text-white text-slate-400 transition-colors">
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => {
  const members = [
    {
      name: "Alex Rivera",
      role: "Lead Security Architect",
      tags: ["Cryptography", "Node.js"],
      image: "from-slate-700 to-slate-600" // Placeholder gradient
    },
    {
      name: "Sarah Chen",
      role: "Frontend Performance Lead",
      tags: ["React", "WebGL"],
      image: "from-slate-700 to-blue-900" 
    },
    {
      name: "Jordan Smith",
      role: "Full Stack Developer",
      tags: ["Python", "Docker"],
      image: "from-slate-700 to-purple-900"
    },
    {
      name: "Casey Taylor",
      role: "UI/UX Designer",
      tags: ["Figma", "Accessibility"],
      image: "from-slate-700 to-pink-900"
    }
  ];

  return (
    <section id="team" className="py-24 bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2">
              <Users size={20} />
              <span className="uppercase tracking-wider text-sm">The Collective</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold   ">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Builders</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-lg">
            We are a group of passionate student developers bridging the gap between academic theory and real-world production constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;