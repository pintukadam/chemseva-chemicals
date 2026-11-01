import React from 'react';
import { Star, ShieldCheck, ThumbsUp, Truck, MessageSquareQuote } from 'lucide-react';
import { clientRatings } from '../data/company';

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full">
            Client Feedback & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy mt-3 tracking-tight">
            Ratings & Customer Satisfaction
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Consistently rated for product purity, responsive technical assistance, and reliable delivery schedules.
          </p>
        </div>

        {/* Overall Rating & Performance Summary Card */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Score & Stars */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200/80 pb-6 lg:pb-0 lg:pr-8">
              <div className="text-5xl font-black font-heading text-navy">
                {clientRatings.averageRating}
                <span className="text-2xl text-gray-400 font-normal"> / 5</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(clientRatings.averageRating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-amber-200 text-amber-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs font-semibold text-gray-500">
                Based on <strong className="text-navy">{clientRatings.totalReviews} verified client reviews</strong>
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/15 text-teal text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Trustseal Verified Standard</span>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center border-b lg:border-b-0 lg:border-r border-gray-200/80 pb-6 lg:pb-0 lg:pr-8">
              {clientRatings.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-teal mt-0.5">{m.label}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">{m.description}</div>
                </div>
              ))}
            </div>

            {/* Star Breakdown */}
            <div className="lg:col-span-3 space-y-1.5 text-xs">
              {clientRatings.starDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="w-10 font-medium text-gray-600">{row.stars} Star</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-[11px] text-gray-500">{row.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientRatings.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-teal/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded">
                    5.0 Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4">
                  “{t.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-navy text-xs">{t.author}</h4>
                <p className="text-[11px] text-gray-400">{t.location}</p>
                <div className="mt-1 text-[11px] text-primary font-medium">
                  Product: {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
