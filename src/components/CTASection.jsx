import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function CTASection({
  title = "Ready to Discuss Your Chemical Requirements?",
  description = "Get in touch with our team for product specifications, custom defoamer trials, bulk supply quotes, or technical guidance.",
  primaryButtonText = "Request a Business Quote",
  primaryButtonLink = "/contact"
}) {
  return (
    <section className="bg-gradient-to-r from-navy via-navy to-navy-dark text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Industrial B2B Supply</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal hover:bg-teal-dark text-white font-bold text-sm transition-all shadow-lg hover:shadow-teal/20"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppLink("Hello ChemSeva Chemicals, I would like to enquire about your product pricing and availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-teal" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-gray-400">
          Or speak directly to our desk at{' '}
          <a href={`tel:${companyInfo.phone}`} className="text-teal font-semibold hover:underline">
            {companyInfo.phone}
          </a>
          {' '}&bull; {companyInfo.workingHours}
        </div>
      </div>
    </section>
  );
}
