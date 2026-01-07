import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
const navItems = [{
  label: 'Accueil',
  href: '#home'
}, {
  label: 'Expérience',
  href: '#experience'
}, {
  label: 'Formation',
  href: '#education'
}, {
  label: 'Compétences',
  href: '#skills'
}, {
  label: 'Contact',
  href: '#contact'
}];
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={e => scrollToSection(e, '#home')} className="text-xl font-bold text-slate-900 tracking-tight">
            Portfolio<span className="text-indigo-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>)}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
              Me contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:text-slate-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 md:hidden shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => <a key={item.label} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-base font-medium text-slate-600 hover:text-slate-900 py-2">
                {item.label}
              </a>)}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block text-center px-4 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800">
              Me contacter sur WhatsApp
            </a>
          </div>
        </div>}
    </nav>;
}