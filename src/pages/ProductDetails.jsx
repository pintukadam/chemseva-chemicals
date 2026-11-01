import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Package, Layers, 
  ShieldCheck, FileText, Send, MessageSquare 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import EnquiryForm from '../components/EnquiryForm';
import CTASection from '../components/CTASection';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { updateMetaTags } from '../utils/seo';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (product) {
      updateMetaTags(
        `${product.name} | ChemSeva Chemicals Pvt. Ltd.`,
        `${product.shortDescription} Supplied by ChemSeva Chemicals Pvt. Ltd.`
      );
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6 text-sm">
          The chemical product you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  return (
    <div className="flex flex-col">
      {/* Top Breadcrumb Header */}
      <div className="bg-surface border-b border-gray-200/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Products', path: '/products' },
              { label: product.category, path: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      {/* Main Product Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="aspect-[4/3] bg-gradient-to-tr from-surface via-surface-alt to-surface rounded-3xl border border-gray-200 p-8 flex items-center justify-center overflow-hidden shadow-sm relative">
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy text-white">
                    {product.category}
                  </span>

                  <img
                    src={product.image || '/images/products/placeholder.jpg'}
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%23F4F7F9"/><circle cx="200" cy="130" r="60" fill="%23176B87" opacity="0.15"/><path d="M190 100h20v60h-20z M180 160h40v8h-40z" fill="%23176B87"/><text x="50%" y="220" font-family="sans-serif" font-size="14" font-weight="600" fill="%23102D46" text-anchor="middle">${encodeURIComponent(product.name)}</text><text x="50%" y="245" font-family="sans-serif" font-size="11" fill="%231A9B91" text-anchor="middle">ChemSeva Quality Inspected</text></svg>`;
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Quick Info Badges */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-surface border border-gray-100 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
                    <span className="text-gray-700">Pre-Dispatch Inspection</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-gray-100 flex items-center gap-2">
                    <Package className="w-4 h-4 text-teal shrink-0" />
                    <span className="text-gray-700">Industrial Packaging</span>
                  </div>
                </div>

                {/* WhatsApp Quick Inquire Button */}
                <div className="mt-4">
                  <a
                    href={getWhatsAppLink(`Hello ChemSeva Chemicals, I am interested in getting a quote and technical datasheet for ${product.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Specs */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {product.category}
                  </span>
                  {product.price && (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
                      {product.price}
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-navy mt-1 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                  {product.description || product.shortDescription}
                </p>
              </div>

              {/* Key Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-surface border border-gray-100">
                  <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">
                    Physical State
                  </span>
                  <span className="text-sm font-bold text-navy mt-0.5 block">
                    {product.physicalState || 'Liquid'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface border border-gray-100">
                  <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">
                    Grade
                  </span>
                  <span className="text-sm font-bold text-navy mt-0.5 block">
                    {product.grade || 'Industrial Grade'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface border border-gray-100">
                  <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">
                    Standard Packaging
                  </span>
                  <span className="text-sm font-bold text-navy mt-0.5 block">
                    {product.packaging || '50 Kg / 200 Kg Drum'}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal" />
                    <span>Technical Specifications</span>
                  </h3>
                  <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-surface text-gray-600 uppercase font-semibold text-[11px] border-b border-gray-200">
                        <tr>
                          <th className="py-3 px-4 w-1/2">Parameter</th>
                          <th className="py-3 px-4 w-1/2">Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {Object.entries(product.specifications).map(([key, val], idx) => (
                          <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface/50'}>
                            <td className="py-2.5 px-4 font-medium text-gray-700">{key}</td>
                            <td className="py-2.5 px-4 font-semibold text-navy">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Applications List */}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">
                    Recommended Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-surface border border-gray-100 text-xs font-medium text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* In-page Enquiry Form */}
              <div className="pt-6 border-t border-gray-100">
                <EnquiryForm prefilledProduct={product.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-surface border-t border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Similar Solutions
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-navy mt-1">
                  Related Products
                </h3>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-bold text-primary hover:underline"
              >
                More in {product.category} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
