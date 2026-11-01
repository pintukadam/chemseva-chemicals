import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, Filter, SlidersHorizontal } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import CategoryNavigation from '../components/CategoryNavigation';
import CTASection from '../components/CTASection';
import { products, categories, searchProducts } from '../data/products';
import { updateMetaTags } from '../utils/seo';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category param with URL
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    updateMetaTags(
      'Product Catalogue | ChemSeva Chemicals Pvt. Ltd.',
      'Explore ChemSeva Chemicals product catalogue: Industrial Defoamers, Silicone Emulsions, Non-Silicone Defoamers, Antifoaming Agents, Wax Emulsions, and Industrial Oils.'
    );
  }, []);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryName);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    let list = products;

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.applications && p.applications.some((app) => app.toLowerCase().includes(q)))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Product Catalogue' }]} />
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/15 px-3 py-1 rounded-full border border-teal/30">
            Chemical Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-3">
            Product Catalogue
          </h1>
          <p className="text-base text-gray-300 mt-3 max-w-2xl leading-relaxed">
            Discover our high-purity defoamers, industrial emulsions, and specialty processing chemicals verified for consistent manufacturing uptime.
          </p>
        </div>
      </div>

      {/* Main Filter & Listing Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Stats Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search defoamers, emulsions, applications..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:border-primary text-xs focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Counter & Reset */}
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>
                Showing <strong className="text-navy">{filteredProducts.length}</strong> of{' '}
                <strong className="text-navy">{products.length}</strong> products
              </span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-teal font-semibold hover:underline flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Navigation Pills */}
          <div className="mb-10">
            <CategoryNavigation
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            emptyMessage={
              searchQuery || selectedCategory !== 'All'
                ? `No products found matching "${searchQuery || selectedCategory}". Try selecting another category or clearing your search.`
                : 'No products currently available.'
            }
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Can't Find Your Exact Formulation?"
        description="We source custom viscosity grades, active contents, and specialty chemical blends based on your operational specifications."
        primaryButtonText="Request Custom Sourcing"
      />
    </div>
  );
}
