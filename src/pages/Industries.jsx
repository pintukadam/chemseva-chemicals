import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shirt, Droplets, FileText, Wheat, 
  Paintbrush, FlaskConical, Cog, ArrowRight, 
  CheckCircle2, Sparkles, PhoneCall 
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { industries } from '../data/company';
import { updateMetaTags } from '../utils/seo';

const industryDetails = {
  'Textile Industry': {
    challenges: 'Excessive foam during sizing, scouring, reactive dyeing, and print paste preparation leads to uneven dyeing, spot blemishes, and machine overflow.',
    solutions: 'High-temperature defoamers, non-silicone defoamers, and concentrated silicone emulsions formulated for shear stability without oil spots.',
    products: ['Silicone Defoaming Emulsion 20%', 'Non Silicone Defoamer NSD-100', 'Textile Grade Silicone Emulsion']
  },
  'Wastewater Treatment': {
    challenges: 'Biological aeration basins, anaerobic digesters, and effluent discharge streams generate high-volume foam that causes environmental non-compliance and pump cavitation.',
    solutions: 'Fast-knockdown non-silicone defoamers and polyether-based anti-foaming agents that maintain low COD/BOD impact.',
    products: ['ETP Defoamer Non-Silicone', 'High Performance Antifoam Compound', 'Non Silicone Defoamer NSD-200']
  },
  'Paper Industry': {
    challenges: 'Foam in pulp washing, black liquor processing, and paper machine wet ends causes paper sheet pinholes, poor formation, and fiber loss.',
    solutions: 'Specialized paper-mill defoamers that disperse uniformly, suppress entrained air, and prevent surface defects.',
    products: ['Pulp & Paper Defoamer Non-Silicone', 'Silicone Antifoam AF-150', 'Industrial Paraffin Wax Emulsion']
  },
  'Sugar Industry': {
    challenges: 'High sugar juice viscosity and yeast activity in fermentation generate massive foam head during juice evaporation and molasses alcohol production.',
    solutions: 'Food-processing compatible defoaming formulations that act swiftly across high temperatures and acidic/alkaline shifts.',
    products: ['Sugar Juice Antifoam Agent', 'Non Silicone Defoamer NSD-100', 'Antifoam Concentrate AF-200']
  },
  'Paint & Coatings': {
    challenges: 'High-speed pigment dispersion and roller application introduce micro-foam that weakens paint barrier films and creates cratering.',
    solutions: 'Defoamers with excellent compatibility in water-based acrylic, PVA, and solvent coatings without causing surface craters.',
    products: ['Paint Grade Silicone Defoamer', 'Cationic Wax Emulsion', 'Silicone Emulsion 35% Active']
  },
  'Chemical Processing': {
    challenges: 'Chemical reaction vessels, distillation columns, and liquid-liquid extraction units experience uncontrolled foaming under vacuum or pressure.',
    solutions: 'Thermally stable silicone and organo-modified antifoams providing sustained knockdown across wide pH ranges.',
    products: ['Silicone Defoaming Emulsion 30%', 'General Industrial Defoamer GID-10', 'Industrial White Oil (Technical Grade)']
  },
  'Industrial Manufacturing': {
    challenges: 'Metal cutting, machining fluid circulation, and component washing tanks foam uncontrollably under high pressure coolant nozzles.',
    solutions: 'Soluble cutting oils, anti-wear lubricants, and tank foam suppressants that extend coolant sump life and improve metal finish.',
    products: ['Soluble Cutting Oil (Water Soluble)', 'Industrial Gear Oil ISO VG 220', 'Hydraulic Oil ISO VG 68']
  }
};

const iconMap = {
  Shirt,
  Droplets,
  FileText,
  Wheat,
  Paintbrush,
  FlaskConical,
  Cog,
};

export default function Industries() {
  React.useEffect(() => {
    updateMetaTags(
      'Industries & Applications | ChemSeva Chemicals Pvt. Ltd.',
      'Defoamer and specialty chemical solutions for Textile, Wastewater Treatment, Paper, Sugar, Paint, Chemical Processing, and Industrial Manufacturing.'
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-navy text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Industries & Applications' }]} />
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/15 px-3 py-1 rounded-full border border-teal/30">
            Industrial Applications
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-3">
            Industries We Serve
          </h1>
          <p className="text-base text-gray-300 mt-3 max-w-2xl leading-relaxed">
            Every industrial production process presents distinct foam and chemical challenges. Here is how our defoaming and specialty chemical solutions support manufacturing efficiency.
          </p>
        </div>
      </div>

      {/* Industry Showcase Detail List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || FlaskConical;
            const details = industryDetails[ind.name] || {};

            return (
              <div
                key={ind.id}
                id={ind.name.toLowerCase().replace(/\s+/g, '-')}
                className="bg-surface rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title and Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white text-teal flex items-center justify-center shadow-xs border border-gray-100">
                      <Icon className="w-7 h-7 text-teal" />
                    </div>

                    <div>
                      <span className="text-xs font-mono font-bold text-gray-400">
                        APPLICATION SECTOR 0{ind.id}
                      </span>
                      <h2 className="text-2xl font-bold font-heading text-navy mt-1">
                        {ind.name}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={`/contact?industry=${encodeURIComponent(ind.name)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Enquire for {ind.name}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Challenges & Recommended ChemSeva Solutions */}
                  <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-100 space-y-5">
                    {details.challenges && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1.5">
                          Foam Challenges Encountered
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {details.challenges}
                        </p>
                      </div>
                    )}

                    {details.solutions && (
                      <div className="pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal mb-1.5">
                          ChemSeva Solution Approach
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {details.solutions}
                        </p>
                      </div>
                    )}

                    {details.products && details.products.length > 0 && (
                      <div className="pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Relevant Formulations:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {details.products.map((prod, pIdx) => (
                            <Link
                              key={pIdx}
                              to={`/products?category=All`}
                              className="px-3 py-1.5 rounded-lg bg-surface text-navy hover:text-primary hover:bg-surface-alt text-xs font-medium border border-gray-200 transition-colors flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                              <span>{prod}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
