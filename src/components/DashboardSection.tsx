import React, { useState, useEffect, useRef } from 'react';
import Card from './ui/Card';
import { CircleDollarSign, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const DashboardSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mock data for dashboard
  const [totalSupply, setTotalSupply] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [holders, setHolders] = useState(0);
  const [transactions, setTransactions] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      // Animate numbers when section becomes visible
      const supplyTarget = 350000000;
      const marketCapTarget = 350000000;
      const holdersTarget = 24631;
      const transactionsTarget = 1358942;
      
      const duration = 2000; // 2 seconds
      const frames = 60;
      const interval = duration / frames;
      
      let startTime: number | null = null;
      
      const animateNumbers = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setTotalSupply(Math.floor(supplyTarget * progress));
        setMarketCap(Math.floor(marketCapTarget * progress));
        setHolders(Math.floor(holdersTarget * progress));
        setTransactions(Math.floor(transactionsTarget * progress));
        
        if (progress < 1) {
          requestAnimationFrame(animateNumbers);
        }
      };
      
      requestAnimationFrame(animateNumbers);
    }
  }, [isVisible]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const statCards = [
    {
      title: 'Total Supply',
      value: formatNumber(totalSupply),
      icon: CircleDollarSign,
      color: 'primary'
    },
    {
      title: 'Market Cap',
      value: `$${formatNumber(marketCap)}`,
      icon: TrendingUp,
      color: 'secondary'
    },
    {
      title: 'Holders',
      value: formatNumber(holders),
      icon: PieChart,
      color: 'accent'
    },
    {
      title: 'Transactions',
      value: formatNumber(transactions),
      icon: BarChart3,
      color: 'success'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-800/50" id="dashboard" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title slide-up animate-on-scroll">
          Live <span className="text-primary">Dashboard</span>
        </h2>
        
        <p className="section-subtitle slide-up animate-on-scroll">
          Real-time statistics and insights into the USDA ecosystem. Track supply, collateral ratio, and other key metrics.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <Card key={index} className="slide-up animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full bg-${stat.color}/10`}>
                  <stat.icon size={20} className={`text-${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 slide-up animate-on-scroll">
            <h3 className="text-lg font-bold mb-4">Supply Distribution</h3>
            <div className="w-full h-64 bg-slate-100 dark:bg-slate-700/30 rounded-lg flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Mock chart visualization */}
                <div className="absolute inset-0 flex items-end justify-around px-6">
                  {[35, 25, 45, 60, 40, 30, 55, 70, 50, 65, 75, 60].map((height, index) => (
                    <div 
                      key={index} 
                      className="w-4 bg-gradient-to-t from-primary to-secondary rounded-t-sm"
                      style={{ 
                        height: `${height}%`,
                        opacity: isVisible ? 1 : 0,
                        transition: `height 1s ease-out ${index * 0.1}s, opacity 0.5s ease-out ${index * 0.1}s` 
                      }}
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-300 dark:bg-slate-600"></div>
              </div>
            </div>
          </Card>
          
          <Card className="slide-up animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-4">Collateral Ratio</h3>
            <div className="w-full h-64 bg-slate-100 dark:bg-slate-700/30 rounded-lg flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Mock donut chart */}
                <div 
                  className="absolute inset-0 rounded-full border-[16px] border-slate-200 dark:border-slate-700"
                ></div>
                <div 
                  className="absolute inset-0 rounded-full border-[16px] border-primary"
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-out, transform 1s ease-out',
                    transform: isVisible ? 'rotate(0deg)' : 'rotate(-90deg)' 
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Collateralized</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;