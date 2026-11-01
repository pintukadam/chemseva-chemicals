import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, emptyMessage = 'No products found matching your criteria.' }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 bg-surface rounded-2xl border border-dashed border-gray-300">
        <p className="text-gray-500 text-sm font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
