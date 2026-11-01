import React from 'react';
import { Target, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import { vision } from '../data/company';

export default function VisionSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-navy via-navy to-navy-dark text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-xs font-semibold uppercase tracking-wider mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Guiding Principle</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-8">
          Company Vision
        </h2>

        {/* Vision Statement Box */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 relative shadow-2xl">
          <div className="text-4xl text-teal/40 font-serif leading-none select-none mb-3">
            “
          </div>
          <blockquote className="text-lg sm:text-2xl font-light leading-relaxed text-gray-100 max-w-4xl mx-auto italic">
            {vision}
          </blockquote>
          <div className="text-4xl text-teal/40 font-serif leading-none select-none mt-3 text-right">
            ”
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Quality Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Responsive Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Trust & Integrity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Mutual Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
