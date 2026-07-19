import React from 'react';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="container footer-grid">
        
        <div className="footer-info">
          <a href="/" className="footer-logo">
            <Heart className="logo-icon" fill="currentColor" />
            <span>NDIHO <span className="logo-accent">SPACE</span></span>
          </a>
          <p className="footer-bio">
            NDIHO SPACE is a mental health ecosystem that bridges the gap between patient care, professional training, and public awareness. We make it normal to seek help.
          </p>
          <div className="footer-contact-details">
            <div className="contact-item">
              <Mail size={16} />
              <span>support@ndihospace.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+250 788 000 000</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Kigali, Rwanda | Online Everywhere</span>
            </div>
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-group-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Individual Therapy</a></li>
            <li><a href="#services">Couple Therapy</a></li>
            <li><a href="#services">Group Support</a></li>
            <li><a href="#services">Family Counseling</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-group-title">Psychologists</h4>
          <ul className="footer-links">
            <li><a href="#training">Training Portal</a></li>
            <li><a href="#training">Course Enrollment</a></li>
            <li><a href="#training">Supervisor Directory</a></li>
            <li><a href="#training">Certifications</a></li>
            <li><a href="#training">Clinical Resources</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4 className="footer-group-title">The Sanctuary Journal</h4>
          <p className="newsletter-text">
            Subscribe to our weekly articles and mental wellness exercises. Completely free, unsubscribe anytime.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="border-bottom-only" 
              required 
            />
            <button type="submit" className="newsletter-submit" aria-label="Subscribe">
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} NDIHO SPACE. All rights reserved. 
          <span> Confidentiality Guaranteed by AES-256 Encryption.</span>
        </p>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
