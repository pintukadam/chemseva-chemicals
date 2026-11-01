import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Clock, Menu, X, ChevronDown, 
  FlaskConical, ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { categories } from '../data/products';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Products', 
      path: '/products', 
      hasDropdown: true 
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white shadow-sm transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-navy text-gray-200 text-xs py-2 px-4 border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-teal transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal" />
              <span>{companyInfo.phone}</span>
            </a>
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-teal transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal" />
              <span>{companyInfo.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-teal" />
              <span>{companyInfo.workingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-block text-gray-300">
              Reliable Defoamers & Specialty Chemicals
            </span>
            <span className="hidden sm:inline-block text-gray-500">|</span>
            <a
              href={getWhatsAppLink('Hello ChemSeva Chemicals, I would like to make an industrial enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline font-medium flex items-center gap-1"
            >
              Quick WhatsApp Enquiry &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-navy flex items-center justify-center border border-navy-light/30 shadow-md group-hover:border-teal transition-all">
              <img 
                src="/logo.jpg" 
                alt="ChemSeva Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-navy">
                CHEMSEVA
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-primary -mt-1">
                Chemicals Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                        isActive(link.path) 
                          ? 'text-primary font-bold' 
                          : 'text-dark hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-fadeIn">
                        <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Product Categories
                          </span>
                          <Link 
                            to="/products" 
                            className="text-xs text-primary font-medium hover:underline"
                          >
                            View All ({categories.length})
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1 pt-2">
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${encodeURIComponent(cat.name)}`}
                              className="px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-surface hover:text-primary transition-colors flex items-center justify-between group/item"
                            >
                              <span>{cat.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors py-2 relative ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-dark hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-md bg-primary text-white text-xs font-semibold"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-dark hover:bg-surface focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 mt-3 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  location.pathname === '/' ? 'bg-surface text-primary' : 'text-dark hover:bg-surface'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  location.pathname === '/about' ? 'bg-surface text-primary' : 'text-dark hover:bg-surface'
                }`}
              >
                About Us
              </Link>

              {/* Products Submenu Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-dark hover:bg-surface"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-surface/60 rounded-lg mt-1">
                    <Link
                      to="/products"
                      className="block px-3 py-1.5 text-xs font-bold text-primary"
                    >
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/products?category=${encodeURIComponent(cat.name)}`}
                        className="block px-3 py-1.5 text-xs text-gray-600 hover:text-primary"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/industries"
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  location.pathname === '/industries' ? 'bg-surface text-primary' : 'text-dark hover:bg-surface'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  location.pathname === '/contact' ? 'bg-surface text-primary' : 'text-dark hover:bg-surface'
                }`}
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-xs text-gray-600 px-3 py-1.5"
                >
                  <Phone className="w-4 h-4 text-teal" />
                  <span>{companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-xs text-gray-600 px-3 py-1.5"
                >
                  <Mail className="w-4 h-4 text-teal" />
                  <span>{companyInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
