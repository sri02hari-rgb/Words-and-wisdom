/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { AcademyIntro } from './components/AcademyIntro';
import { CourseShowcase } from './components/CourseShowcase';
import { MethodologySection } from './components/MethodologySection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrainerCredibility } from './components/TrainerCredibility';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { StrategyBlueprintView } from './components/StrategyBlueprintView';
import { BookingModal } from './components/BookingModal';
import { FluencyDiagnosticModal } from './components/FluencyDiagnosticModal';
import { ArrowRight, BookOpen, MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string>('');

  const handleOpenBooking = (courseTitle: string = '') => {
    setSelectedCourseTitle(courseTitle);
    setBookingModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setDiagnosticModalOpen(true);
  };

  const handleBookWithDiagnosis = (recommendedCourse: string) => {
    setSelectedCourseTitle(recommendedCourse);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Bar Contract Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW: Strategy & Architectural Blueprint Deck */}
        {activeTab === 'blueprint' && (
          <StrategyBlueprintView
            onReturnToSite={() => setActiveTab('home')}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {/* VIEW: Complete Homepage Experience */}
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenBooking={() => handleOpenBooking()}
              onOpenDiagnostic={handleOpenDiagnostic}
              onExploreCourses={() => {
                const el = document.getElementById('courses-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('courses');
              }}
            />

            {/* Strategy Callout Banner for Evaluators/Stakeholders */}
            <div className="bg-slate-900 text-white py-3 px-4 text-xs">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                    Architecture Brief Available
                  </span>
                  <span className="text-slate-300">
                    Reviewing this website concept for Words and Wisdom Academy?
                  </span>
                </div>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className="text-amber-300 hover:text-amber-200 font-semibold inline-flex items-center gap-1.5 cursor-pointer underline sm:no-underline sm:bg-slate-800 sm:px-3 sm:py-1 sm:rounded-md transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore Complete 11-Section Strategy Deck →</span>
                </button>
              </div>
            </div>

            {/* 2. Academy Introduction & Root Cause */}
            <AcademyIntro onOpenBooking={() => handleOpenBooking()} />

            {/* 3. Course Showcase (Interactive Filter & Full Syllabi) */}
            <CourseShowcase onSelectCourseForBooking={(course) => handleOpenBooking(course)} />

            {/* 4. Methodology (The 4 Pillars & 70% Talk Time) */}
            <MethodologySection onOpenBooking={() => handleOpenBooking()} />

            {/* 5. Who The Courses Are For (5 Real Chennai Learner Personas) */}
            <WhoIsThisFor onSelectAudience={(track) => handleOpenBooking(track)} />

            {/* 6. Why Choose Words and Wisdom (Comparison Grid vs Generic Classes) */}
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

            {/* 7. Student Testimonials (Authentic Transformations) */}
            <TestimonialsSection onOpenBooking={() => handleOpenBooking()} />

            {/* 8. Trainer & Academy Credibility */}
            <TrainerCredibility onOpenBooking={() => handleOpenBooking()} />

            {/* 9. Interactive FAQ (Objection Dissolution) */}
            <FAQSection onOpenBooking={() => handleOpenBooking()} />

            {/* 10. Saligramam Location, Transit Proximity & Direct Lead Capture */}
            <ContactLocationSection />
          </>
        )}

        {/* VIEW: Dedicated Courses Tab */}
        {activeTab === 'courses' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
                Curriculum Catalog
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                Spoken English Programs at Saligramam Studio
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                Explore our four specialized learning tracks. Each program maintains a strict 8–10 student limit to guarantee at least 20 minutes of active speech participation per class.
              </p>
            </div>
            <CourseShowcase onSelectCourseForBooking={(course) => handleOpenBooking(course)} />
            <FAQSection onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {/* VIEW: Dedicated Methodology Tab */}
        {activeTab === 'methodology' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
                Pedagogical Rigor
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                The 4-Pillar Conversational Immersion Method
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                How we systematically dissolve the Tamil-to-English translation reflex and cultivate fearless verbal flow through structured scenario drills.
              </p>
            </div>
            <MethodologySection onOpenBooking={() => handleOpenBooking()} />
            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {/* VIEW: Dedicated Student Stories Tab */}
        {activeTab === 'stories' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
                Verified Chennai Outcomes
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                Learner Journeys & Tangible Progress
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                Real feedback from working professionals, college graduates, and homemakers from Saligramam, Vadapalani, Virugambakkam, and K.K. Nagar.
              </p>
            </div>
            <TestimonialsSection onOpenBooking={() => handleOpenBooking()} />
            <WhoIsThisFor onSelectAudience={(track) => handleOpenBooking(track)} />
          </div>
        )}

        {/* VIEW: Dedicated About & Faculty Tab */}
        {activeTab === 'about' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
                Academy Leadership
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                About Words and Wisdom & Our Lead Faculty
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                Founded to provide a safe, high-respect learning studio for spoken English in Chennai without commercial factory crowding.
              </p>
            </div>
            <TrainerCredibility onOpenBooking={() => handleOpenBooking()} />
            <AcademyIntro onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {/* VIEW: Dedicated Location & Contact Tab */}
        {activeTab === 'contact' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-2">
                Visit or Connect
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                Saligramam Centre Directions & Admissions
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                Dasarathapuram Main Road, Saligramam. Easy access via Vadapalani Metro and MTC bus routes. Walk-ins welcome for free level diagnostics.
              </p>
            </div>
            <ContactLocationSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Floating Action Pill on Mobile (within 15% sticky cap) */}
      <div className="sm:hidden fixed bottom-4 right-4 left-4 z-30 flex items-center gap-2">
        <a
          href="https://wa.me/919840000000?text=Hi%20Words%20and%20Wisdom,%20I%20would%20like%20to%20enquire%20about%20Spoken%20English%20classes%20in%20Saligramam."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 text-white rounded-xl shadow-lg flex items-center justify-center shrink-0"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-3 px-4 bg-blue-900 text-white font-semibold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
        >
          <span>Book Free Counselling</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Global Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedCourse={selectedCourseTitle}
      />

      <FluencyDiagnosticModal
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
        onBookWithDiagnosis={handleBookWithDiagnosis}
      />

    </div>
  );
}
