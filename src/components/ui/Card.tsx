import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-800/50 rounded-xl shadow-md overflow-hidden p-6 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;