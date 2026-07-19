import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import './Hero.css';

const moods = [
  { emoji: '🌱', label: 'Overwhelmed' },
  { emoji: '☀️', label: 'Anxious' },
  { emoji: '🌙', label: 'Sad/Low' },
  { emoji: '🏡', label: 'Seeking Peace' },
  { emoji: '🌊', label: 'Flow State' }
];

const Hero = ({ onNavigateToBooking, onSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    if (onSelectMood) {
      onSelectMood(mood);
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
          <h1 className="hero-title">
            Your mind deserves <br />
            <span className="title-gradient">a safe sanctuary.</span>
          </h1>
          <p className="hero-description">
            NDIHO SPACE is a mental health platform built on trust, warmth, and clinical expertise. 
            We connect you with qualified therapists, train next-generation psychologists, 
            and make professional care accessible.
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
