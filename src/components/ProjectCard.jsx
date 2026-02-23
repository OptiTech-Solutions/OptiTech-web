import React from 'react';
import { Github, ExternalLink, Lock, Zap, Shield } from 'lucide-react';

const ProjectCard = ({ title, description, tags, status }) => (
  <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group flex flex-col h-full">
    {/* Project Preview / Placeholder */}
    <div className="h-48 bg-slate-900 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
      
      {/* Abstract decorative pattern since we don't have images yet */}
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

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <div className="flex space-x-3">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-900/30 rounded-full border border-cyan-800/50">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard; 