import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PaymentGateway({ onBack, planName, price }) {
  const [status, setStatus] = useState('idle'); // idle, processing, success

  // Menentukan nama variasi paket untuk Umami (Standard Access vs Full Control)
  const currentPlan = planName?.includes('Enterprise') || planName?.toLowerCase().includes('full') 
    ? 'Full Control' 
    : 'Standard Access';

  useEffect(() => {
    // Melacak saat user melihat halaman checkout (memilih paket)
    if (window.umami) {
      window.umami.track(`Plan Selected: ${currentPlan}`, {
        originalPlanName: planName,
        price: price || '$49'
      });
    }
  }, [currentPlan, planName, price]);

  const handlePay = (e) => {
    e.preventDefault();
    
    // Melacak saat user mencoba membayar paket
    if (window.umami) {
      window.umami.track(`Payment Attempt: ${currentPlan}`, {
        price: price || '$49'
      });
    }

    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      
      // Melacak saat pembayaran berhasil
      if (window.umami) {
        window.umami.track(`Payment Success: ${currentPlan}`, {
          price: price || '$49'
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 relative z-10 px-4">
      <div className="max-w-4xl w-full glass-card rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row">

        {/* Left: Order Summary */}
        <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 flex flex-col">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors mb-12 self-start font-label-sm text-label-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="flex-grow">
            <h2 className="text-display-sm font-display-sm mb-2 text-white">Order Summary</h2>
            <p className="text-on-surface-variant text-sm mb-8">Secure checkout powered by Trinity Protocol.</p>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-white">{planName || 'Standard Access'}</span>
                <span className="font-bold text-cyber-cyan">{price || '$49'}/mo</span>
              </div>
              <div className="text-sm text-on-surface-variant space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{price || '$49'}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (0%)</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className="border-t border-white/10 mt-4 pt-4 flex justify-between items-center font-bold text-white">
                <span>Total Due Today</span>
                <span className="text-xl">{price || '$49'}.00</span>
              </div>
            </div>

            {/* Feature List */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3">What's included:</h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                {planName?.includes('Enterprise') ? (
                  <>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyber-cyan" /> Full Local Inference</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyber-cyan" /> Custom Trained LLM Layers</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyber-cyan" /> Total Data Privacy & Sovereignty</li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Cloud LLM Analysis</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Cloud Forecasting</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Standard Cloud Execution</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Telegram Signal Alerts</li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>End-to-end encrypted. 256-bit secure connection.</span>
            </div>
          </div>
        </div>

        {/* Right: Payment Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full text-center transition-all duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-headline-md font-bold mb-2 text-white">Payment Successful!</h3>
              <p className="text-on-surface-variant mb-8">Welcome to the Trinity Agent Ecosystem.</p>
              <button
                onClick={onBack}
                className="w-full py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
              >
                Access Terminal
              </button>
            </div>
          ) : (
            <form onSubmit={handlePay} className="flex flex-col h-full">
              <h2 className="text-headline-md font-bold mb-6 text-white flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-cyber-cyan" /> Payment Method
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="trader@example.com"
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Card Details</label>
                  <div className="border border-white/10 rounded-xl overflow-hidden focus-within:border-cyber-cyan/50 transition-colors bg-black/30">
                    <input
                      type="text"
                      required
                      placeholder="Card number"
                      className="w-full bg-transparent border-b border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none"
                    />
                    <div className="flex">
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-1/2 bg-transparent border-r border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        className="w-1/2 bg-transparent px-4 py-3 text-white placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Cardholder Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Name on card"
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  disabled={status === 'processing'}
                  className="w-full py-4 rounded-full bg-cyber-cyan text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'processing' ? (
                    <>Processing...</>
                  ) : (
                    <><Lock className="w-4 h-4" /> Pay {price || '$49'}.00</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
