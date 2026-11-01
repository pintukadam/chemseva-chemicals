import React from 'react';
import { categories } from '../data/products';

export default function CategoryNavigation({ selectedCategory, onSelectCategory }) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        <button
          onClick={() => onSelectCategory('All')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedCategory === 'All'
              ? 'bg-navy text-white shadow-md'
              : 'bg-surface hover:bg-surface-alt text-dark border border-gray-200'
          }`}
        >
          All Categories
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface hover:bg-surface-alt text-dark border border-gray-200'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
