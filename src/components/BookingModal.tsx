import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationBooking>({
    fullName: '',
    phone: '',
    email: '',
    locality: 'Saligramam',
    preferredSlot: 'Evening (6:30 PM - 8:30 PM)',
    primaryGoal: 'Everyday Fluency',
    currentChallengeNotes: preselectedCourse ? `Interested in: ${preselectedCourse}` : '',
    mode: 'Saligramam Classroom Visit'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900">
              Personalized Language Diagnostic
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Book a Free Counselling & Demo Session
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">
                Session Appointment Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our senior trainer has been notified. We will call you at <strong>{formData.phone}</strong> to confirm your slot at our Saligramam centre.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-left space-y-2 text-slate-700">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-900" />
                  <span>Venue: Words and Wisdom Studio, Saligramam</span>
                </div>
                <div><strong>Selected Slot:</strong> {formData.preferredSlot}</div>
                <div><strong>Attendance Format:</strong> {formData.mode}</div>
                <div><strong>Fee Note:</strong> ₹0 (Completely free assessment with zero obligation)</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg text-xs text-blue-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0 text-blue-800" />
                <span>Includes a 20-minute 1-on-1 speech diagnostic with our lead trainer in Saligramam.</span>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How would you like to attend?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'Saligramam Classroom Visit' })}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-left cursor-pointer transition-colors ${
                      formData.mode === 'Saligramam Classroom Visit'
                        ? 'border-blue-900 bg-blue-50/60 text-blue-950 font-bold'
                        : 'border-neutral-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Saligramam Classroom (Recommended)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: '15-Min Phone Counselling' })}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-left cursor-pointer transition-colors ${
                      formData.mode === '15-Min Phone Counselling'
                        ? 'border-blue-900 bg-blue-50/60 text-blue-950 font-bold'
                        : 'border-neutral-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    15-Min Phone Counselling
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anandhi Sundar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9840X XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Locality in Chennai
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Saligramam / Vadapalani"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot for Session
                </label>
                <select
                  value={formData.preferredSlot}
                  onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                >
                  <option value="Morning (8:00 AM - 10:00 AM)">Morning (8:00 AM – 10:00 AM)</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                  <option value="Evening (6:30 PM - 8:30 PM)">Evening (6:30 PM – 8:30 PM)</option>
                  <option value="Weekend Batch">Weekend (Saturday or Sunday)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Goal / Current Challenge
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                >
                  <option value="Everyday Fluency">Daily Conversational English & Hesitation Removal</option>
                  <option value="Workplace Meetings & Emails">Corporate Workplace & Client Meetings</option>
                  <option value="Job Interview Preparation">Campus / Lateral Job Interview Readiness</option>
                  <option value="Child / Teen Speech Confidence">School Elocution & Stage Confidence (Teens)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Planning for UK client calls / Tamil medium background"
                  value={formData.currentChallengeNotes}
                  onChange={(e) => setFormData({ ...formData, currentChallengeNotes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Booking</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Strict privacy · No spam · Instant WhatsApp confirmation
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
