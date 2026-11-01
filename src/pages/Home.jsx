import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Award, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import CompanyIntro from '../components/CompanyIntro';
import ProductCard from '../components/ProductCard';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesSection from '../components/IndustriesSection';
import StrengthsSection from '../components/StrengthsSection';
import VisionSection from '../components/VisionSection';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';
import { categories, getFeaturedProducts } from '../data/products';
import { updateMetaTags } from '../utils/seo';

export default function Home() {
  React.useEffect(() => {
    updateMetaTags(
      'ChemSeva Chemicals Pvt. Ltd. | Reliable Defoamer & Specialty Chemical Solutions',
      'Your dependable partner for industrial defoamers and specialty chemical solutions, focused on quality, value, and responsive customer support.'
    );
  }, []);

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* 3. Hero Banner */}
      <Hero />

      {/* 4. Company Introduction */}
      <CompanyIntro />

      {/* 5. Product Category Showcase */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Catalogue Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
                Product Categories
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Explore our specialized spectrum of defoamers, emulsions, and industrial processing chemicals.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark group"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface group-hover:bg-primary/10 text-primary flex items-center justify-center mb-4 transition-colors">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy group-hover:text-primary transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{cat.productCount} Formulations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full">
                High Demand
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
                Featured Chemical Products
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Reliable defoamers and chemical formulations tested for high knockdown efficiency and batch durability.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline group"
            >
              <span>Explore All Products ({categories.reduce((acc, c) => acc + c.productCount, 0)})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose ChemSeva? */}
      <WhyChooseUs />

      {/* 8. Industries and Applications */}
      <IndustriesSection />

      {/* 9. Our Business Strengths */}
      <StrengthsSection />

      {/* 10. Vision Section */}
      <VisionSection />

      {/* Ratings & Customer Satisfaction */}
      <ReviewsSection />

      {/* 11. Business Enquiry CTA */}
      <CTASection />
    </div>
  );
}
