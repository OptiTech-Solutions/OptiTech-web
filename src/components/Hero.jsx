import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden   ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Security Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400 animate-pulse"
              style={{ animationDelay: `${i * 0.05}s` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-17">
        {/* Main Headline */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              High-Integrity
            </span>
            <br />
            Software for{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Daily Optimization
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className={` hidden transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-l md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Privacy-First Productivity Collective specializing in{' '}
            <span className="text-cyan-400 font-semibold">enterprise-grade security</span> meets{' '}
            <span className="text-purple-400 font-semibold">seamless user experience</span>
          </p>
        </div>

        {/* Key Stats */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Zero-Knowledge Architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <span className="text-sm font-medium">Sub-100ms Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              <span className="text-sm font-medium">Enterprise Security Standards</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

             <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center">
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
             
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-2 text-slate-400">
            <span className="text-sm font-medium">Scroll to discover</span>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Code-like floating elements */}
      <div className="absolute top-1/2 right-1/10 opacity-30 text-cyan-400 font-mono text-sm animate-float">
        <span>{"{ privacy: 'first' }"}</span>
      </div>
      <div className="absolute bottom-1/8 left-1/10 opacity-30 text-purple-400 font-mono text-sm animate-float delay-500">
        <span>{"encrypt(data, AES-256)"}</span>
      </div>
    </section>
  );
};

export default Hero;