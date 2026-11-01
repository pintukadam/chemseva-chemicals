import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ArrowRight, ShieldCheck, 
  FlaskConical, CheckCircle2, PackageCheck 
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function CompanyIntro() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About ChemSeva Chemicals</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy tracking-tight leading-tight">
              Dependable Defoamer & Specialty Chemical Sourcing Across India
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              {companyInfo.description}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Operating in industrial chemical trading and distribution, we partner with reputable manufacturers to supply high-consistency defoaming agents, anti-foams, silicone and wax emulsions, and process oils. Our primary focus is solving foam control and processing challenges across diverse industrial production setups.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Strict pre-dispatch quality verification',
                'Comprehensive defoamer product range',
                'Practical application-based recommendations',
                'Reliable scheduled logistics support',
                'Competitive, value-driven pricing',
                'Transparent and ethical commercial terms'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-gray-700">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark group"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Focus Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-md">
                <FlaskConical className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold font-heading text-navy mb-3">
                Trading & Distribution Specialization
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We understand that every manufacturing operation has distinct viscosity, pH, temperature, and foam-suppression needs. Our sourcing team matches verified formulations to your specific operating conditions.
              </p>

              <div className="space-y-3 border-t border-gray-200/60 pt-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Business Model:</span>
                  <span className="font-semibold text-navy">B2B Trading & Distribution</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Core Specialty:</span>
                  <span className="font-semibold text-navy">Defoamers & Emulsions</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Market Coverage:</span>
                  <span className="font-semibold text-teal font-medium">Pan-India Markets</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Batch Consistency:</span>
                  <span className="font-semibold text-teal font-medium">100% Inspected Lots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
