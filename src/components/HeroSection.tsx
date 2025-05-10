import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';
import { DollarSign, Zap, ShieldCheck } from 'lucide-react';
import ParticleBackground from './ui/ParticleBackground';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('appear');
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      <ParticleBackground />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="slide-up">
            <div className="flex items-center mb-4 space-x-2">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">Launching Q3 2025</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              USDA — The Next Generation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                USD-Backed Stablecoin
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Decentralized. Collateralized. Stable. Experience the future of stablecoins with USDA, backed 1:1 with USD and built for the future of DeFi.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="primary" size="lg">
                Get USDA
              </Button>
              <Button variant="secondary" size="lg">
                Explore Protocol
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center">
                <div className="mr-3 p-2 rounded-full bg-primary/10">
                  <DollarSign size={20} className="text-primary" />
                </div>
                <div>1:1 USD Backed</div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 rounded-full bg-secondary/10">
                  <ShieldCheck size={20} className="text-secondary" />
                </div>
                <div>Audited Security</div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 p-2 rounded-full bg-accent/10">
                  <Zap size={20} className="text-accent" />
                </div>
                <div>Instant Transfers</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 bg-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-accent/20 rounded-full filter blur-3xl animate-pulse"></div>
            
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[2px]">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    USDA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;