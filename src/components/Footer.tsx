import React from 'react';
import { ActiveTab } from '../types';
import { ACADEMY_INFO, LOCATION_DETAILS } from '../data/academyData';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenBooking,
  onOpenDiagnostic
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Words and Wisdom
              </span>
              <span className="block text-xs font-medium text-amber-400 mt-0.5">
                Spoken English Academy · Saligramam, Chennai
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering learners to overcome spoken hesitation, eliminate Tamil-to-English mental translation, and speak with calm confidence in workplace meetings, interviews, and daily life.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strictly 8–10 Students Per Batch Guarantee</span>
              </div>
              <div className="text-[11px] text-slate-500 pl-5">
                Serving Saligramam, Vadapalani, Virugambakkam, and K.K. Nagar
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Academy Links
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Courses & Syllabi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4-Pillar Teaching Method
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Student Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lead Faculty & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-medium"
                >
                  11-Section Strategy Deck
                </button>
              </li>
            </ul>
          </div>

          {/* Course Tracks */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Training Tracks
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Foundation Spoken English
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Workplace Communication
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Interview & GD Accelerator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Teens Public Speaking
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDiagnostic}
                  className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-medium"
                >
                  Free Fluency Self-Check →
                </button>
              </li>
            </ul>
          </div>

          {/* Saligramam Local Info */}
          <div className="space-y-3 text-xs text-slate-400">
            <div className="font-semibold text-white uppercase tracking-wider text-xs">
              Saligramam Studio
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{LOCATION_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{ACADEMY_INFO.location.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{ACADEMY_INFO.location.email}</span>
            </div>
            <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>Mon–Sat: 7:30 AM – 8:30 PM | Sun: 9:00 AM – 1:30 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Words and Wisdom Spoken English Academy. All rights reserved.
          </div>
          <div className="text-center md:text-right text-[11px] max-w-xl text-slate-500 leading-normal">
            <strong>Ethical Learning Commitment:</strong> We do not make false claims of "100% instant fluency" or teach artificial accents. Fluency requires active attendance, guided practice, and continuous speech reinforcement.
          </div>
        </div>

      </div>
    </footer>
  );
};
