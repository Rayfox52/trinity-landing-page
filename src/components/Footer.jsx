import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 glass-card rounded-[2.5rem] border border-white/10">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display-lg text-headline-md text-on-surface uppercase tracking-tighter">
              The Trinity Agent
            </span>
            <p className="text-on-surface-variant font-body-md text-center md:text-left">
              Engineered by Studio Shodwe. Total AI financial sovereignty.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
              href="#"
            >
              X / Twitter
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
              href="#"
            >
              TikTok
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
              href="#"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
          <p>© 2024 Studio Shodwe. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-on-surface" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface" href="#">
              Terms of Service
            </a>
            <a className="hover:text-on-surface" href="#">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
