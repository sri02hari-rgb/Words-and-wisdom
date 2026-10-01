import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/academyData';
import { Star, MapPin, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [filterLocality, setFilterLocality] = useState<string>('All');

  const localities = ['All', 'Saligramam', 'Vadapalani', 'Virugambakkam', 'K.K. Nagar'];

  const filteredTestimonials = filterLocality === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.locality.toLowerCase().includes(filterLocality.toLowerCase()));

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
              Authentic Student Transformations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Real journeys from hesitation to everyday fluency
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              We never fabricate student testimonials or boast unrealistic 7-day miracles. Read the genuine before-and-after experiences of learners from our local neighborhood.
            </p>
          </div>

          {/* Locality Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg shadow-2xs self-start md:self-auto">
            {localities.map((loc) => (
              <button
                key={loc}
                onClick={() => setFilterLocality(loc)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filterLocality === loc
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Clean unboxed metadata with subtle dot separators */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-blue-800" />
                    <span>{t.locality}</span>
                  </div>
                </div>

                {/* Quote text */}
                <div className="relative">
                  <Quote className="w-7 h-7 text-blue-100 absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-slate-800 italic relative z-10 leading-relaxed font-sans">
                    "{t.quote}"
                  </p>
                </div>

                {/* Concrete Before & After Breakdown */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs">
                  <div className="bg-rose-50/60 p-3 rounded-lg border border-rose-100/70 text-slate-700">
                    <span className="font-semibold text-rose-900">Before Joining: </span>
                    {t.initialChallenge}
                  </div>
                  <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-100/70 text-slate-700">
                    <span className="font-semibold text-emerald-900">Demonstrated Result: </span>
                    {t.outcomeAfterCourse}
                  </div>
                </div>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 font-display">
                    {t.studentName}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.roleOrProfile}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-blue-900">
                    {t.courseCompleted}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Reassurance */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>All reviews from verified learners enrolled at our Saligramam center.</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <button
            onClick={onOpenBooking}
            className="text-blue-900 font-semibold hover:underline cursor-pointer"
          >
            Speak with an alumnus or visit a live class →
          </button>
        </div>

      </div>
    </section>
  );
};
