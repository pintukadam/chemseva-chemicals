import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, HeartHandshake, 
  Target, Award, Users, CheckCircle2, ArrowRight 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import WhyChooseUs from '../components/WhyChooseUs';
import VisionSection from '../components/VisionSection';
import CompanyFactsheet from '../components/CompanyFactsheet';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/company';
import { updateMetaTags } from '../utils/seo';

export default function About() {
  React.useEffect(() => {
    updateMetaTags(
      'About ChemSeva Chemicals Pvt. Ltd. | Industrial Chemical Partner',
      'Learn about ChemSeva Chemicals Pvt. Ltd. - Our business approach, 9 key strengths, customer commitment, and company vision for Indian chemical markets.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/15 px-3 py-1 rounded-full border border-teal/30">
            Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-3">
            About ChemSeva Chemicals
          </h1>
          <p className="text-base text-gray-300 mt-3 max-w-2xl leading-relaxed">
            Your dependable partner for industrial defoamers and specialty chemical solutions, focused on quality, value, and responsive customer support.
          </p>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
                Who We Are & What We Do
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                ChemSeva Chemicals Pvt. Ltd. is dedicated to industrial chemical trading and distribution. Our core positioning is rooted in supplying dependable defoamers and specialty chemical solutions tailored to the operational demands of manufacturing facilities across India.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We bridge the gap between reputable chemical manufacturing facilities and industrial end-users who require consistency, prompt availability, and practical application understanding. Whether it is tackling challenging foaming in effluent treatment or optimizing release in paper and textile manufacturing, we offer tested solutions that protect process uptime.
              </p>

              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface border border-gray-100">
                  <h4 className="font-bold text-navy text-sm mb-1">Trading & Distribution</h4>
                  <p className="text-xs text-gray-600">Reliable raw material sourcing partnerships ensuring continuous batch availability.</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-gray-100">
                  <h4 className="font-bold text-navy text-sm mb-1">Focus on Defoamers</h4>
                  <p className="text-xs text-gray-600">Comprehensive range of silicone emulsions, non-silicone defoamers, and antifoams.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface rounded-3xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-navy mb-4">
                Our Business Approach
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Our approach is straightforward: combine practical chemical insight with transparent operations. We don't just sell products; we verify the lot, explain usage nuances, and ensure safe, timely arrival at your factory gates.
              </p>

              <div className="space-y-3">
                {[
                  'Direct engagement with technical and purchase teams',
                  'Application-specific product recommendations',
                  'Rigorous pre-dispatch testing protocols',
                  'Scheduled delivery with batch traceability',
                  'Honest, transparent commercial dealings'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Commitment Section */}
      <section className="py-14 bg-surface border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Promise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
              Customer Commitment
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We believe customer trust is earned batch by batch. We pledge to maintain unwavering standards of transparency, quality consistency, and responsive support for every order, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Company Factsheet & Team Structure */}
      <CompanyFactsheet />

      {/* Nine Key Strengths (Why Choose Us) */}
      <WhyChooseUs />

      {/* Company Vision */}
      <VisionSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
