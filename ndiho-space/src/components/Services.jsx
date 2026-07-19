import React from 'react';
import { Compass, MessageSquare, ShieldAlert, Award, GraduationCap, Users, User, Heart, Home, Building } from 'lucide-react';
import './Services.css';

const programs = [
  {
    icon: <Compass size={24} />,
    title: 'Orientation',
    desc: 'Not sure where to start? Get a guided evaluation with a specialist to map out your mental health journey.'
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Counseling',
    desc: 'Immediate, solution-focused emotional support to help navigate life transitions, stress, or relationship changes.'
  },
  {
    icon: <ShieldAlert size={24} />,
    title: 'Psychotherapy',
    desc: 'Deep clinical therapy addressing anxiety, depression, trauma, and complex behavioral disorders with licensed experts.'
  },
  {
    icon: <Award size={24} />,
    title: 'Psycho-education',
    desc: 'Access workshops, digital resource logs, and expert-led webinars designed to normalize and explain mental health.'
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Professional Training',
    desc: 'Specialized courses, credentials, and practice environments designed for junior psychologists and counselors.'
  }
];

const therapyFormats = [
  {
    icon: <User size={20} />,
    title: 'Individual Therapy',
    desc: 'Personalized one-on-one sessions tailored to your needs.',
    duration: '60 mins',
    price: '45,000 RWF'
  },
  {
    icon: <Heart size={20} />,
    title: 'Couple Therapy',
    desc: 'Relationship healing, communication, & alignment.',
    duration: '75 mins',
    price: '55,000 RWF'
  },
  {
    icon: <Home size={20} />,
    title: 'Family Therapy',
    desc: 'Collaborative sessions for couples or family members.',
    duration: '90 mins',
    price: '65,000 RWF'
  },
  {
    icon: <Users size={20} />,
    title: 'Group Session',
    desc: 'Support, sharing, and learning from shared journeys.',
    duration: '90 mins',
    price: '15,000 RWF'
  },
  {
    icon: <Building size={20} />,
    title: 'Institute / Corporate',
    desc: 'Workplace counseling, resilience training, & consultation.',
    duration: 'Varies',
    price: 'Custom'
  }
];

const Services = ({ onSelectService }) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Core Programs */}
        <div className="section-header">
          <span className="mood-chip">HOW WE SUPPORT YOU</span>
          <h2 className="section-title">A comprehensive ecosystem for mental wellbeing</h2>
          <p className="section-subtitle">
            From your very first orientation to advanced clinical therapy and training, NDIHO SPACE handles mental health with clinical safety and complete confidentiality.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, index) => (
            <div key={index} className="program-card">
              <div className="program-icon-wrapper">{prog.icon}</div>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.desc}</p>
            </div>
          ))}
        </div>

        {/* Therapy Booking Formats */}
        <div className="formats-container safe-space-container">
          <div className="formats-header">
            <h3 className="formats-title">Therapy Formats Available Online</h3>
            <p className="formats-subtitle">
              All sessions are conducted inside our encrypted digital clinic. Select a format below to begin booking.
            </p>
          </div>

          <div className="formats-grid">
            {therapyFormats.map((format, index) => (
              <div key={index} className="format-card" onClick={() => onSelectService(format.title)}>
                <div className="format-top">
                  <div className="format-icon">{format.icon}</div>
                  <span className="format-tag">{format.duration}</span>
                </div>
                <h4 className="format-name">{format.title}</h4>
                <p className="format-desc">{format.desc}</p>
                <div className="format-footer">
                  <span className="format-price">{format.price}</span>
                  <span className="format-action-text">Book Now →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
