import React from 'react';
import { Menu } from 'lucide-react';

export default function TopNavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] glass-card rounded-full border border-white/10 z-50">
      <div className="flex justify-between items-center h-16 px-6 md:px-10 mx-auto relative">
        <div className="flex-1 flex items-center gap-2">
          <span className="font-display-lg text-headline-md tracking-tighter text-on-surface uppercase">
            The Trinity Agent
          </span>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-sm text-label-sm"
            href="#features"
          >
            Product
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-sm text-label-sm"
            href="#architecture"
          >
            Agents
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-sm text-label-sm"
            href="#journey"
          >
            Journey
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-sm text-label-sm"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <button className="hidden md:block bg-on-surface text-background px-6 py-2 rounded-full font-label-sm text-label-sm hover:opacity-90 active:scale-95 transition-all">
            Get Started
          </button>
          <button className="md:hidden text-on-surface ml-4">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
