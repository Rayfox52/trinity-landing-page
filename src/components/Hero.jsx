import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [pulseOpacity, setPulseOpacity] = useState(0.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseOpacity(Math.random() * 0.3 + 0.7);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden flex flex-col justify-center glass-card rounded-[2.5rem] border border-white/10">
      <div className="max-w-[1200px] mx-auto px-gutter relative z-10 text-center">
        {/* Now Live Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 mb-12 animate-pulse">
          <span
            className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"
            style={{ opacity: pulseOpacity }}
          ></span>
          <span className="font-label-sm text-label-sm text-cyber-cyan uppercase tracking-widest">
            Now Live for Big 3 Tickers
          </span>
        </div>

        {/* TRINITY Retro Block (Moved & Terminal Removed) */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mb-16 relative">
          {/* Top Double Line */}
          <div className="w-full border-t border-b border-[#8ab4f8]/80 h-1.5 mb-8 sm:mb-10"></div>

          {/* TRINITY Text */}
          <h2
            className="text-5xl sm:text-7xl md:text-[6rem] text-[#8ab4f8] mb-6 sm:mb-8"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              WebkitTextStroke: "2px #000000",
              textShadow: "3px 3px 0 #000000, 6px 6px 0 #8ab4f8",
              letterSpacing: "0.05em"
            }}
          >
            TRINITY
          </h2>

          {/* Subtext */}
          <p className="text-[#8ab4f8] tracking-[0.4em] sm:tracking-[0.6em] text-xs sm:text-sm font-mono uppercase mb-8 sm:mb-10 font-bold">
            Agent Ecosystem
          </p>

          {/* Bottom Double Line */}
          <div className="w-full border-t border-b border-[#8ab4f8]/80 h-1.5 mb-4 sm:mb-6"></div>
        </div>

        {/* Original H1 */}
        <h1 className="font-display-lg text-display-lg max-w-4xl mx-auto mb-6">
          Hybrid Intelligence. <br />
          <span className="text-primary-fixed-dim">Engineered for Tech Traders.</span>
        </h1>

        {/* Paragraph */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Autonomous multi-agent AI ecosystem for AAPL, MSFT, and NVDA. Fusing LLM
          news analysis and Deep Learning technical patterns into absolute consensus
          delivered directly to your terminal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#pricing" className="w-full sm:w-auto bg-on-surface text-background px-10 py-4 rounded-full font-label-sm text-label-sm font-bold hover:scale-105 transition-transform inline-flex justify-center items-center">
            Explore Plans
          </a>
          <button className="w-full sm:w-auto text-on-surface px-10 py-4 rounded-full font-label-sm text-label-sm flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 hover:gap-3 transition-all">
            Watch User Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
