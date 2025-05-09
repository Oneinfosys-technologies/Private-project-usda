import React, { useState, useEffect, useRef } from 'react';
import Card from './ui/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IntegrationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const integrations = [
    {
      name: 'Aave',
      description: 'Deposit USDA as collateral for borrowing or earn interest by lending.',
      logo: '🔵', // Placeholder for icon
      color: 'bg-blue-500'
    },
    {
      name: 'Curve',
      description: 'Trade USDA with minimal slippage through efficient stablecoin swaps.',
      logo: '🔴', // Placeholder for icon
      color: 'bg-red-500'
    },
    {
      name: 'Uniswap',
      description: 'Provide liquidity with USDA pairs and earn trading fees.',
      logo: '🟣', // Placeholder for icon
      color: 'bg-purple-500'
    },
    {
      name: 'Compound',
      description: 'Supply USDA to earn interest or use as collateral for loans.',
      logo: '🟢', // Placeholder for icon
      color: 'bg-green-500'
    },
    {
      name: 'MakerDAO',
      description: 'Deposit USDA as collateral in vaults to generate DAI.',
      logo: '🟠', // Placeholder for icon
      color: 'bg-orange-500'
    },
    {
      name: 'Balancer',
      description: 'Create and provide liquidity to customizable pools with USDA.',
      logo: '🔵', // Placeholder for icon
      color: 'bg-blue-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, isHovering]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === integrations.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? integrations.length - 3 : prevIndex - 1
    );
  };

  return (
    <section 
      className="py-24 relative" 
      id="integrations" 
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title slide-up animate-on-scroll">
          DeFi <span className="text-secondary">Integrations</span>
        </h2>
        
        <p className="section-subtitle slide-up animate-on-scroll">
          USDA is designed to work seamlessly with leading DeFi protocols, providing you with enhanced
          opportunities for earning, trading, and managing your assets.
        </p>
        
        <div className="relative px-12">
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md z-10"
            onClick={prevSlide}
            aria-label="Previous integrations"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
              ref={carouselRef}
            >
              {integrations.map((integration, index) => (
                <div key={index} className="min-w-[33.33%] px-4">
                  <Card className="h-64 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300">
                    <div className={`w-16 h-16 ${integration.color} rounded-full flex items-center justify-center text-white text-2xl mb-4`}>
                      {integration.logo}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300 px-6">
                      {integration.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md z-10"
            onClick={nextSlide}
            aria-label="Next integrations"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {Array.from({ length: integrations.length - 2 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;