import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="text-2xl font-bold text-white mb-6 inline-block">
              OptiTech <span className="text-cyan-400">Solutions</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building high-integrity software for daily optimization. A student collective focused on privacy-first productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#competencies" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Services</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Security Audit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 text-sm">
                <Mail size={16} className="mr-3 text-cyan-400" />
                <a href="mailto:hello@optitech.dev" className="hover:text-white transition-colors">hello@optitech.dev</a>
              </li>
              <li className="text-slate-500 text-xs mt-4">
                Available for freelance projects and enterprise consultations.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OptiTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;