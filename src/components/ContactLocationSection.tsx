import React, { useState } from 'react';
import { LOCATION_DETAILS } from '../data/academyData';
import { MapPin, Phone, MessageSquare, Clock, Car, Bus, CheckCircle2, Send } from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locality: 'Saligramam',
    preferredCourse: 'Foundation Spoken English & Grammar',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact-location" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
            Saligramam Centre & Contact Information
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
            Conveniently located in the heart of Saligramam, Chennai
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Easily accessible from Vadapalani, Virugambakkam, K.K. Nagar, and Koyambedu. Visit us for an in-person campus tour and spoken English evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Address, Proximity & Map Visual */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Address Box */}
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Academy Classroom & Counselling Center
                  </h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {LOCATION_DETAILS.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    (Opposite / Near [Local Prominent Landmark Placeholder], Saligramam, Chennai)
                  </p>
                </div>
              </div>

              {/* Transit & Accessibility Guide */}
              <div className="pt-3 border-t border-neutral-200/80 space-y-2.5 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Bus className="w-4 h-4 text-blue-900" />
                  <span>Public Transit Proximity:</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc">
                  {LOCATION_DETAILS.nearbyLandmarks.map((mark, i) => (
                    <li key={i}>{mark}</li>
                  ))}
                </ul>
                <div className="pt-1 flex items-center gap-1.5 text-slate-700">
                  <Car className="w-4 h-4 text-slate-500" />
                  <span>{LOCATION_DETAILS.parking}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-3 border-t border-neutral-200/80 flex items-start gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800">Counselling & Class Hours</div>
                  <div>Monday – Saturday: 7:30 AM – 8:30 PM</div>
                  <div>Sunday: 9:00 AM – 1:30 PM (Special batches & walk-in tours)</div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Map Pin Card */}
            <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-slate-900 text-white p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Saligramam Hub Location</span>
                </div>
                <span className="text-[11px] text-slate-400">Pincode: 600093</span>
              </div>
              <div className="text-base font-bold font-display text-white">
                Words and Wisdom Spoken English
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Dasarathapuram Main Rd · Vadapalani Junction (1.2 km) · Virugambakkam Market (1.5 km)
              </p>
              
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  <div className="font-bold text-amber-300">5 Mins</div>
                  <div className="text-[10px] text-slate-400">Bus Stand</div>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  <div className="font-bold text-amber-300">7 Mins</div>
                  <div className="text-[10px] text-slate-400">Vadapalani Metro</div>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  <div className="font-bold text-amber-300">3 Mins</div>
                  <div className="text-[10px] text-slate-400">Prasad Studios</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Click to get route assistance:</span>
                <a
                  href="https://maps.google.com/?q=Saligramam+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919840000000"
                className="p-3.5 rounded-xl border border-neutral-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call +91 9840X XXXXX</span>
              </a>
              <a
                href="https://wa.me/919840000000?text=Hi%20Words%20and%20Wisdom,%20I%20would%20like%20to%20enquire%20about%20Spoken%20English%20classes%20in%20Saligramam."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-900 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Admission & Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-1">
                Fast Track Admission Enquiry
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Request a Free Counselling Callback
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Share your details and our senior coach will connect with you within 4 business hours to guide you on the right batch.
              </p>

              {formSubmitted ? (
                <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950 font-display">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our academic coordinator from the Saligramam centre will call you at <strong>{formData.phone}</strong> to confirm your level assessment appointment.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        locality: 'Saligramam',
                        preferredCourse: 'Foundation Spoken English & Grammar',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-emerald-900 underline hover:text-emerald-700 cursor-pointer pt-2"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Karthikeyan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Locality in Chennai
                      </label>
                      <select
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                      >
                        <option value="Saligramam">Saligramam</option>
                        <option value="Vadapalani">Vadapalani</option>
                        <option value="Virugambakkam">Virugambakkam</option>
                        <option value="K.K. Nagar">K.K. Nagar</option>
                        <option value="Ashok Nagar">Ashok Nagar</option>
                        <option value="Koyambedu">Koyambedu</option>
                        <option value="Other Area in Chennai">Other Area in Chennai</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={formData.preferredCourse}
                      onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                    >
                      <option value="Foundation Spoken English & Grammar">Foundation Spoken English & Grammar in Context</option>
                      <option value="Professional Workplace Communication">Professional Workplace Communication & Fluency</option>
                      <option value="Job Interview Mastery & GD">Job Interview Mastery & Group Discussion Accelerator</option>
                      <option value="Young Communicators (Teens)">Young Communicators Public Speaking (Ages 11–17)</option>
                      <option value="Free Level Assessment Consultation">Not Sure – Need Trainer Diagnostic Session</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Current Challenge or Goal (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. I get stuck while speaking with clients / I have an interview next month / I want to build daily speaking confidence."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Counselling Request</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Privacy guaranteed · No marketing spam · Direct phone callback only
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
