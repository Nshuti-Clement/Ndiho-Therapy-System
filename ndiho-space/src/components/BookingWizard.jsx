import React, { useState } from 'react';
import { Calendar, User, CreditCard, ChevronRight, ChevronLeft, CheckCircle2, Clock, ShieldCheck, Heart, ArrowLeft, ShieldAlert, Lock, Phone } from 'lucide-react';
import './BookingWizard.css';

const therapists = [
  {
    id: 1,
    name: 'Dr. Alice Mutoni',
    title: 'Clinical Psychologist',
    rating: '4.9',
    specialty: 'Trauma, Anxiety & PTSD',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    slots: ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'],
    color: '#d3e3ff',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Jean Paul Niyomugabo',
    title: 'Clinical Psychologist',
    rating: '4.8',
    specialty: 'Family & Couples Counseling',
    availableDays: ['Wed', 'Thu', 'Fri'],
    slots: ['10:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'],
    color: '#e2f3d3',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop'
  }
];

const daysInMonth = [
  { dayName: 'MO', dayNum: '25', isCurrent: false },
  { dayName: 'TU', dayNum: '26', isCurrent: false },
  { dayName: 'WE', dayNum: '27', isCurrent: false },
  { dayName: 'TH', dayNum: '28', isCurrent: false },
  { dayName: 'FR', dayNum: '29', isCurrent: false },
  { dayName: 'SA', dayNum: '30', isCurrent: false },
  { dayName: 'SU', dayNum: '1', isCurrent: true },
  { dayName: 'MO', dayNum: '12', isCurrent: true, active: true },
  { dayName: 'TU', dayNum: '13', isCurrent: true },
  { dayName: 'WE', dayNum: '14', isCurrent: true },
  { dayName: 'TH', dayNum: '15', isCurrent: true }
];

