import React from 'react';
import { METHODOLOGY_PILLARS } from '../data/academyData';
import groupPhoto from '../assets/images/group_discussion_1790870670505.jpg';

interface MethodologySectionProps {
  onOpenBooking: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            The Words and Wisdom Teaching Method
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight" style={{ textWrap: 'balance' }}>
            Built on active speech neurology, not textbook memorization
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Speaking a language is a motor skill — just like driving a car or playing badminton. You cannot learn it by observing someone else do it. Our classroom protocol ensures your mouth and mind do the work from day one.
          </p>
        </div>

        {/* 2-Column Layout: Visual + Editorial Numbered Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-7 space-y-6">
            {METHODOLOGY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-5 sm:p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-sm font-bold font-mono text-blue-900">
                    {pillar.number}.
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {pillar.practiceRatio}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Classroom Action Image & Active Talk Time Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={groupPhoto}
                alt="Active conversational group practice at Words and Wisdom Academy Saligramam Chennai"
                className="w-full h-[360px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Active Conversational Circles
                </div>
                <div className="text-base font-bold font-display leading-snug">
                  "No boring grammar worksheets. We discuss real news, job challenges, travel stories, and public issues."
                </div>
              </div>
            </div>

            {/* Talk time ratio box */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Our Non-Negotiable Classroom Rule
              </div>
              <div className="text-2xl font-bold font-display text-white mb-2">
                70% Student Talk / 30% Mentor Coaching
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In most language institutes in Chennai, the teacher speaks for 45 minutes while 40 students sit passively taking notes. At Words and Wisdom, our trainer facilitates, prompts, listens, and calibrates — but the students do the speaking.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Experience a session yourself</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 cursor-pointer"
                >
                  Book Demo Class →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
