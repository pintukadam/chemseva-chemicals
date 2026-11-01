import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shirt, Droplets, FileText, Wheat, 
  Paintbrush, FlaskConical, Cog, ArrowRight 
} from 'lucide-react';
import { industries } from '../data/company';

const iconMap = {
  Shirt,
  Droplets,
  FileText,
  Wheat,
  Paintbrush,
  FlaskConical,
  Cog,
};

export default function IndustriesSection({ showHeader = true, isPage = false }) {
  return (
    <section className={`py-16 sm:py-20 ${isPage ? 'bg-white' : 'bg-surface'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full">
              Application Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
              Industries We Cater To
            </h2>
            <p className="text-base text-gray-600 mt-3 leading-relaxed">
              Tailored defoaming formulations and specialty chemicals engineered for maximum efficiency across critical industrial operations.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || FlaskConical;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-teal/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy mb-2.5 group-hover:text-teal transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Custom Formulations</span>
                  <Link
                    to={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center gap-1 text-teal hover:underline"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {!isPage && (
          <div className="mt-12 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-bold transition-colors shadow-sm"
            >
              <span>Explore All Industrial Applications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
