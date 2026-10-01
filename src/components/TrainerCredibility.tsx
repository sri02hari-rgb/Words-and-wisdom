import React from 'react';
import { TRAINER_CREDENTIALS } from '../data/academyData';
import { Award, CheckCircle, GraduationCap, Sparkles } from 'lucide-react';
import trainerImg from '../assets/images/trainer_mentorship_1790870658178.jpg';

interface TrainerCredibilityProps {
  onOpenBooking: () => void;
}

export const TrainerCredibility: React.FC<TrainerCredibilityProps> = ({ onOpenBooking }) => {
  const { headTrainer, academyValues } = TRAINER_CREDENTIALS;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            Faculty & Academy Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight" style={{ textWrap: 'balance' }}>
            Mentors who listen first and calibrate with genuine care
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The greatest threat to a language learner is an impatient teacher. At Words and Wisdom, our trainers are certified communicative experts who understand the cultural and linguistic transition from Tamil to fluent English.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Trainer Portrait & Scrim Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src={trainerImg}
                alt="Lead Communication Coach at Words and Wisdom Academy"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  {headTrainer.title}
                </div>
                <div className="text-lg font-bold font-display mt-0.5">
                  {headTrainer.name}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {headTrainer.credentials}
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Narrative & Academy Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 relative">
              <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-800" />
                Coach's Message to Every Chennai Learner
              </div>
              <blockquote className="text-sm sm:text-base text-slate-800 italic leading-relaxed">
                "{headTrainer.quote}"
              </blockquote>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {headTrainer.background}
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Our Teaching Commitments</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {academyValues.map((val, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Schedule an In-Person Chat with the Mentor
              </button>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                <span>Individual speech analysis included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
