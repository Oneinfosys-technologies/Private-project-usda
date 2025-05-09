import React, { useEffect, useRef, useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { Users, VoteIcon, BarChart, TrendingUp } from 'lucide-react';

const GovernanceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mock voting data
  const proposals = [
    { id: 'USDA-1', title: 'Adjust collateralization parameters', votes: 68, status: 'Active' },
    { id: 'USDA-2', title: 'Add new treasury reserve asset', votes: 92, status: 'Passed' },
    { id: 'USDA-3', title: 'Integrate with new Layer 2 solution', votes: 45, status: 'Active' }
  ];
  
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

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-800/50" id="governance" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title slide-up animate-on-scroll">
          Community <span className="text-accent">Governance</span>
        </h2>
        
        <p className="section-subtitle slide-up animate-on-scroll">
          USDA is governed by its community through the SKY token. Stake SKY to participate in
          protocol governance and earn rewards from protocol revenue.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-white/10 overflow-hidden">
              <h3 className="text-xl font-bold mb-6">Recent Governance Proposals</h3>
              
              <div className="space-y-4">
                {proposals.map((proposal, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="text-xs px-2 py-1 rounded bg-primary/10 text-primary mr-2">
                          {proposal.id}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          proposal.status === 'Active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {proposal.status}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <VoteIcon size={14} className="mr-1" />
                        <span className="text-sm">{proposal.votes}%</span>
                      </div>
                    </div>
                    
                    <h4 className="font-medium">{proposal.title}</h4>
                    
                    <div className="mt-3 w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ 
                          width: `${proposal.votes}%`,
                          transition: 'width 1.5s ease-out',
                          transitionDelay: isVisible ? `${index * 0.2}s` : '0s'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="secondary" fullWidth>View All Proposals</Button>
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 slide-up animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Decentralized Autonomous Organization</h3>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The USDA protocol is governed by SKY token holders through transparent on-chain voting.
              This ensures that protocol decisions align with the interests of the community and evolve
              to meet market needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3">
                  <VoteIcon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">On-chain Voting</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Secure, transparent voting for all protocol changes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-secondary/10 mr-3">
                  <Users size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Community-led</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Protocol parameters decided by stakeholders
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-accent/10 mr-3">
                  <BarChart size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Token Economics</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    SKY token aligns incentives between users and governors
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-success/10 mr-3">
                  <TrendingUp size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="font-medium">Revenue Sharing</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Protocol revenue distributed to SKY stakers
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="primary">Explore Governance</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;