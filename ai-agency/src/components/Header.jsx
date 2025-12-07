import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b-0">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white text-3xl">hub</span>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Gen</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('works')} 
            className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-2"
          >
            Our Works
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-2"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism border-t border-white/10">
          <nav className="flex flex-col gap-2 p-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-3 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('works')} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-3 text-left"
            >
              Our Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium px-3 py-3 text-left"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
