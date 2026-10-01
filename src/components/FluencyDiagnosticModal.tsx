import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface FluencyDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithDiagnosis: (courseName: string) => void;
}

export const FluencyDiagnosticModal: React.FC<FluencyDiagnosticModalProps> = ({
  isOpen,
  onClose,
  onBookWithDiagnosis
}) => {
  const [step, setStep] = useState<number>(1);
  const [answer1, setAnswer1] = useState<string>('');
  const [answer2, setAnswer2] = useState<string>('');
  const [answer3, setAnswer3] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
  };

  const calculateResult = () => {
    if (answer1 === 'translation_freeze' || answer3 === 'beginner') {
      return {
        title: 'Diagnostic: Cognitive Translation Pause',
        summary: 'Your main obstacle is the "Tamil-to-English translation loop." You understand well, but your brain attempts to formulate complete sentences in your mother tongue before finding English equivalents, causing a 4-second hesitation.',
        recommendedCourse: 'Foundation Spoken English & Grammar in Context',
        weeklyHours: '5 Hours / Week',
        actionTip: 'Stop looking up individual words in dictionaries. Practice "chunking" — memorizing short 3-word conversational clusters like "As far as I know", "Could you please", and "I happened to see".'
      };
    } else if (answer2 === 'job_interview' || answer2 === 'group_discussion') {
      return {
        title: 'Diagnostic: High-Stakes Performance Anxiety',
        summary: 'You have solid functional English, but under interview or GD scrutiny your heart rate rises and you lose sentence structure, reverting to short, defensive answers.',
        recommendedCourse: 'Job Interview Mastery & GD Accelerator',
        weeklyHours: '6 Hours / Week',
        actionTip: 'Master the STAR framework (Situation, Task, Action, Result) so your answers have a predictable, calm rhythm that keeps your nerves steady.'
      };
    } else {
      return {
        title: 'Diagnostic: Corporate & Professional Fluency Gap',
        summary: 'You communicate adequately for daily tasks, but lack the diplomatic nuance, meeting assertiveness, and executive vocabulary required to lead discussions and impress overseas clients.',
        recommendedCourse: 'Professional Workplace Communication & Fluency',
        weeklyHours: '5 Hours / Week',
        actionTip: 'Replace filler phrases and hesitant openers with professional signposts such as "To build on that point...", "Allow me to clarify...", and "Here is the critical takeaway".'
      };
    }
  };

  const result = calculateResult();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Interactive Fluency Diagnostic
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-400">Step 1 of 3</div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                What happens when someone speaks English to you unexpectedly?
              </h3>
              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'translation_freeze', label: 'I know the reply in Tamil/mind, but I freeze while trying to translate into English.' },
                  { id: 'broken_grammar', label: 'I can speak a few words, but I make tense errors and lose confidence halfway.' },
                  { id: 'audience_fear', label: 'I am fine speaking 1-on-1, but I tremble or go blank in front of a group.' },
                  { id: 'polish_needed', label: 'I speak fluently, but I lack advanced vocabulary, professional tone, and clarity.' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAnswer1(opt.id);
                      setStep(2);
                    }}
                    className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-blue-900 hover:bg-blue-50/40 text-xs sm:text-sm font-medium text-slate-700 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-400">Step 2 of 3</div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Where does English hesitation hurt you the most?
              </h3>
              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'office_meetings', label: 'At work: Client calls, team scrums, and executive presentations.' },
                  { id: 'job_interview', label: 'In interviews: College campus placements and lateral job transitions.' },
                  { id: 'social_ptm', label: 'In everyday life: School PTMs, banking, shopping, and socializing.' },
                  { id: 'public_speaking', label: 'On stage: Public speaking, seminar talks, and debates.' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAnswer2(opt.id);
                      setStep(3);
                    }}
                    className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-blue-900 hover:bg-blue-50/40 text-xs sm:text-sm font-medium text-slate-700 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:underline pt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                ← Back to previous question
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-400">Step 3 of 3</div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                How would you describe your schooling and background?
              </h3>
              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'beginner', label: 'Studied in Tamil medium / regional medium throughout school.' },
                  { id: 'mixed', label: 'English medium school, but almost all informal conversation was in Tamil.' },
                  { id: 'english_proficient', label: 'Good English reading/writing, but very little verbal speaking practice.' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAnswer3(opt.id);
                      setStep(4);
                    }}
                    className="w-full text-left p-3.5 rounded-xl border border-neutral-200 hover:border-blue-900 hover:bg-blue-50/40 text-xs sm:text-sm font-medium text-slate-700 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-xs text-slate-500 hover:underline pt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                ← Back to previous question
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                  Your Personalized Assessment
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {result.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {result.summary}
                </p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs space-y-1.5">
                <div className="font-bold text-amber-950 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-700" />
                  <span>Recommended Immediate Action:</span>
                </div>
                <p className="text-amber-900 leading-relaxed pl-5">
                  {result.actionTip}
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-200 rounded-xl">
                <div className="text-xs text-slate-500 font-medium">Recommended Academy Track:</div>
                <div className="text-sm font-bold text-slate-900 font-display mt-0.5">
                  {result.recommendedCourse}
                </div>
                <div className="text-xs text-blue-900 font-semibold mt-1">
                  Batch Format: Small Group (Max 8 students) at Saligramam Studio
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onBookWithDiagnosis(result.recommendedCourse);
                    onClose();
                  }}
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Book Free 1-on-1 Review of this Result</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2.5 text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer shrink-0"
                  title="Retake diagnostic"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
