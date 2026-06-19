import React from 'react';

export default function Journey() {
  return (
    <section className="py-20 glass-card rounded-[2.5rem] border border-white/10" id="journey">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md mb-4 uppercase tracking-tight">
            Your Path to Consensus
          </h2>
        </div>
        <div className="relative">
          {/* Progress Line */}
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center mb-6 font-bold text-cyber-cyan">
                01
              </div>
              <h4 className="font-headline-md text-body-lg mb-2">Onboarding</h4>
              <p className="text-on-surface-variant text-body-md">
                Seamless Stripe integration for rapid subscription activation.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center mb-6 font-bold text-cyber-cyan">
                02
              </div>
              <h4 className="font-headline-md text-body-lg mb-2">Authentication</h4>
              <p className="text-on-surface-variant text-body-md">
                Unique secure token delivered via Telegram deep link.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center mb-6 font-bold text-cyber-cyan">
                03
              </div>
              <h4 className="font-headline-md text-body-lg mb-2">Activation</h4>
              <p className="text-on-surface-variant text-body-md">
                Run 'trinity login' in your local terminal for handshake.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center mb-6 font-bold text-cyber-cyan">
                04
              </div>
              <h4 className="font-headline-md text-body-lg mb-2">Monitoring</h4>
              <p className="text-on-surface-variant text-body-md">
                24/7 autonomous monitoring with real-time signal pings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
