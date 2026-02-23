import React, { useState } from 'react';
import { Mail, MessageSquare, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 mt-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 relative z-10">
        
        {/* Left Column: Context & Contact Info */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Your Vision
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Whether you need an enterprise-grade platform or a performance audit, our collective is ready to deploy.
            </p>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email Us</h3>  
                  <a href="mailto:elik.amuzu@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors block mt-1">
                    elik.amuzu@gmail.com
                  </a>
                  <p className="text-slate-600 text-xs mt-1">We typically reply within 24 hours </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-purple-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Consultation</h3>
                  <p className="text-slate-400 mt-1">Book a free 15-min discovery call to discuss security needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              We respect your privacy. All project details are covered under our standard NDA upon request.
            </p>
          </div>
        </div>

        {/* Right Column: Project Form */}
        <div className="lg:col-span-3">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  We've got your details. One of our lead developers will review your project requirements and get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="John Doe"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="john@company.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Type</label>
                  <select 
                    name="projectType"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    onChange={handleChange}
                  >
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Security Audit</option>
                    <option>Performance Tuning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Budget Estimate</label>
                  <select 
                    name="budget"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="<1k">&lt; $1k</option>
                    <option value="1k-5k">$1k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k+">$10k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Details</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Tell us about the problem you're trying to solve..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-cyan-900/20"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Submit Proposal</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;