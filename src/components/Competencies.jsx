import React from 'react';
import { Shield, Zap, Code, Check } from 'lucide-react';


const CompetencyCard = ({ icon: Icon, title, items, colorClass }) => (
  <div className="bg-dark-secondary p-8 rounded-xl border border-slate-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/10 group">
    <Icon className={`h-12 w-12 mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
    <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start">
          <Check className="w-5 h-5 mr-3 text-status-ok flex-shrink-0 mt-1" />
          <span className="text-text-secondary leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Competencies = () => {
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
    <section id="competencies" className="bg-dark-primary py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-cyan tracking-wider uppercase">Core Services</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">Our Expertise</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
            We combine enterprise-grade security with performance-obsessed development to build software that is both safe and fast.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competenciesData.map((comp) => (
            <CompetencyCard key={comp.title} {...comp} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Competencies