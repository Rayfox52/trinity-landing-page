import React, { useState } from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Journey from './components/Journey';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PaymentGateway from './components/PaymentGateway';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [checkoutData, setCheckoutData] = useState({ planName: '', price: '' });

  const handleCheckout = (planName, price) => {
    setCheckoutData({ planName, price });
    setCurrentPage('payment');
    window.scrollTo(0, 0);
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="dark bg-background min-h-screen line-pattern">
      <TopNavBar />
      <main className="w-full px-4 md:px-8 pt-32 pb-6">
        {currentPage === 'landing' ? (
          <div className="space-y-6">
            <Hero />
            <Architecture />
            <Journey />
            <Pricing onCheckout={handleCheckout} />
            <Footer />
          </div>
        ) : (
          <PaymentGateway 
            onBack={handleBackToLanding} 
            planName={checkoutData.planName}
            price={checkoutData.price}
          />
        )}
      </main>
    </div>
  );
}

export default App;
