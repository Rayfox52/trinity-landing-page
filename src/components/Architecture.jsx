import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Newspaper, LineChart, Landmark } from 'lucide-react';

const carouselImages = [
  "./atas.png",
  "./agen_a.png",
  "./agen_b.png",
  "./agen_c.png"
];

export default function Architecture() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveCarousel = (dir) => {
    setCurrentSlide((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <section className="py-20 glass-card rounded-[2.5rem] border border-white/10 relative overflow-hidden" id="features">
        <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display-lg text-headline-md mb-4 uppercase tracking-tight">
              System Interface Gallery
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Visualizing the Trinity ecosystem across multiple terminal layers.
            </p>
          </div>
          <div className="relative group">
            {/* Apple Pro Display Container */}
            <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              {/* Carousel Wrapper */}
              <div
                className="flex transition-transform duration-500 ease-out h-full w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((src, idx) => (
                  <div key={idx} className="min-w-full h-full flex items-center justify-center bg-black">
                    <img
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-contain"
                      src={src}
                    />
                  </div>
                ))}
              </div>
              {/* Navigation Controls */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface hover:bg-cyber-cyan/20 hover:text-cyber-cyan transition-all opacity-0 group-hover:opacity-100"
                onClick={() => moveCarousel(-1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface hover:bg-neon-rose/20 hover:text-neon-rose transition-all opacity-0 group-hover:opacity-100"
                onClick={() => moveCarousel(1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide ? 'bg-cyber-cyan w-6' : 'bg-white/20 w-2'
                  }`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 glass-card rounded-[2.5rem] border border-white/10 relative overflow-hidden" id="architecture">
        <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md mb-4 uppercase tracking-tight">
              The 3-Agent Brain
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Absolute data integrity maintained through three specialized neural systems working in parallel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Agent A */}
            <div className="glass-card p-8 rounded-xl group hover:border-cyber-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 flex items-center justify-center mb-6 text-cyber-cyan">
                <Newspaper className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Agent A</h3>
              <p className="text-on-surface-variant font-label-sm text-label-sm mb-4 tracking-wider uppercase">
                Lead Fundamentalist
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The pulse of the market, synthesized instantly. This intelligent agent continuously scans and decodes global financial news streams in real-time, stripping away the noise to extract objective, high-precision market sentiment scores.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              </div>
            </div>
            {/* Agent B */}
            <div className="glass-card p-8 rounded-xl group hover:border-neon-rose/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-neon-rose/10 flex items-center justify-center mb-6 text-neon-rose">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Agent B</h3>
              <p className="text-on-surface-variant font-label-sm text-label-sm mb-4 tracking-wider uppercase">
                Technician Analyst
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Autonomous chart mastery. Operating with institutional-grade precision, this agent analyzes historical price action, patterns, and complex technical indicators to accurately project upcoming trend directions and market momentum for the next session.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              </div>
            </div>
            {/* Agent C */}
            <div className="glass-card p-8 rounded-xl group hover:border-white/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-on-surface/10 flex items-center justify-center mb-6 text-on-surface">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Agent C</h3>
              <p className="text-on-surface-variant font-label-sm text-label-sm mb-4 tracking-wider uppercase">
                The Treasurer
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The ultimate algorithmic risk manager. By fusing the core insights of both the Fundamentalist and the Technician, this advanced risk engine calculates optimal capital allocation and dynamically sets hyper-precise Take Profit and Stop Loss levels—permanently eliminating human emotional bias from your portfolio.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
