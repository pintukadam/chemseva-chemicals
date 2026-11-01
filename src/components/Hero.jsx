import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, 
  Truck, Award, Sparkles, PhoneCall 
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-navy-dark text-white overflow-hidden py-16 lg:py-24">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A9B91_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative gradient glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industrial Chemical Trading & Distribution</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
              Reliable Defoamer & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-teal to-primary-light">
                Specialty Chemical Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Your dependable partner for industrial defoamers and specialty chemical solutions, focused on quality, value, and responsive customer support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal hover:bg-teal-dark text-white font-semibold text-sm transition-all shadow-lg hover:shadow-teal/25 hover:-translate-y-0.5"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-teal" />
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>100% Quality Checked Lots</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal shrink-0" />
                <span>Pan-India Distribution</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                <span>Ethical & Transparent Deals</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute top-4 right-4 bg-teal text-navy text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                B2B Focus
              </div>

              <h3 className="text-white font-heading font-bold text-lg mb-2">
                Defoamers & Process Chemicals
              </h3>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                Formulated for textile mills, effluent treatment, paper manufacturing, paints, sugar plants, and chemical synthesis.
              </p>

              {/* Core Offerings List */}
              <div className="space-y-3 mb-6">
                {[
                  { name: 'Silicone Defoaming Emulsions', tag: 'Fast Foam Knockdown' },
                  { name: 'Non-Silicone Defoamers', tag: 'High Stability' },
                  { name: 'Specialty Wax & Silicone Emulsions', tag: 'Uniform Dispersion' },
                  { name: 'Industrial Lubricants & Process Oils', tag: 'High Purity' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-teal/40 transition-colors"
                  >
                    <span className="text-xs font-medium text-white">{item.name}</span>
                    <span className="text-[10px] text-teal bg-teal/10 px-2 py-0.5 rounded font-mono">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Enquiry Prompt */}
              <div className="bg-gradient-to-r from-primary/30 to-teal/30 p-4 rounded-xl border border-teal/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Need a custom chemical solution?</div>
                  <div className="text-[11px] text-gray-300">Talk directly with our product team.</div>
                </div>
                <Link
                  to="/contact"
                  className="px-3.5 py-1.5 rounded-lg bg-white text-navy font-semibold text-xs hover:bg-teal hover:text-white transition-colors shrink-0"
                >
                  Ask Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
