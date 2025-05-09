import React from 'react';
import { Twitter, Github, MessageCircle, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary mr-2">USDA</span>
              <span className="text-2xl font-light text-slate-600 dark:text-slate-300">.money</span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              The next generation USD-backed stablecoin, designed for DeFi applications and everyday transactions.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Protocol</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Governance</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Developer API</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Integration Guide</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Brand Assets</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 USDA Money. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary dark:hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary dark:hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary dark:hover:text-primary transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;