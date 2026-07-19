import React, { useState } from 'react';
import { Video, Wifi, ShieldCheck, Clock, Mic, VideoOff, Share2, PhoneOff, Users, Sparkles, ArrowRight, CheckCircle2, Globe, Lock } from 'lucide-react';
import './VideoTherapy.css';

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'End-to-End Encrypted',
    desc: 'Your video session is protected by AES-256 military-grade encryption. Nobody — not even NDIHO SPACE — can listen in.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'AI Co-Pilot Active',
    desc: 'An optional AI assistant transcribes key session moments and drafts private summaries visible only to you after each session.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Flexible Scheduling',
    desc: 'Book 50-minute to 90-minute sessions. Reschedule or cancel up to 12 hours before with no penalty.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Available Everywhere',
    desc: 'Access your session from any device — mobile, tablet, or desktop. All you need is a stable 3G+ connection.'
  },
  {
    icon: <Users size={24} />,
    title: 'All Session Types',
    desc: 'Video sessions support Individual, Couple, Family, and Group therapy. Switch formats anytime during rebooking.'
  },
  {
    icon: <Lock size={24} />,
    title: 'HIPAA Ready',
    desc: 'Our infrastructure is HIPAA, GDPR, and Rwanda Data Privacy compliant for peace of mind in every session.'
  }
];

const howItWorks = [
  { step: '01', title: 'Book Your Session', desc: 'Choose your therapist, format, date, and pay securely in RWF using Mobile Money, Card, or PayPal.' },
  { step: '02', title: 'Receive Secure Link', desc: 'A one-time encrypted session link is sent to your phone and email — unique to your appointment.' },
  { step: '03', title: 'Enter the Sanctuary Room', desc: 'Click the link at session time. The room opens directly — no app downloads required.' },
  { step: '04', title: 'Therapy Begins', desc: 'Your therapist connects. The AI Co-Pilot activates (optional). Begin your journey toward mental peace.' }
];

const VideoTherapy = ({ onBookNow }) => {
  const [demoActive, setDemoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);

  return (
    <section id="video-therapy" className="video-therapy-page">
      
      {/* Hero Banner */}
      <div className="vt-hero-banner">
        <div className="container vt-hero-inner">
          <div className="vt-hero-text animate-fade-in">
            <span className="mood-chip">
              <Video size={14} />
              ONLINE VIDEO THERAPY
            </span>
            <h1 className="vt-hero-title">
              Therapy without<br />
              <span className="title-gradient">leaving your safe space.</span>
            </h1>
            <p className="vt-hero-desc">
              High-definition, fully encrypted video sessions connect you with licensed psychologists anywhere in Rwanda and beyond. Your session. Your pace. Your sanctuary.
            </p>
            <div className="vt-hero-actions">
              <button className="btn btn-primary btn-lg" onClick={onBookNow}>
                <Video size={18} />
                Book a Video Session
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => setDemoActive(true)}
              >
                Preview Session Room
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="trust-badges-row">
              <span className="trust-badge">🔒 AES-256 Encrypted</span>
              <span className="trust-badge">🇷🇼 Rwanda Compliant</span>
              <span className="trust-badge">📱 Mobile Ready</span>
            </div>
          </div>

          {/* Hero Session Preview */}
          <div className="vt-hero-preview animate-blur-in">
            <div className="session-preview-mockup">
              <div className="preview-therapist-video">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Therapist video session preview"
                  className="preview-bg-img"
                />
                {/* PIP selfie in corner */}
                <div className="preview-pip">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                    alt="Patient view"
                    className="pip-img"
                  />
                  <span className="pip-you-label">YOU</span>
                </div>
                {/* Timer */}
                <div className="preview-timer-tag">🕒 45:12 REMAINING</div>
                {/* AI badge */}
                <div className="preview-ai-badge">
                  <Sparkles size={10} />
                  AI CO-PILOT ACTIVE
                </div>
                {/* Therapist name */}
                <div className="preview-therapist-nameplate">
                  <strong>Dr. Alice Mutoni</strong>
                  <span>Clinical Psychologist</span>
                </div>
                {/* Control capsule */}
                <div className="preview-controls-capsule">
                  <button className={`preview-ctrl-btn ${isMuted ? 'active-red' : ''}`} onClick={() => setIsMuted(!isMuted)}><Mic size={14} /></button>
                  <button className={`preview-ctrl-btn ${isCamOff ? 'active-red' : ''}`} onClick={() => setIsCamOff(!isCamOff)}><VideoOff size={14} /></button>
                  <button className="preview-ctrl-btn"><Share2 size={14} /></button>
                  <button className="preview-ctrl-btn end-red" onClick={() => setDemoActive(false)}><PhoneOff size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="vt-features-section">
        <div className="container">
          <div className="section-header">
            <span className="mood-chip">BUILT FOR TRUST</span>
            <h2 className="section-title">Everything your digital clinic needs</h2>
            <p className="section-subtitle">Our session room is not just a video call — it's a clinical-grade therapeutic environment designed for safety, privacy, and healing.</p>
          </div>
          <div className="vt-features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="vt-feature-card card">
                <div className="vt-feature-icon">{feat.icon}</div>
                <h3 className="vt-feature-title">{feat.title}</h3>
                <p className="vt-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="training" className="vt-how-it-works safe-space-container">
        <div className="container">
          <div className="section-header">
            <span className="mood-chip">YOUR JOURNEY</span>
            <h2 className="section-title">How a video session works</h2>
            <p className="section-subtitle">From booking to breakthrough — here's what your first session looks like at NDIHO SPACE.</p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="step-card">
                <span className="step-num-label">{step.step}</span>
                <CheckCircle2 size={20} className="step-check-icon" />
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="vt-cta-strip container">
        <div className="cta-strip-card">
          <div className="cta-strip-text">
            <h3>Ready to begin your first session?</h3>
            <p>Book today. A licensed therapist is available within 24 hours.</p>
          </div>
          <button className="btn btn-primary btn-lg" onClick={onBookNow}>
            <Video size={18} />
            Schedule Your Session
          </button>
        </div>
      </div>

    </section>
  );
};

export default VideoTherapy;
