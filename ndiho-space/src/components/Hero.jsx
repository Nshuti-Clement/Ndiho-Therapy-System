import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import './Hero.css';

const moodMap = {
  Individual: 'Individual Therapy',
  Couples: 'Couple Therapy',
  Teen: 'Teen Therapy'
};

const heroOptions = [
  { title: 'Individual', subtitle: 'For myself' },
  { title: 'Couples', subtitle: 'For me and my partner' },
  { title: 'Teen', subtitle: 'For my child' }
];

const Hero = ({ onNavigateToBooking, onSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (option) => {
    setSelectedMood(option);
    if (onSelectMood) {
      onSelectMood(moodMap[option] || option);
    }
  };

  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-content animate-fade-in">
          <div className="mood-chip-wrapper">
            <span className="mood-chip">
              <Sparkles size={14} />
              CONFIDENTIAL & ACCESSIBLE EVERYWHERE
            </span>
          </div>
          <h1 className="hero-title">You deserve to be happy.</h1>
          <p className="hero-subtitle">What type of therapy are you looking for?</p>
          <div className="therapy-options">
            {heroOptions.map((option) => (
              <button key={option.title} className="therapy-pill" onClick={() => handleMoodSelect(option.title)}>
                <strong>{option.title}</strong>
                <span>{option.subtitle}</span>
              </button>
            ))}
          </div>
          <p className="hero-description">
            NDIHO SPACE connects you quickly with safe, licensed therapists and tailored care paths so you can feel understood and supported from the first session.
          </p>
          <p className="hero-quickline">
            Online, confidential sessions for individuals, couples, and teens — book in minutes.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onNavigateToBooking}>
              <Calendar size={18} style={{ marginRight: '8px' }} />
              Book Online Therapy
            </button>
            <a href="#services" className="btn btn-tertiary">
              Explore Our Services
              <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-blur-in">
          <div className="sanctuary-card">
            <h3 className="sanctuary-card-title">How are you feeling today?</h3>
            <p className="sanctuary-card-subtitle">Select a state to get recommended matching care paths.</p>
            <div className="mood-grid">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  className={`mood-button ${selectedMood === mood.label ? 'active' : ''}`}
                  onClick={() => handleMoodSelect(mood.label)}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <span className="mood-label">{mood.label}</span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="mood-feedback animate-fade-in">
                <p>
                  It's normal to feel <strong>{selectedMood.toLowerCase()}</strong>. We suggest exploring our <strong>Orientation & Psychotherapy</strong> paths.
                </p>
                <button className="btn btn-secondary btn-sm" onClick={onNavigateToBooking}>
                  Find Available Therapists
                </button>
              </div>
            )}
          </div>
          {/* Asymmetric paper stack elements */}
          <div className="asymmetric-bg-card-1"></div>
          <div className="asymmetric-bg-card-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
