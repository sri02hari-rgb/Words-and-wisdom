import React from 'react';
import { COMPARISON_POINTS } from '../data/academyData';
import { Check, X, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            Clear Difference in Results
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight" style={{ textWrap: 'balance' }}>
            Why choose Words and Wisdom over generic coaching institutes?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Many spoken English institutes in Chennai operate like commercial factories — taking 30–50 students in a hall, writing rules on a board, and sending you home with fill-in-the-blank homework. We built Words and Wisdom as an intentional contrast.
          </p>
        </div>

        {/* Comparison Table / Card */}
        <div className="overflow-hidden bg-neutral-50 rounded-2xl border border-neutral-200 shadow-xs">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 text-xs sm:text-sm font-semibold">
            <div className="col-span-4 sm:col-span-3 text-slate-300">Dimension</div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Typical Commercial Coaching</div>
            <div className="col-span-4 sm:col-span-5 text-amber-300 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Words and Wisdom (Saligramam)</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-neutral-200 text-xs sm:text-sm">
            {COMPARISON_POINTS.map((pt, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-white transition-colors">
                <div className="col-span-4 sm:col-span-3 font-semibold text-slate-900">
                  {pt.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-1.5 pr-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{pt.traditional}</span>
                </div>

                <div className="col-span-4 sm:col-span-5 text-slate-900 font-medium flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt.wordsAndWisdom}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 p-6 bg-blue-50/70 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700">
            <strong className="text-blue-950 font-semibold">Our Transparent Guarantee:</strong> If after attending your very first classroom session you feel this method is not right for you, we refund your enrollment immediately. No fine print.
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shrink-0 cursor-pointer shadow-xs transition-colors"
          >
            Visit Our Saligramam Studio
          </button>
        </div>

      </div>
    </section>
  );
};
