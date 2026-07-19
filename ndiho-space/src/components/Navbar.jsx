import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, User, Video } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="/" className="navbar-logo">
          <Heart className="logo-icon" fill="currentColor" />
          <span>NDIHO <span className="logo-accent">SPACE</span></span>
        </a>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => scrollTo('about')}>About</a>
          <a href="#services" onClick={() => scrollTo('services')}>Services</a>
          <a href="#become-therapists" onClick={() => scrollTo('become-therapists')}>Become Therapists</a>
          <a href="#organisations" onClick={() => scrollTo('organisations')}>Organisations</a>
          <a href="#advice" onClick={() => scrollTo('advice')}>Advice</a>
          <a href="#faq" onClick={() => scrollTo('faq')}>FAQ</a>
          <button className="btn btn-secondary auth-mobile-btn" onClick={() => { setIsOpen(false); onOpenAuth(); }}>
            <User size={18} style={{ marginRight: '6px' }} />
            Join Safe place
          </button>
        </div>

        <div className="navbar-actions">
          <button className="btn btn-primary auth-desktop-btn" onClick={onOpenAuth}>
            <User size={18} style={{ marginRight: '6px' }} />
            Join Safe place
          </button>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
