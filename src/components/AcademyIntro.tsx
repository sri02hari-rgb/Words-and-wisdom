import React from 'react';
import { Target, HeartHandshake, MicVocal } from 'lucide-react';
import mentorImg from '../assets/images/trainer_mentorship_1790870658178.jpg';

interface AcademyIntroProps {
  onOpenBooking: () => void;
}

export const AcademyIntro: React.FC<AcademyIntroProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            The Philosophy Behind Words and Wisdom
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight" style={{ textWrap: 'balance' }}>
            Why most people who know English grammar still struggle to speak it fluently
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In schools and colleges across Tamil Nadu, English is taught as a subject to pass exams through memorization. You were tested on passive voice, fill-in-the-blanks, and essay questions. But nobody trained your vocal cords, your spontaneous thinking reflex, or your emotional comfort when speaking in front of others.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Documentary Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={mentorImg}
                alt="One-on-one spoken English mentor session at Words and Wisdom Academy Saligramam"
                className="w-full h-[380px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Individual Speaking Audits
                </div>
                <div className="text-sm font-medium mt-1">
                  "Every learner receives a personal voice note assessment identifying their specific hesitation triggers."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-900">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 font-display">
                    Unlearning the Translation Bottleneck
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    When you translate Tamil thoughts into English word-by-word, you hesitate for 3 to 5 seconds, lose your train of thought, and feel flustered. We teach you conversational sentence patterns so words arrive naturally and smoothly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-900">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 font-display">
                    A Safe Sanctuary Where Mistakes Are Normalized
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    The biggest reason adults stay quiet in Chennai is fear of judgment or subtle mockery. At Words and Wisdom, our Saligramam studio is intentionally structured as a warm, supportive circle where making mistakes is treated as essential data for learning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-900">
                  <MicVocal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 font-display">
                    Immediate Practical Application
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    What you learn in the morning session is practiced that very day: introducing yourself to a stranger, answering an interview question, framing a polite complaint, or speaking for 2 minutes on the podium.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              >
                Meet Our Trainer in Saligramam →
              </button>
              <span className="text-xs text-slate-500">Free 30-min evaluation appointment</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
