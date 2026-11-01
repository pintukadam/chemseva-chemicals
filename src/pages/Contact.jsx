import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  ShieldCheck, Send, CheckCircle2 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryForm from '../components/EnquiryForm';
import { companyInfo } from '../data/company';
import { updateMetaTags } from '../utils/seo';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || searchParams.get('industry') || '';

  React.useEffect(() => {
    updateMetaTags(
      'Contact Us | ChemSeva Chemicals Pvt. Ltd.',
      'Get in touch with ChemSeva Chemicals Pvt. Ltd. for B2B industrial chemical enquiries, custom defoamer trials, pricing, and bulk delivery across India.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/15 px-3 py-1 rounded-full border border-teal/30">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-3">
            Contact ChemSeva Chemicals
          </h1>
          <p className="text-base text-gray-300 mt-3 max-w-2xl leading-relaxed">
            Connect with our industrial sales and technical desk to discuss your chemical requirements, request product samples, or schedule delivery.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-bold font-heading text-navy mt-1">
                  We Are Ready to Assist You
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Our commercial and technical representatives respond promptly to verified industrial buyer enquiries.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-5 rounded-2xl bg-surface border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400">Phone Support</h4>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-navy hover:text-primary transition-colors block mt-0.5"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Available: {companyInfo.workingHours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-surface border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400">Email Desk</h4>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm sm:text-base font-bold text-navy hover:text-primary transition-colors block mt-0.5"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Send purchase orders, specs & RFP documents
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#1B8841]">Instant Messaging</h4>
                    <a
                      href={getWhatsAppLink("Hello ChemSeva Chemicals, I would like to inquire about your chemical products.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-navy hover:text-teal transition-colors block mt-0.5"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                    <p className="text-[11px] text-gray-600 mt-1">
                      Instant response for price requests & product questions
                    </p>
                  </div>
                </div>

                {/* Address Placeholder */}
                <div className="p-5 rounded-2xl bg-surface border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-400">Office / Sourcing Hub</h4>
                    <p className="text-sm font-semibold text-navy mt-0.5">
                      {companyInfo.address}
                    </p>
                    <p className="text-xs text-gray-500">
                      {companyInfo.city}, {companyInfo.state}
                    </p>
                    <p className="text-[11px] text-gray-400 italic mt-1">
                      (Google Maps link will be enabled once registered address is verified)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Guarantee Note */}
              <div className="p-4 rounded-xl bg-teal/10 border border-teal/20 text-xs text-navy flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-teal shrink-0" />
                <span>
                  <strong>B2B Direct Supply:</strong> Standard batch COA provided upon request for all dispatches.
                </span>
              </div>
            </div>

            {/* Right Column: Commercial Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm prefilledProduct={prefilledProduct} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
