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
            onSelectMood={() => handleSelectService('Individual Therapy')}
          />
          <Services onSelectService={handleSelectService} />
          <VideoTherapy onBookNow={handleNavigateToBooking} />
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
