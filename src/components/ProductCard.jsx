import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Tag, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 hover:border-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Top Image Container */}
        <div className="relative aspect-[4/3] bg-gradient-to-tr from-surface via-surface-alt to-surface flex items-center justify-center p-6 overflow-hidden border-b border-gray-100">
          <img
            src={product.image || '/images/products/placeholder.jpg'}
            alt={product.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225" viewBox="0 0 300 225"><rect width="100%" height="100%" fill="%23F4F7F9"/><circle cx="150" cy="100" r="45" fill="%23176B87" opacity="0.15"/><path d="M140 80h20v40h-20z M135 120h30v5h-30z" fill="%23176B87"/><text x="50%" y="165" font-family="sans-serif" font-size="12" font-weight="600" fill="%23102D46" text-anchor="middle">${encodeURIComponent(product.name)}</text><text x="50%" y="185" font-family="sans-serif" font-size="10" fill="%231A9B91" text-anchor="middle">ChemSeva Quality Verified</text></svg>`;
            }}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-1 items-start">
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy/90 text-white backdrop-blur-xs">
              {product.category}
            </span>
            {product.featured && (
              <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-teal text-white">
                Featured
              </span>
            )}
          </div>

          {/* Price Badge on Top Right */}
          {product.price && (
            <div className="absolute top-3 right-3 z-20">
              <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs ${
                product.price.includes('₹')
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-white/90 text-navy border border-gray-200'
              }`}>
                {product.price}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5">
          <Link to={`/products/${product.slug}`}>
            <h3 className="font-heading font-bold text-base sm:text-lg text-navy group-hover:text-primary transition-colors line-clamp-1 mb-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 min-h-[32px]">
            {product.shortDescription}
          </p>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-2 gap-2 text-[11px] bg-surface rounded-xl p-2.5 mb-4 border border-gray-100">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">State</span>
              <span className="font-medium text-navy truncate block">
                {product.physicalState || 'Liquid'}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Grade</span>
              <span className="font-medium text-navy truncate block">
                {product.grade || 'Industrial'}
              </span>
            </div>
            <div className="col-span-2 pt-1 border-t border-gray-200/50 flex items-center gap-1.5 text-gray-500">
              <Package className="w-3 h-3 text-teal shrink-0" />
              <span className="truncate">{product.packaging || 'Standard Drum'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-gray-300 hover:border-primary text-navy hover:text-primary text-xs font-semibold transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors shadow-xs"
        >
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
