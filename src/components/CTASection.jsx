import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Optimize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Digital Workflow?
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          From enterprise-grade security to sub-100ms performance, we build software that respects your users and protects your data.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center">
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group px-8 py-4 border border-slate-500 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-800 hover:text-white hover:border-white transition-all duration-300 flex items-center">
            <Mail className="mr-2 w-5 h-5" />
            Contact Us
          </button>
        </div>

        <p className="mt-8 text-sm text-white/70">
          Typically replying within 24 hours. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default CTASection;