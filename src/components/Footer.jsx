import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, FlaskConical, 
  ShieldCheck, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { categories } from '../data/products';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300">
      {/* Top Value Banner */}
      <div className="border-b border-navy-light/40 py-6 px-4 bg-navy-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-heading font-semibold text-sm">
                Quality Verified Industrial Chemical Supply
              </h4>
              <p className="text-xs text-gray-400">
                Every lot inspected and verified before dispatch for continuous reliability.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-teal hover:bg-teal-dark text-white text-xs font-semibold transition-colors"
            >
              Get Business Quote
            </Link>
            <a
              href={getWhatsAppLink('Hello ChemSeva Chemicals, I would like to enquire about your chemical products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-navy flex items-center justify-center border border-teal/40 shadow-md">
                <img 
                  src="/logo.jpg" 
                  alt="ChemSeva Logo" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  CHEMSEVA
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-teal -mt-1">
                  Chemicals Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              {companyInfo.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{companyInfo.address}, {companyInfo.city}, {companyInfo.state}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <span>{companyInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <span>{companyInfo.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal" /> Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal" /> Industries & Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-teal" /> Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 & 5: Product Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light/40 pb-2">
              Product Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="hover:text-teal transition-colors flex items-center gap-1.5 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                  <span className="truncate">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light/40 bg-navy-dark py-4 px-4 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {currentYear} <span className="text-gray-200 font-semibold">{companyInfo.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            <span>B2B Industrial Chemical Trading & Distribution</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-gray-300">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
