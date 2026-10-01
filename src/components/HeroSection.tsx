import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Users } from 'lucide-react';
import heroImg from '../assets/images/hero_english_academy_1790870644557.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenDiagnostic: () => void;
  onExploreCourses: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenDiagnostic,
  onExploreCourses
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-neutral-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed editorial trust kicker (No static pill badges) */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-6">
          <span className="text-blue-900 font-semibold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-800" />
            Saligramam, Chennai
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>7 Mins from Vadapalani Metro</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-emerald-700 font-medium">New Batch Enrolling for [Upcoming Month Placeholder]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Speak English with calm confidence — without translating from Tamil in your head.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Most learners in Chennai know grammar rules, yet hesitate to speak during office standups, job interviews, or everyday social situations. At <strong className="font-semibold text-slate-900">Words and Wisdom</strong>, we replace passive lectures with 70% active speaking practice in small batches capped at 8 to 10 students.
            </p>

            {/* Micro value proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="font-medium text-slate-900">Max 8–10 Students:</strong> Ample turn-by-turn speaking practice every session.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="font-medium text-slate-900">Zero Public Ridicule:</strong> Gentle, constructive calibration from certified mentors.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="font-medium text-slate-900">Real Scenarios:</strong> Work meetings, customer calls, PTMs, and interviews.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="font-medium text-slate-900">Saligramam Classroom:</strong> Conveniently located on Dasarathapuram Main Rd.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Counselling Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDiagnostic}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-lg border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Take 2-Min Fluency Self-Check</span>
              </button>
            </div>

            {/* Local batch advisory & social reassurance */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Users className="w-3.5 h-3.5 text-blue-900" />
                <span>Personal attention guaranteed</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>No pushy sales calls</span>
              <span aria-hidden="true">·</span>
              <span>In-person visit & level check free of cost</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Media Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-100">
              <img
                src={heroImg}
                alt="Interactive spoken English training session at Words and Wisdom Academy in Saligramam, Chennai"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Saligramam Learning Studio
                </div>
                <div className="text-lg font-bold font-display leading-snug">
                  "Speak your mind without second-guessing every word."
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                  <span>Small table discussions</span>
                  <span aria-hidden="true">·</span>
                  <span>Audio-recorded feedback</span>
                  <span aria-hidden="true">·</span>
                  <span>Warm environment</span>
                </div>
              </div>
            </div>

            {/* Adjacent Trust Card */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Batch Timing Shifts Available</div>
                <div className="text-sm font-semibold text-slate-900">Morning 7:30 AM · Evening 7:00 PM · Weekend</div>
              </div>
              <button
                onClick={onExploreCourses}
                className="text-xs font-semibold text-blue-900 hover:text-blue-700 hover:underline cursor-pointer"
              >
                View 4 Tracks →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
