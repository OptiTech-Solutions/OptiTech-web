import React from 'react';

// SVG Icon Components (can be moved to a separate file later)
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0c.001-.06.003-.12.004-.18a12.02 12.02 0 00-3.382-8.944z" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CompetencyCard = ({ icon, title, items }) => (
  <div className="bg-dark-secondary p-8 rounded-xl border border-slate-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/10">
    {icon}
    <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <svg className="w-4 h-4 mr-3 text-status-ok flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Competencies  = () => {
  const competenciesData = [
    {
      icon: <ShieldIcon />,
      title: 'Security',
      items: ['Zero-Knowledge Architecture', 'OAuth 2.1 & OIDC', 'AES-256 Encryption', 'Automated Vulnerability Scanning'],
    },
    {
      icon: <ZapIcon />,
      title: 'Optimization',
      items: ['Performance Profiling', 'Algorithmic Efficiency', 'Latency Reduction', 'Core Web Vitals Mastery'],
    },
    {
      icon: <CodeIcon />,
      title: 'Development',
      items: ['React & TypeScript', 'React Native', 'Node.js & Python', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="competencies" className="bg-dark-primary py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-cyan tracking-wider uppercase">Our Expertise</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">Core Competencies</p>
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