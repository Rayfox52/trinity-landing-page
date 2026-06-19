import React from 'react';
import { CheckCircle2, BadgeCheck } from 'lucide-react';

export default function Pricing({ onCheckout }) {
  return (
    <section className="py-20 glass-card rounded-[2.5rem] border border-white/10" id="pricing">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cloud SaaS */}
          <div className="glass-card p-10 rounded-2xl flex flex-col border border-white/10">
            <div className="mb-8">
              <span className="text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase mb-2 block">
                Standard access
              </span>
              <h3 className="text-display-lg font-display-lg mb-4 text-cyber-cyan">
                $49<span className="text-headline-md text-on-surface-variant">/mo</span>
              </h3>
              <p className="text-on-surface-variant font-body-md">
                Cloud-Based SaaS Platform
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <CheckCircle2 className="text-green-400 w-5 h-5" /> Cloud LLM Analysis
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <CheckCircle2 className="text-green-400 w-5 h-5" /> Cloud Forecasting
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <CheckCircle2 className="text-green-400 w-5 h-5" /> Standard Cloud Execution
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <CheckCircle2 className="text-green-400 w-5 h-5" /> Telegram Signal Alerts
              </li>
            </ul>
            <button 
              onClick={() => onCheckout('Standard Cloud Access', '$49')}
              className="w-full py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors"
            >
              Choose Cloud
            </button>
          </div>
          {/* On-Premise Enterprise */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-neon-rose/20 opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="glass-card p-10 h-full relative z-10 flex flex-col border border-cyber-cyan/30">
              <div className="mb-8">
                <div className="inline-block px-2 py-0.5 rounded bg-cyber-cyan text-background text-[10px] font-bold uppercase mb-4 tracking-tighter">
                  Recommended for Whales
                </div>
                <span className="text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase mb-2 block">
                  Full Control
                </span>
                <h3 className="text-display-lg font-display-lg mb-4">Enterprise</h3>
                <p className="text-on-surface-variant font-body-md">
                  Annual License / On-Premise
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-cyber-cyan w-5 h-5" /> 100% Local GPU Execution
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-cyber-cyan w-5 h-5" /> Custom Trained LLM Layers
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="text-cyber-cyan w-5 h-5" /> Total Data Privacy & Sovereignty
                </li>
              </ul>
              <button 
                onClick={() => onCheckout('Enterprise Local Deployment', '$599')}
                className="w-full py-4 rounded-full bg-on-surface text-background font-bold hover:opacity-90 transition-opacity"
              >
                Choose On-Premise
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
