import React, { useState, useEffect } from 'react';
import { User, Calendar, BookOpen, Video, Send, FileText, Download, Award, Bell, Settings, HelpCircle, Mic, VideoOff, Share2, MessageSquare, PhoneOff, ShieldCheck, ShieldAlert, Sparkles, BookOpenCheck, EyeOff } from 'lucide-react';
import './Dashboard.css';

const courses = [
  { id: 1, name: 'Foundations of Ethical Teletherapy', progress: 100, completed: true },
  { id: 2, name: 'Trauma-Informed Clinical Practices', progress: 65, completed: false },
  { id: 3, name: 'Crisis Assessment & Triage Protocols', progress: 20, completed: false }
];

const mockMessages = [
  { sender: 'therapist', time: '10:02 AM', text: "Hello. How are you feeling today? I'm here when you're ready to start." },
  { sender: 'user', time: '10:05 AM', text: "I've been feeling a bit overwhelmed this week with work deadlines." }
];

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('patient');
  const [liveSession, setLiveSession] = useState(false);
  const [messages, setMessages] = useState(mockMessages);
  const [inputText, setInputText] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('45:12');
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  // Simple timer countdown mockup
  useEffect(() => {
    if (!liveSession) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        const [min, sec] = prev.split(':').map(Number);
        if (min === 0 && sec === 0) {
          clearInterval(interval);
          return '00:00';
        }
        const newSec = sec === 0 ? 59 : sec - 1;
        const newMin = sec === 0 ? min - 1 : min;
        return `${String(newMin).padStart(2, '0')}:${String(newSec).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [liveSession]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { sender: 'user', time: timeStr, text: inputText }]);
    setInputText('');

    // Mock therapist auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'therapist', 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Thank you for sharing that. Let\'s explore this deeper during our live conversation.' 
      }]);
    }, 1500);
  };

  return (
    <div className="dashboard-section container">
      
      {/* Dashboard Header Bar - Shared when not in full-screen live call */}
      {!liveSession && (
        <div className="dashboard-header card">
          <div className="db-profile-info">
            <div className="db-avatar">
              <User size={24} />
            </div>
            <div>
              <h3 className="db-welcome">Welcome back, {user.name}</h3>
              <span className="mood-chip font-human">Active Sanctuary Account</span>
            </div>
          </div>

          <div className="db-tab-selector">
            <button 
              className={`db-tab-btn ${activeTab === 'patient' ? 'active' : ''}`}
              onClick={() => { setActiveTab('patient'); }}
            >
              <Calendar size={16} /> Patient Portal
            </button>
            <button 
              className={`db-tab-btn ${activeTab === 'training' ? 'active' : ''}`}
              onClick={() => { setActiveTab('training'); }}
            >
              <BookOpen size={16} /> Training Portal
            </button>
            <button className="btn btn-tertiary" onClick={onLogout}>Logout</button>
          </div>
        </div>
      )}

      {!liveSession ? (
        <div className="dashboard-content-grid">
          
          {/* Patient tab */}
          {activeTab === 'patient' && (
            <>
              <div className="main-db-panel card animate-fade-in">
                <h4 className="panel-title">Upcoming Therapy Sessions</h4>
                <div className="upcoming-session-card">
                  <div className="session-time-block">
                    <span className="session-date">Monday, July 20</span>
                    <span className="session-time">10:30 AM - 11:30 AM (GMT+2)</span>
                  </div>
                  <div className="session-therapist-block">
                    <strong>Dr. Alice Mutoni</strong>
                    <span>Clinical Psychologist</span>
                  </div>
                  <button className="btn btn-primary" onClick={() => setLiveSession(true)}>
                    <Video size={16} style={{ marginRight: '6px' }} />
                    Enter Live Session Room
                  </button>
                </div>

                <div className="recent-wellness-feed">
                  <h4 className="panel-title" style={{ marginTop: '20px' }}>Daily Sanctuary Tips</h4>
                  <div className="wellness-tip-box">
                    <strong>Box Breathing Exercise</strong>
                    <p>Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat 3 times to downregulate anxiety.</p>
                  </div>
                </div>
              </div>

              <div className="side-db-panel card animate-blur-in">
                <h4 className="panel-title">Security & Credentials</h4>
                <div className="security-info-box">
                  <p>All communication channels are encrypted point-to-point.</p>
                  <p className="confidentiality-badge">✓ AES-256 Secured</p>
                </div>
                <h4 className="panel-title" style={{ marginTop: '20px' }}>Quick Stats</h4>
                <div className="stats-box">
                  <div className="stat-item">
                    <span className="stat-num">1</span>
                    <span className="stat-label">Booked Session</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-num">0</span>
                    <span className="stat-label">Completed</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Training tab */}
          {activeTab === 'training' && (
            <div className="training-panel card animate-fade-in">
              <h4 className="panel-title">Psychologist Professional Development</h4>
              <p className="panel-subtitle">Access professional accreditation, training logs, and downloads.</p>

              <div className="courses-list">
                {courses.map(course => (
                  <div key={course.id} className="course-card">
                    <div className="course-info">
                      <strong>{course.name}</strong>
                      <div className="course-progress-bar-container">
                        <div className="course-progress-bar" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span className="course-progress-text">{course.progress}% Completed</span>
                    </div>
                    <div className="course-actions-db">
                      {course.completed ? (
                        <button className="btn btn-secondary btn-sm">
                          <Award size={14} style={{ marginRight: '4px' }} />
                          Download Certificate (PDF)
                        </button>
                      ) : (
                        <button className="btn btn-primary btn-sm">Resume Course</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ) : (
        /* Immersive Live Session Screen matching the provided reference screenshot */
        <div className="immersive-live-session-container animate-fade-in">
          
          {/* Top Session bar */}
          <div className="live-session-topbar">
            <div className="session-topbar-left">
              <h2 className="session-platform-title">Serene Sanctuary</h2>
              <span className="session-status-badge">
                <span className="live-pulse-dot"></span>
                LIVE SESSION
              </span>
              <span className="session-copilot-badge">
                <Sparkles size={12} />
                AI CO-PILOT ACTIVE
              </span>
            </div>
            
            <div className="session-topbar-right">
              <nav className="topbar-nav-links">
                <button className="nav-link-btn active">Home</button>
                <button className="nav-link-btn">Sessions</button>
                <button className="nav-link-btn">Messages</button>
              </nav>
              <button className="session-tool-icon-btn"><Bell size={18} /></button>
              <div className="user-profile-header-pill">
                <span>Dr. Alice</span>
                <div className="profile-pill-avatar">
                  <User size={14} />
                </div>
              </div>
            </div>
          </div>

          <div className="live-session-split-layout">
            
            {/* Left Area: Immersive Video Viewport */}
            <div className="immersive-video-viewport">
              
              {/* Fullscreen Therapist Video Feed */}
              <div className={`therapist-full-feed-video ${isBlurred ? 'blurred-feed' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dr. Alice Mutoni" 
                  className="full-video-bg-img"
                />

                {/* Floating Timer in Top Left */}
                <div className="floating-timer-remaining">
                  <span>🕒 REMAINING {timeRemaining}</span>
                </div>

                {/* Floating Picture-in-Picture (PIP) Patient feed in Top Right */}
                <div className="floating-patient-pip">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop" 
                    alt="Patient Feed" 
                    className="pip-video-img"
                  />
                  <div className="pip-label-overlay">
                    <span>🎙️ YOU</span>
                  </div>
                </div>

                {/* Floating Bottom Left Therapist Name Info Tag */}
                <div className="floating-therapist-name-info">
                  <h3>Dr. Alice Mutoni</h3>
                  <span className="therapist-role-tag">Clinical Psychologist</span>
                </div>

                {/* Bottom Overlay floating control bar capsule */}
                <div className="floating-capsule-video-toolbar">
                  <button 
                    className={`toolbar-circle-btn ${isMuted ? 'muted' : ''}`}
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    <Mic size={18} />
                  </button>
                  <button 
                    className={`toolbar-circle-btn ${isCamOff ? 'cam-off' : ''}`}
                    onClick={() => setIsCamOff(!isCamOff)}
                    title={isCamOff ? 'Turn Camera On' : 'Turn Camera Off'}
                  >
                    <VideoOff size={18} />
                  </button>
                  <button className="toolbar-circle-btn" title="Screen share">
                    <Share2 size={18} />
                  </button>
                  <button className="toolbar-circle-btn" title="Chat notes">
                    <MessageSquare size={18} />
                  </button>
                  <button className="btn btn-primary end-call-pill-btn" onClick={() => setLiveSession(false)}>
                    <PhoneOff size={16} />
                    <span>End Call</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Right Area: Session Tools & Reflection Sidebar */}
            <div className="live-session-sidebar-tools-right">
              
              {/* Private Notes Section */}
              <div className="sidebar-section-card">
                <div className="sidebar-section-header">
                  <h3>Private Notes</h3>
                  <span className="badge-ai-transcription">
                    <span className="transcription-green-dot"></span>
                    AI TRANSCRIPTION LIVE
                  </span>
                </div>
                <p className="sidebar-section-subtitle">Visible only to you during the session.</p>
                <span className="transcription-aside-text">Drafting summary...</span>
                
                <textarea 
                  className="private-reflections-textarea"
                  placeholder="Start typing your reflections..."
                  value={sessionNotes}
                  onChange={(e) => setSessionNotes(e.target.value)}
                />
                
                <button className="btn btn-secondary save-note-wide-btn">
                  SAVE NOTE
                </button>
              </div>

              {/* Therapeutic Focus Section */}
              <div className="sidebar-section-card">
                <h4 className="sidebar-focus-title">THERAPEUTIC FOCUS</h4>
                <div className="therapeutic-tags-grid">
                  <span className="focus-tag yellow-tag">Mindfulness</span>
                  <span className="focus-tag blue-tag">CBT</span>
                  <span className="focus-tag gray-tag">Grief Support</span>
                </div>
              </div>

              {/* Blur Background Toggle Option */}
              <div className="sidebar-option-blur-card">
                <div className="blur-option-info">
                  <div className="blur-icon-wrapper">
                    <EyeOff size={18} />
                  </div>
                  <div>
                    <strong>Blur Background</strong>
                    <p>Enhanced privacy mode</p>
                  </div>
                </div>
                <label className="toggle-switch-wrapper">
                  <input 
                    type="checkbox" 
                    checked={isBlurred}
                    onChange={(e) => setIsBlurred(e.target.checked)}
                  />
                  <span className="toggle-switch-slider"></span>
                </label>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Dashboard;
