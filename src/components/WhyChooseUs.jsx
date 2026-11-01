import React from 'react';
import { 
  Handshake, Factory, ShieldCheck, Users, 
  IndianRupee, Truck, Clock, Scale, TrendingUp 
} from 'lucide-react';
import { whyChooseUs } from '../data/company';

const iconMap = {
  Handshake,
  Factory,
  ShieldCheck,
  Users,
  IndianRupee,
  Truck,
  Clock,
  Scale,
  TrendingUp,
};

export default function WhyChooseUs({ showHeader = true }) {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
              Why Choose ChemSeva Chemicals?
            </h2>
            <p className="text-base text-gray-600 mt-3 leading-relaxed">
              We stand apart through dependable sourcing, stringent quality control, and customer-first distribution across Indian markets.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface group-hover:bg-primary/10 text-primary flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-teal transition-colors font-mono">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-1.5 text-xs font-semibold text-teal">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Committed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
