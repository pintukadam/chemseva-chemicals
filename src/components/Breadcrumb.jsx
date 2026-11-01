import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center text-xs text-gray-500 py-3 mb-6" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-1.5 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-navy truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-primary transition-colors truncate">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
