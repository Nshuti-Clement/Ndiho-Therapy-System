import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoTherapy from './components/VideoTherapy';
import BookingWizard from './components/BookingWizard';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Individual Therapy');

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    // Smooth scroll to the booking section
    setTimeout(() => {
      const bookingSec = document.getElementById('booking-wizard-root');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToBooking = () => {
    setTimeout(() => {
      const bookingSec = document.getElementById('booking-wizard-root');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
      
      {user ? (
        <>
          <Dashboard user={user} onLogout={handleLogout} />
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Hero 
            onNavigateToBooking={handleNavigateToBooking} 
            onSelectMood={handleSelectService}
          />

          <section id="about" className="page-anchor-section">
            <div className="container">
              <h2>About NDIHO SPACE</h2>
              <p>NDIHO SPACE is a trusted mental health platform that helps individuals, couples, teens, and organizations find safe therapy, training, and expert support in minutes.</p>
            </div>
          </section>

          <Services onSelectService={handleSelectService} />

          <section id="become-therapists" className="page-anchor-section">
            <div className="container">
              <h2>Become Therapists</h2>
              <p>Join our network of licensed professionals, access client referrals, clinical training, and secure therapy tools for delivering care online.</p>
            </div>
          </section>

          <section id="organisations" className="page-anchor-section">
            <div className="container">
              <h2>Organisations</h2>
              <p>Support workplace wellness, school mental health programs, and nonprofit teams with practical counseling services and organizational care packages.</p>
            </div>
          </section>

          <VideoTherapy onBookNow={handleNavigateToBooking} />

          <section id="advice" className="page-anchor-section">
            <div className="container">
              <h2>Advice</h2>
              <p>Find quick mental health tips, coping strategies, and guidance on how to choose the right therapy path for your needs.</p>
            </div>
          </section>

          <section id="faq" className="page-anchor-section">
            <div className="container">
              <h2>FAQ</h2>
              <p>Answers to common questions about booking, privacy, therapy formats, and how our platform keeps your care confidential.</p>
            </div>
          </section>

          <BookingWizard initialService={selectedService} />
          <Contact />
          <Footer />
        </>
      )}

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}

export default App;
