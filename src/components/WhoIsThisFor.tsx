import React from 'react';
import { Briefcase, GraduationCap, Home, Users, Store, ArrowRight } from 'lucide-react';

interface WhoIsThisForProps {
  onSelectAudience: (category: string) => void;
}

export const WhoIsThisFor: React.FC<WhoIsThisForProps> = ({ onSelectAudience }) => {
  const personas = [
    {
      icon: Briefcase,
      title: 'IT & Corporate Working Professionals',
      subtitle: 'Tired of typing answers in chat during client scrums or dreading team presentations',
      situation: 'You are technically skilled, but when US/European clients or senior leaders speak quickly on Microsoft Teams, you freeze or give one-word answers. You worry about being judged or passed over for promotions.',
      recommendedTrack: 'Professional Workplace Communication',
      primaryOutcome: 'Interject smoothly in meetings, speak clearly without hesitation, and present status updates with executive calm.'
    },
    {
      icon: GraduationCap,
      title: 'College Students & Fresh Graduates',
      subtitle: 'Clearing aptitude and coding rounds, but getting stuck at HR interviews and Group Discussions',
      situation: 'You have your degree from Anna University or Arts & Science colleges, but lack spontaneous conversational English practice. You fear the question "Tell me about yourself" and get talked over in GDs.',
      recommendedTrack: 'Job Interview Mastery & GD Accelerator',
      primaryOutcome: 'Answer behavioural questions using the STAR framework, lead group discussions politely, and crack your dream placement.'
    },
    {
      icon: Home,
      title: 'Homemakers & Career Re-Starters',
      subtitle: 'Seeking personal confidence for school PTMs, banking, travel, and social interactions',
      situation: 'You paused your career or family life, and feel hesitant when speaking English with teachers at CBSE/ICSE schools, at social gatherings, or during hospital and government office visits.',
      recommendedTrack: 'Foundation Spoken English & Grammar',
      primaryOutcome: 'Speak comfortably without self-doubt, converse with your children\'s teachers with poise, and rediscover your independent voice.'
    },
    {
      icon: Users,
      title: 'Teens & High School Students (Ages 11–17)',
      subtitle: 'Overcoming stage fear, building vocabulary, and preparing for school elocution and debates',
      situation: 'Good at written exams, but nervous during stage assemblies, debate competitions, or when asked to express their opinions in front of relatives and peers.',
      recommendedTrack: 'Young Communicators Public Speaking',
      primaryOutcome: 'Eradicate podium phobia, articulate thoughts in clear English, and cultivate expressive storytelling skills.'
    },
    {
      icon: Store,
      title: 'Business Owners & Entrepreneurs',
      subtitle: 'Negotiating with outstation vendors, closing deals, and presenting products articulately',
      situation: 'Running a thriving business in Chennai or online, but feeling self-conscious when dealing with suppliers in Mumbai, foreign buyers, or premium corporate clients.',
      recommendedTrack: 'Professional Fluency Fast-Track',
      primaryOutcome: 'Command respect in client negotiations, answer commercial queries authoritatively, and expand your market reach.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            Targeted Learner Profiles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
            Who thrives at Words and Wisdom?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our students come from diverse backgrounds across Saligramam, Vadapalani, Virugambakkam, and Chennai, united by one common goal: the desire to speak their minds freely and clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-blue-900 font-medium">
                    {p.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.situation}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Expected Outcome
                    </div>
                    <div className="text-xs font-medium text-slate-800">
                      {p.primaryOutcome}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {p.recommendedTrack}
                  </span>
                  <button
                    onClick={() => onSelectAudience(p.recommendedTrack)}
                    className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Track Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
