import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 animate-gradient"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;