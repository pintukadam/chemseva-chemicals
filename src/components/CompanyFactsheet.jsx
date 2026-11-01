import React from 'react';
import { 
  Building2, Users, Briefcase, Landmark, 
  ShieldCheck, Award, CheckCircle2, UserCheck 
} from 'lucide-react';
import { companyFactsheet } from '../data/company';

export default function CompanyFactsheet() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Corporate Profile & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
            Company Factsheet
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Essential corporate details, statutory profile, and dedicated professional workforce structure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Factsheet Table Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
            <h3 className="font-heading font-bold text-lg text-navy mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal" />
              <span>Basic Information & Factsheet</span>
            </h3>

            <div className="divide-y divide-gray-100 text-xs">
              {companyFactsheet.basicInfo.map((item, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-gray-500 w-1/2">{item.label}</span>
                  <span className="font-bold text-navy sm:text-right w-1/2">{item.value}</span>
                </div>
              ))}
              {companyFactsheet.statutory.map((item, idx) => (
                <div key={`stat-${idx}`} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-gray-500 w-1/2">{item.label}</span>
                  <span className="font-bold text-teal sm:text-right w-1/2">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workforce & Team Roles */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-navy flex items-center gap-2">
                <Users className="w-5 h-5 text-teal" />
                <span>Our Dedicated Workforce</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Our team is made up of capable professionals dedicated to understanding customer requirements and delivering dependable specialty chemical solutions.
              </p>
            </div>

            <div className="space-y-3">
              {companyFactsheet.teamRoles.map((role, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface border border-gray-100 hover:border-teal/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck className="w-4 h-4 text-teal shrink-0" />
                    <h4 className="font-bold text-navy text-xs">{role.role}</h4>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed pl-6">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
