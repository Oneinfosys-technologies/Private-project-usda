import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DashboardSection from './components/DashboardSection';
import IntegrationsSection from './components/IntegrationsSection';
import GovernanceSection from './components/GovernanceSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import Preloader from './components/ui/Preloader';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`font-sans antialiased ${theme === 'dark' ? 'dark' : 'light'}`}>
      {loading && <Preloader />}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white overflow-hidden relative">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DashboardSection />
          <IntegrationsSection />
          <GovernanceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;