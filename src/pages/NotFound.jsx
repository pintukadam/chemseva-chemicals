import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, FlaskConical } from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

export default function NotFound() {
  React.useEffect(() => {
    updateMetaTags('404 Page Not Found | ChemSeva Chemicals Pvt. Ltd.');
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface px-4 py-16">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mx-auto">
          <FlaskConical className="w-8 h-8 text-teal" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-extrabold font-heading text-navy block">
            404
          </span>
          <h1 className="text-xl font-bold font-heading text-navy mt-2">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            The page you requested could not be located. It may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-surface hover:bg-surface-alt text-dark border border-gray-200 text-xs font-semibold transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
