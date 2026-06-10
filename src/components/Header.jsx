import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Diferenciais', id: 'differentials' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo size="small" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://substack.com/@barbaragodinhoinvest"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm px-4 py-2 rounded-md font-medium border transition-all ${isScrolled ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'border-white/40 text-white hover:bg-white/10'}`}
            >
              Leia Artigos
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm px-4 py-2 ${isScrolled ? 'gradient-bg text-white hover:opacity-90' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm' } transition-all`}
            >
              Solicitar Análise
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden overflow-hidden ${isScrolled ? 'bg-white' : 'bg-blue-700/95 backdrop-blur-md'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-1 px-4 pt-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-blue-600'}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://substack.com/@barbaragodinhoinvest"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-center mt-3 py-2.5 rounded-md text-base font-medium border transition-colors ${isScrolled ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'border-white/40 text-white hover:bg-white/10'}`}
            >
              Leia Artigos
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`w-full mt-3 py-2.5 text-base ${isScrolled ? 'gradient-bg text-white hover:opacity-90' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Solicitar Análise
            </Button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;