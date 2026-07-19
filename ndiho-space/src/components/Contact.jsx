import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import './Contact.css';
/* Inline social icons (lucide-react doesn't export social brand icons) */
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4 4 20"/>
  </svg>
);
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="mood-chip">REACH OUT</span>
          <h2 className="section-title">We're here whenever you need us</h2>
          <p className="section-subtitle">
            Whether you have a question about a session, need support choosing a plan, or just want to learn more — our team responds within 24 hours, confidentially and with care.
          </p>
        </div>
        <div className="contact-grid">
          {/* Left: Info Panel */}
          <div className="contact-info-panel">
            <div className="info-card card">
              <h3 className="info-panel-title">Contact Information</h3>
              <p className="info-panel-subtitle">Everything stays between us. Your privacy is our foundation.</p>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong>Call or WhatsApp</strong>
                    <span>+250 788 000 000</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>hello@ndiho.space</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong>Office</strong>
                    <span>KG 5 Ave, Kigali, Rwanda</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong>Support Hours</strong>
                    <span>Mon–Sat · 7:00 AM – 8:00 PM CAT</span>
                  </div>
                </div>
              </div>
              <div className="contact-socials">
                <span className="socials-label">Follow Our Journey</span>
                <div className="socials-row">
                  <a href="#" className="social-icon-btn" aria-label="Facebook"><IconFacebook /></a>
                  <a href="#" className="social-icon-btn" aria-label="Instagram"><IconInstagram /></a>
                  <a href="#" className="social-icon-btn" aria-label="Twitter"><IconX /></a>
                </div>
              </div>
              <div className="crisis-banner">
                <MessageSquare size={18} />
                <div>
                  <strong>Mental Health Crisis Line (Rwanda)</strong>
                  <p>24/7 Free Support: <a href="tel:3029">Dial 3029</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <div className="contact-form-side">
            {submitted ? (
              <div className="success-card card">
                <CheckCircle2 size={56} className="success-icon" />
                <h3>Message Received!</h3>
                <p>Thank you, <strong>{form.name}</strong>. Our team will respond to <strong>{form.email}</strong> within 24 hours — confidentially and with care.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Send Us a Message</h3>
                <div className="form-row-two">
                  <div className="form-field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="e.g. Jean Claude"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select 
                    id="contact-subject" 
                    name="subject" 
                    value={form.subject} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a topic…</option>
                    <option>Booking a Session</option>
                    <option>Therapist Inquiry</option>
                    <option>Billing & Payments</option>
                    <option>Technical Support</option>
                    <option>Psychologist Training Program</option>
                    <option>Partnership or Media</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what's on your mind — your message is completely confidential."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                  {loading ? (
                    <span className="spinner-inline"></span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
                
                <p className="form-privacy-note">
                  🔒 Your message is encrypted and completely confidential. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
