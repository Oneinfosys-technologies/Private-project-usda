import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary dark:text-white mr-2">USDA</div>
            <div className="text-2xl font-light text-slate-600 dark:text-slate-300">.money</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem label="Features" href="#features" />
            <NavItem label="Dashboard" href="#dashboard" />
            <NavItem label="Integrations" href="#integrations" />
            <NavItem label="Governance" href="#governance" />
            <div className="flex gap-4">
              <Button variant="secondary" size="sm">Documentation</Button>
              <Button variant="primary" size="sm">Get USDA</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-3">
          <MobileNavItem label="Features" href="#features" onClick={toggleMobileMenu} />
          <MobileNavItem label="Dashboard" href="#dashboard" onClick={toggleMobileMenu} />
          <MobileNavItem label="Integrations" href="#integrations" onClick={toggleMobileMenu} />
          <MobileNavItem label="Governance" href="#governance" onClick={toggleMobileMenu} />
          <div className="pt-2 pb-3 flex flex-col gap-3">
            <Button variant="secondary" fullWidth>Documentation</Button>
            <Button variant="primary" fullWidth>Get USDA</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
    >
      {label}
    </a>
  );
};

interface MobileNavItemProps extends NavItemProps {
  onClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ label, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-2 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
    >
      {label}
    </a>
  );
};

export default Header;