const BookingWizard = ({ initialService, onClose }) => {
  const [step, setStep] = useState(1); // 1: Therapist selection, 2: Schedule (Select service & dates), 3: Payment checkout, 4: Receipt
  const [serviceType, setServiceType] = useState(initialService || 'Individual Therapy');
  const [selectedTherapist, setSelectedTherapist] = useState(therapists[0]);
  const [selectedDate, setSelectedDate] = useState('12');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [sessionNotes, setSessionNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('momo'); // momo, card
  const [momoProvider, setMomoProvider] = useState('mtn'); // mtn, airtel
  const [momoPhone, setMomoPhone] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [processing, setProcessing] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleSelectTherapist = (therapist) => {
    setSelectedTherapist(therapist);
    setStep(2);
  };

  const handleConfirmSchedule = () => {
    setStep(3);
  };

  const handlePay = (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setReceiptNumber('NDH-' + Math.floor(100000 + Math.random() * 900000));
      setStep(4);
    }, 2000);
  };

  const getPriceVal = () => {
    switch (serviceType) {
      case 'Couple Therapy': return 55000;
      case 'Family Therapy': return 65000;
      case 'Group Session': return 15000;
      default: return 45000;
    }
  };

  const getPriceStr = () => {
    return getPriceVal().toLocaleString() + ' RWF';
  };

  const getDuration = () => {
    switch (serviceType) {
      case 'Family Therapy': return '90 mins';
      case 'Couple Therapy': return '75 mins';
      case 'Group Session': return '90 mins';
      default: return '60 mins';
    }
  };

  return (
    <div id="booking-wizard-root" className="booking-page-root">
      
      {/* Navbar replacement back button header */}
      <div className="booking-wizard-header container">
        <button className="back-btn" onClick={() => step > 1 ? setStep(step - 1) : onClose && onClose()}>
          <ArrowLeft size={18} />
          <span>NDIHO Space</span>
        </button>
      </div>

      {step === 1 && (
        <div className="booking-container container animate-fade-in">
          <div className="wizard-step-header text-center">
            <span className="mood-chip">CHOOSE YOUR PRACTITIONER</span>
            <h2 className="main-step-title">Select a Therapist</h2>
            <p className="main-step-subtitle">Connect with a certified expert who fits your path toward wellbeing.</p>
          </div>

          <div className="therapists-selection-grid">
            {therapists.map((therapist) => (
              <div 
                key={therapist.id} 
                className="therapist-card-select"
                onClick={() => handleSelectTherapist(therapist)}
              >
                <img src={therapist.image} alt={therapist.name} className="therapist-select-img" />
                <div className="therapist-select-info">
                  <h4>{therapist.name}</h4>
                  <p className="therapist-select-title">{therapist.title}</p>
                  <p className="therapist-select-spec">{therapist.specialty}</p>
                  <div className="therapist-select-rating">
                    <span>★ {therapist.rating} Therapist Rating</span>
                  </div>
                </div>
                <button className="btn btn-secondary select-therapist-btn">Select & Schedule</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="booking-container container animate-fade-in">
          
          {/* Form Step indicators */}
          <div className="wizard-step-header-stepper">
            <div className="stepper-nav">
              <div className="step-item completed">
                <span className="step-num-icon">✓</span>
                <span className="step-label-text">Therapist</span>
              </div>
              <div className="step-line active"></div>
              <div className="step-item active">
                <span className="step-num-icon">2</span>
                <span className="step-label-text">Schedule</span>
              </div>
              <div className="step-line"></div>
              <div className="step-item">
                <span className="step-num-icon">3</span>
                <span className="step-label-text">Payment</span>
              </div>
            </div>
            <h2 className="main-step-title">Schedule Your Session</h2>
            <p className="main-step-subtitle">Find a time that works best for your journey.</p>
          </div>

          <div className="schedule-workspace-layout">
            {/* Left side: Selections & Cal */}
            <div className="schedule-left-column">
              
              {/* Select Service Section */}
              <div className="booking-section-card">
                <div className="section-card-header">
                  <span className="section-card-icon">🗂️</span>
                  <h3>Select Service</h3>
                </div>
                <div className="service-options-grid">
                  <div 
                    className={`service-option-box ${serviceType === 'Individual Therapy' ? 'active' : ''}`}
                    onClick={() => setServiceType('Individual Therapy')}
                  >
                    <div className="option-checkbox-indicator">
                      {serviceType === 'Individual Therapy' && <span className="check-dot"></span>}
                    </div>
                    <User size={18} className="service-icon" />
                    <h4>Individual Therapy</h4>
                    <p className="service-box-desc">Personalized one-on-one sessions tailored to your needs.</p>
                    <div className="service-box-footer">
                      <span className="service-box-price">45,000 RWF</span>
                      <span className="service-box-duration">60 mins</span>
                    </div>
                  </div>

                  <div 
                    className={`service-option-box ${serviceType === 'Family Therapy' ? 'active' : ''}`}
                    onClick={() => setServiceType('Family Therapy')}
                  >
                    <div className="option-checkbox-indicator">
                      {serviceType === 'Family Therapy' && <span className="check-dot"></span>}
                    </div>
                    <User size={18} className="service-icon" />
                    <h4>Family Therapy</h4>
                    <p className="service-box-desc">Collaborative sessions for couples or family members.</p>
                    <div className="service-box-footer">
                      <span className="service-box-price">65,000 RWF</span>
                      <span className="service-box-duration">90 mins</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choose Date & Time Section */}
              <div className="booking-section-card">
                <div className="section-card-header">
                  <span className="section-card-icon">📅</span>
                  <h3>Choose Date & Time</h3>
                </div>
                
                <div className="calendar-month-selector">
                  <h4>October 2023</h4>
                  <div className="calendar-nav-buttons">
                    <button><ChevronLeft size={16} /></button>
                    <button><ChevronRight size={16} /></button>
                  </div>
                </div>

                <div className="calendar-table-custom">
                  <div className="cal-days-header">
                    <span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span>
                  </div>
                  <div className="cal-days-body">
                    {/* Mock padding/previous month days */}
                    <span className="day-empty">25</span>
                    <span className="day-empty">26</span>
                    <span className="day-empty">27</span>
                    <span className="day-empty">28</span>
                    <span className="day-empty">29</span>
                    <span className="day-empty">30</span>
                    <span className="day-empty">1</span>
                    {/* Active days */}
                    <button 
                      className={`cal-day-btn ${selectedDate === '12' ? 'active' : ''}`}
                      onClick={() => setSelectedDate('12')}
                    >12</button>
                    <button 
                      className={`cal-day-btn ${selectedDate === '13' ? 'active' : ''}`}
                      onClick={() => setSelectedDate('13')}
                    >13</button>
                    <button 
                      className={`cal-day-btn ${selectedDate === '14' ? 'active' : ''}`}
                      onClick={() => setSelectedDate('14')}
                    >14</button>
                    <button 
                      className={`cal-day-btn ${selectedDate === '15' ? 'active' : ''}`}
                      onClick={() => setSelectedDate('15')}
                    >15</button>
                  </div>
                </div>

                <div className="available-times-block">
                  <label className="sub-label">AVAILABLE TIMES</label>
                  <div className="times-slots-grid">
                    {selectedTherapist.slots.map((slot) => (
                      <button
                        key={slot}
                        className={`time-slot-btn ${selectedTime === slot ? 'active' : ''}`}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Session Details Notes */}
              <div className="booking-section-card">
                <div className="section-card-header">
                  <span className="section-card-icon">📝</span>
                  <h3>Session Details</h3>
                </div>
                <div className="input-group">
                  <label className="sub-label">A BRIEF NOTE FOR DR. {selectedTherapist.name.split(' ')[2].toUpperCase()} (OPTIONAL)</label>
                  <textarea 
                    className="details-textarea"
                    placeholder="Tell us what's on your mind or what you'd like to focus on..."
                    value={sessionNotes}
                    onChange={(e) => setSessionNotes(e.target.value)}
                  />
                </div>
                <p className="privacy-note">Your information is strictly confidential and protected by end-to-end encryption.</p>
              </div>

            </div>

            {/* Right side: Summary Sticky Card */}
            <div className="schedule-right-column">
              <div className="sticky-summary-card">
                
                {/* Therapist Summary Header */}
                <div className="summary-therapist-info">
                  <img src={selectedTherapist.image} alt={selectedTherapist.name} className="summary-avatar-img" />
                  <div>
                    <h4>{selectedTherapist.name}</h4>
                    <p className="summary-title-desc">{selectedTherapist.title}</p>
                    <span className="summary-rating-tag">★ {selectedTherapist.rating} Therapist Rating</span>
                  </div>
                </div>

                <div className="summary-divider-line"></div>

                {/* Booking Details */}
                <div className="summary-details-section">
                  <label className="summary-sub-label">BOOKING SUMMARY</label>
                  
                  <div className="summary-item-line">
                    <span className="summary-item-label">Service</span>
                    <span className="summary-item-value">{serviceType}</span>
                  </div>
                  
                  <div className="summary-item-line">
                    <span className="summary-item-label">Duration</span>
                    <span className="summary-item-value">{getDuration()}</span>
                  </div>
                  
                  <div className="summary-item-line">
                    <span className="summary-item-label">Date & Time</span>
                    <span className="summary-item-value highlight-datetime">
                      Oct {selectedDate}, 2023 <br />
                      {selectedTime} (CAT)
                    </span>
                  </div>
                </div>

                <div className="summary-divider-line"></div>

                {/* Pricing block */}
                <div className="summary-total-block">
                  <span className="total-label-text">Total Payable</span>
                  <span className="total-price-text">{getPriceStr()}</span>
                </div>

                <button className="btn btn-primary summary-proceed-btn" onClick={handleConfirmSchedule}>
                  Confirm & Proceed
                </button>

                <div className="payment-brands-logos">
                  <span>💳 VISA</span>
                  <span>💳 Mastercard</span>
                </div>
                <span className="ssl-badge">SECURE SSL ENCRYPTED PAYMENT</span>

              </div>

              {/* Safe Space promise under summary */}
              <div className="safe-space-promise-card">
                <strong>🛡️ SAFE SPACE PROMISE</strong>
                <p>Every session is a judgment-free zone. Your comfort and mental well-being are our primary goals.</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="booking-container container animate-fade-in">
          
          <div className="wizard-step-header text-center">
            <h2 className="main-step-title">Complete your booking</h2>
            <p className="main-step-subtitle">Secure and confidential payment</p>
          </div>

          <div className="payment-checkout-layout">
            
            {/* Selected Therapist Booking Card */}
            <div className="payment-summary-header-card">
              <div className="pay-summary-therapist">
                <img src={selectedTherapist.image} alt={selectedTherapist.name} className="pay-avatar-img" />
                <div>
                  <h4>{selectedTherapist.name}</h4>
                  <p>{selectedTherapist.title}</p>
                </div>
              </div>
              <div className="pay-summary-date-info">
                <span>Tomorrow, Oct {selectedDate} • {selectedTime}</span>
              </div>
              <div className="pay-summary-price">
                <span className="pay-price-label">AMOUNT</span>
                <span className="pay-price-value">{getPriceStr()}</span>
              </div>
            </div>

            {/* Payment Method Details Form */}
            <div className="payment-method-card">
              <label className="payment-label">Payment Method</label>
              
              <div className="payment-tab-selectors">
                <button 
                  type="button" 
                  className={`payment-tab-btn ${paymentMethod === 'momo' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('momo')}
                >
                  <Phone size={16} />
                  Mobile Money
                </button>
                <button 
                  type="button" 
                  className={`payment-tab-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={16} />
                  Cards
                </button>
              </div>

              <form onSubmit={handlePay} className="checkout-payment-form">
                
                {paymentMethod === 'momo' ? (
                  <div className="momo-details-form animate-fade-in">
                    
                    {/* Operator choices */}
                    <div className="momo-operators-row">
                      <label className="operator-radio-btn">
                        <input 
                          type="radio" 
                          name="momoProvider" 
                          checked={momoProvider === 'mtn'} 
                          onChange={() => setMomoProvider('mtn')} 
                        />
                        <span className="operator-custom-radio mtn">MTN</span>
                      </label>
                      <label className="operator-radio-btn">
                        <input 
                          type="radio" 
                          name="momoProvider" 
                          checked={momoProvider === 'airtel' } 
                          onChange={() => setMomoProvider('airtel')} 
                        />
                        <span className="operator-custom-radio airtel">Airtel</span>
                      </label>
                    </div>

                    <div className="input-group">
                      <label htmlFor="checkout-phone-input" className="sub-label">PHONE NUMBER</label>
                      <div className="phone-input-wrapper">
                        <input 
                          id="checkout-phone-input"
                          type="text" 
                          placeholder="078 XXX XXXX" 
                          value={momoPhone}
                          onChange={(e) => setMomoPhone(e.target.value)}
                          required
                        />
                        <span className="country-tag">🇷🇼 RWANDA</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card-details-form animate-fade-in">
                    <div className="input-group">
                      <label htmlFor="checkout-card-input" className="sub-label">CARD NUMBER</label>
                      <input 
                        id="checkout-card-input"
                        type="text" 
                        placeholder="XXXX XXXX XXXX XXXX" 
                        value={cardDetails}
                        onChange={(e) => setCardDetails(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary pay-securely-btn" disabled={processing}>
                  <Lock size={16} />
                  {processing ? 'Verifying payment...' : `Pay ${getPriceStr()} Securely`}
                </button>
              </form>
            </div>

            {/* Certifications and helper guides */}
            <div className="payment-certifications-badges">
              <span>🛡️ SSL ENCRYPTED</span>
              <span>💳 PCI COMPLIANT</span>
              <span>🔒 HIPAA READY</span>
            </div>

            <div className="prompt-authorization-card">
              <span className="prompt-lamp-icon">💡</span>
              <p>A prompt will appear on your phone shortly after clicking pay. Please enter your PIN to authorize the session booking.</p>
            </div>

          </div>
        </div>
      )}

      {step === 4 && (
        <div className="booking-container container success-step-wrapper animate-fade-in">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={48} className="success-check-icon" />
          </div>
          <h2 className="main-step-title">Session Booked Successfully!</h2>
          <p className="main-step-subtitle">Your appointment with {selectedTherapist.name} is confirmed.</p>

          <div className="receipt-box card">
            <div className="receipt-header">
              <Heart className="receipt-heart" size={20} />
              <span>NDIHO SPACE RECEIPT</span>
            </div>
            <div className="receipt-body">
              <div className="receipt-line">
                <span>Receipt Number:</span>
                <span><strong>{receiptNumber}</strong></span>
              </div>
              <div className="receipt-line">
                <span>Practitioner:</span>
                <span>{selectedTherapist.name}</span>
              </div>
              <div className="receipt-line">
                <span>Format:</span>
                <span>{serviceType} ({getDuration()})</span>
              </div>
              <div className="receipt-line">
                <span>Schedule:</span>
                <span>Oct {selectedDate}, 2023 at {selectedTime} (CAT)</span>
              </div>
              <div className="receipt-line">
                <span>Amount Paid:</span>
                <span><strong>{getPriceStr()}</strong></span>
              </div>
              <div className="receipt-line">
                <span>Payment Gateway:</span>
                <span>{paymentMethod === 'momo' ? momoProvider.toUpperCase() + ' Mobile Money' : 'Credit Card'}</span>
              </div>
            </div>
            <div className="receipt-footer">
              <ShieldCheck size={16} />
              <span>AES-256 Confidential Link sent via SMS/Email.</span>
            </div>
          </div>

          <div className="wizard-actions centered">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                setStep(1);
                setSelectedTime('10:30 AM');
                setMomoPhone('');
                if (onClose) onClose();
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BookingWizard;
