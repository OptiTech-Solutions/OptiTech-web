import React from 'react';

const TechStack = () => {
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
    <section className="bg-dark-secondary py-10 border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-widest">
          Powered By Enterprise Technology
        </h3>
      </div>

      <div className="relative flex overflow-hidden w-full group">
        <style>{`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
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
           {/* Render the items TWICE in one big flex container */}
           {[...tools, ...tools].map((tool, index) => (
             <div key={`${tool.name}-${index}`} className="flex flex-col items-center justify-center min-w-[150px] mx-8">
               <img 
                 src={tool.logo} 
                 alt={tool.name} 
                 className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300" 
               />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;