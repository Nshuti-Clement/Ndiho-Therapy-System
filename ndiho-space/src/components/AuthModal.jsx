import React, { useState } from 'react';
import { X, Mail, Lock, User, Shield, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('patient'); // patient, therapist
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!isLogin && !agree) {
      setError('You must agree to the Terms & Privacy Policy.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess({ email, name: isLogin ? 'Sanctuary Member' : name || 'Aline Keza' });
      onClose();
    }, 1200);
  };

  const handleOAuth = (provider) => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess({ email: `user@${provider.toLowerCase()}.rw`, name: `${provider} Guest` });
      onClose();
    }, 1000);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-full-container glass-panel animate-fade-in">
        
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Left Side: Editorial Branding Panel */}
        <div className="auth-branding-panel">
          <div className="branding-background-overlay"></div>
          <div className="branding-content">
            <h1 className="branding-logo">NDIHO Space</h1>
            
            <h2 className="branding-headline">
              {isLogin ? 'Your breath of fresh air.' : 'Your journey to mental wellness begins here.'}
            </h2>
            
            <p className="branding-text">
              {isLogin 
                ? 'Reclaim your mental peace in a sanctuary designed for the modern Rwandan heart.'
                : 'Join a community built on trust, empathy, and professional care. Whether you are seeking support or providing it, you are safe in our space.'}
            </p>

            {/* Avatars summary */}
            <div className="branding-avatars-row">
              <div className="avatars-group">
                <span className="avatar-img-circle sim1"></span>
                <span className="avatar-img-circle sim2"></span>
                <span className="avatar-img-circle sim3"></span>
                <span className="avatar-more-count">+2k</span>
              </div>
              <span className="avatars-count-text">
                {isLogin ? 'JOINED THE SANCTUARY' : 'Trusted by 5,000+ members in Rwanda'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Forms */}
        <div className="auth-forms-panel">
          
          <div className="auth-form-scrollable">
            <div className="auth-form-header">
              <h2 className="forms-panel-title">{isLogin ? 'Welcome Back' : 'Create Your Account'}</h2>
              <p className="forms-panel-subtitle">
                {isLogin ? 'Continue your journey toward inner peace.' : 'Welcome! Please enter your details to register.'}
              </p>
            </div>

            {/* Role selection tab (only on register) */}
            {!isLogin && (
              <div className="role-switcher-tabs">
                <button 
                  type="button"
                  className={`role-tab ${role === 'patient' ? 'active' : ''}`}
                  onClick={() => setRole('patient')}
                >
                  Patient
                </button>
                <button 
                  type="button"
                  className={`role-tab ${role === 'therapist' ? 'active' : ''}`}
                  onClick={() => setRole('therapist')}
                >
                  Therapist
                </button>
              </div>
            )}

            {/* Social connection buttons */}
            {isLogin && (
              <div className="social-oauth-grid">
                <button type="button" className="social-oauth-btn google" onClick={() => handleOAuth('Google')}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span>Google</span>
                </button>
                <button type="button" className="social-oauth-btn facebook" onClick={() => handleOAuth('Facebook')}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
            )}

            {isLogin && <div className="or-divider"><span>OR EMAIL</span></div>}

            {error && <div className="auth-error-card">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-forms-grid">
              
              {!isLogin && (
                <div className="input-group">
                  <label htmlFor="forms-name-input">FULL NAME</label>
                  <div className="input-with-icon">
                    <User size={16} className="input-icon" />
                    <input 
                      id="forms-name-input"
                      type="text" 
                      placeholder="e.g., Keza Aline" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="input-group">
                <label htmlFor="forms-email-input">EMAIL ADDRESS</label>
                <div className="input-with-icon">
                  <Mail size={16} className="input-icon" />
                  <input 
                    id="forms-email-input"
                    type="email" 
                    placeholder={isLogin ? "e.g. name@example.rw" : "aline.keza@email.rw"} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="input-group">
                  <label htmlFor="forms-phone-input">PHONE NUMBER</label>
                  <div className="input-with-icon">
                    <Phone size={16} className="input-icon" />
                    <input 
                      id="forms-phone-input"
                      type="tel" 
                      placeholder="+250 788 000 000" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="input-group">
                <div className="label-with-aside">
                  <label htmlFor="forms-pwd-input">PASSWORD</label>
                  {isLogin && <a href="#forgot" className="forgot-password-link">Forgot Password?</a>}
                </div>
                <div className="input-with-icon">
                  <Lock size={16} className="input-icon" />
                  <input 
                    id="forms-pwd-input"
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password strength indicator on register */}
              {!isLogin && password && (
                <div className="password-strength-meter">
                  <div className="meter-bar active"></div>
                  <div className="meter-bar active"></div>
                  <div className="meter-bar"></div>
                  <div className="meter-bar"></div>
                  <span className="strength-text font-human">PASSWORD STRENGTH: MEDIUM</span>
                </div>
              )}

              {/* Checkboxes / Terms */}
              <div className="terms-checkbox-row">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={isLogin ? agree : agree} 
                    onChange={(e) => setAgree(e.target.checked)} 
                  />
                  <span>
                    {isLogin 
                      ? 'Stay signed in for 30 days' 
                      : 'I agree to the Terms of Service and Privacy Policy.'}
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
                {loading 
                  ? 'Connecting...' 
                  : isLogin 
                  ? <>Sign In <ArrowRight size={16} /></> 
                  : 'Create Account'}
              </button>

            </form>

            <div className="toggle-auth-direction font-human">
              {isLogin ? (
                <p>New to NDIHO Space? <button onClick={() => setIsLogin(false)}>Create an account</button></p>
              ) : (
                <p>Already have an account? <button onClick={() => setIsLogin(true)}>Sign In</button></p>
              )}
            </div>

            <div className="safety-guaranteed-footer">
              <ShieldCheck size={16} className="safety-badge-icon" />
              <span>
                {isLogin 
                  ? 'SECURE 256-BIT SSL | PRIVACY FIRST' 
                  : 'SECURE CONNECTION & DATA PRIVACY GUARANTEED IN RWANDA'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthModal;
