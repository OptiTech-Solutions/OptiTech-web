import React from 'react';
import { ArrowLeft, AlertTriangle, Lightbulb, Users, CheckCircle, BarChart } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  'beldepot': {
    title: 'BelDepot System',
    subtitle: 'Digitizing Beverage Distribution',
    stats: [
      { label: 'Efficiency Gain', value: '40%' },
      { label: 'Errors Reduced', value: '95%' },
      { label: 'Tech Stack', value: 'Python / React' },
    ],
    sections: { 
      problem: "The client was facing significant revenue leaks due to inventory fraud and distribution mishandling. Without a centralized tracking system, product distribution was mismatched, leading to stock shortages in high-demand areas while surplus inventory sat elsewhere, creating opportunities for undocumented shrinkage.",
      process: "We adopted an Agile workflow with bi-weekly sprints. We started by mapping the existing manual workflow to identify pain points. We shadowed the warehouse team to understand the physical constraints of their scanning process.",
      solution: "We built a centralized FastApi backend with a React Native mobile app for warehouse staff. We implemented QR code scanning for instant stock updates and a web dashboards for managers to view analytics. The system now syncs in real-time.",
    }
  },
  'care-connect': {
    title: 'Care Connect',
    subtitle: 'Empowering Workforce Performance',
    stats: [
      { label: 'User Rating', value: '4.8/5' },
      { label: 'Feedback Loop', value: '-2 Days' },
      { label: 'Tech Stack', value: 'Node / React' },
    ],
    sections: {
      problem: "Managers lacked a centralized way to track worker ratings and gather consistent customer feedback. Performance reviews were subjective, based on anecdotal evidence rather than data, leading to lower employee morale.",
      process: "We conducted user interviews with both managers and field workers. We focused on creating a mobile-first design for workers to easily view their stats, while building a robust desktop dashboard for management reporting.",
      solution: "A responsive React web application backed by Node.js and PostgreSQL. We implemented an automated feedback collection system via SMS/Email after service completion, which feeds directly into live worker performance scorecards.",
    }
  }
};

const ProjectCaseStudy = () => {
  const { id } = useParams();
  const caseStudy = projectData[id];

  // Fallback for invalid IDs
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-cyan-400 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 sm:px-12 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
            {/* Back Navigation */}
           <Link to="/" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            {caseStudy.subtitle}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-20 space-y-24">
        
        {/* 1. The Challenge */}
        <section className="relative group">
          <div className="absolute -left-4 md:-left-12 top-0 p-3 bg-red-500/10 rounded-lg text-red-400">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            The Problem
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-slate-400">
            <p className="leading-relaxed">{caseStudy.sections.problem}</p>
          </div>
        </section>

        {/* 2. The Process (How we worked) */}
        <section className="relative">
          <div className="absolute -left-4 md:-left-12 top-0 p-3 bg-purple-500/10 rounded-lg text-purple-400">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            How We Worked
          </h2>
          <div className="bg-slate-800/30 border-l-4 border-purple-500 p-6 rounded-r-xl">
             <p className="text-lg leading-relaxed">{caseStudy.sections.process}</p>
          </div>
        </section>

        {/* 3. The Solution */}
        <section className="relative">
          <div className="absolute -left-4 md:-left-12 top-0 p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Lightbulb size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">
            The Solution
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700/50 bg-slate-800/20 p-6 rounded-xl hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle size={20} className="mr-3 text-cyan-400" />
                Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Separated concerns using a Microservices approach. Used Docker for consistent deployment across dev and prod environments.
              </p>
            </div>
            
            <div className="border border-slate-700/50 bg-slate-800/20 p-6 rounded-xl hover:border-cyan-500/50 transition-colors">
               <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <BarChart size={20} className="mr-3 text-cyan-400" />
                Key Features
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
               - Real-time WebSockets inventory updates<br/>
               - Offline mode for warehouse scanners<br/>
               - Automated invoice generation PDF
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg leading-relaxed">{caseStudy.sections.solution}</p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="border-t border-slate-800 pt-16 text-center">
           <h3 className="text-2xl text-white font-bold mb-6">Create something similar?</h3>
           <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-900/20">
             Contact Us
           </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectCaseStudy;