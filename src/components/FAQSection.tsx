import React, { useState } from 'react';
import { FAQ_DATA } from '../data/academyData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'Teaching Method', 'Language Anxiety', 'Admissions & Batches', 'Fees & Timings'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            Clear Answers, Zero Hesitation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about our classroom method, batches, and language support in Saligramam.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg shadow-2xs max-w-2xl mx-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed pl-13 border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-10 text-center text-xs text-slate-600">
          <span>Have a question not listed here?</span>{' '}
          <button
            onClick={onOpenBooking}
            className="text-blue-900 font-semibold hover:underline cursor-pointer"
          >
            Speak directly with our academic advisor at +91 9840X XXXXX →
          </button>
        </div>

      </div>
    </section>
  );
};
