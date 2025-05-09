import React, { useEffect, useRef } from 'react';
import { 
  DollarSign, 
  LockKeyhole, 
  Shuffle, 
  Vote,
  ChevronRight
} from 'lucide-react';
import Card from './ui/Card';

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: '1:1 USD Collateralization',
      description: 'Every USDA token is backed by exactly 1 USD, held in regulated financial institutions and regularly audited.',
      icon: DollarSign,
      color: 'primary'
    },
    {
      title: 'Non-Custodial Smart Contracts',
      description: 'Your funds remain under your control through secure, audited smart contracts that facilitate transfers without intermediaries.',
      icon: LockKeyhole,
      color: 'secondary'
    },
    {
      title: 'Seamless DeFi Integration',
      description: 'USDA is designed to work across major blockchains and DeFi protocols, enabling efficient liquidity and composability.',
      icon: Shuffle,
      color: 'accent'
    },
    {
      title: 'DAO Governance via SKY Token',
      description: 'USDA protocol is governed by SKY token holders who can propose and vote on changes to the protocol parameters.',
      icon: Vote,
      color: 'success'
    }
  ];

  return (
    <section className="py-24 relative" id="features" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title slide-up animate-on-scroll">
          Redefining Stablecoin <span className="text-primary">Technology</span>
        </h2>
        
        <p className="section-subtitle slide-up animate-on-scroll" style={{ transitionDelay: '100ms' }}>
          USDA combines the stability of the US Dollar with the innovation of blockchain technology,
          creating a reliable foundation for the future of decentralized finance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="slide-up animate-on-scroll" 
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <Card className="h-full hover:translate-y-[-4px] transition-all duration-300">
                <div className={`p-4 rounded-full bg-${feature.color}/10 inline-block mb-4`}>
                  <feature.icon size={24} className={`text-${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {feature.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;