import React from 'react';
import { businessStrengths } from '../data/company';
import { Layers, ShieldCheck, MapPin, Lightbulb, TrendingDown, Wrench } from 'lucide-react';

const icons = [Layers, ShieldCheck, MapPin, Lightbulb, TrendingDown, Wrench];

export default function StrengthsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Operational Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
            Our Business Strengths
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Delivering measurable value to industrial manufacturers through dedicated supply capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessStrengths.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="bg-surface rounded-2xl p-6 border border-gray-100 flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-extrabold font-heading text-navy mb-0.5">
                    {item.value}
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
