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
          <a href="#services" onClick={() => scrollTo('services')}>Services</a>
          <a href="#video-therapy" onClick={() => scrollTo('video-therapy')} className="nav-highlight">
            <Video size={14} /> Video Therapy
          </a>
          <a href="#booking-wizard-root" onClick={() => scrollTo('booking-wizard-root')}>Find Therapists</a>
          <a href="#training" onClick={() => scrollTo('training')}>Training</a>
          <a href="#contact" onClick={() => scrollTo('contact')}>Contact Us</a>
          <button className="btn btn-secondary auth-mobile-btn" onClick={() => { setIsOpen(false); onOpenAuth(); }}>
            <User size={18} style={{ marginRight: '6px' }} />
            Join Safe Place 
          </button>
        </div>

        <div className="navbar-actions">
          <button className="btn btn-primary auth-desktop-btn" onClick={onOpenAuth}>
            <User size={18} style={{ marginRight: '6px' }} />
            Join Sanctuary
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
