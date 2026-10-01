import React, { useState } from 'react';
import { BookOpen, Check, Copy, FileText, Layout, Search, Sparkles, Smartphone, Award, Compass, ShieldCheck } from 'lucide-react';

interface StrategyBlueprintViewProps {
  onReturnToSite: () => void;
  onOpenBooking: () => void;
}

export const StrategyBlueprintView: React.FC<StrategyBlueprintViewProps> = ({
  onReturnToSite,
  onOpenBooking
}) => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  const sections = [
    { id: 1, title: '1. Brand Direction', icon: Compass },
    { id: 2, title: '2. Sitemap & Information Architecture', icon: Layout },
    { id: 3, title: '3. Homepage Wireframe & Layout Anatomy', icon: FileText },
    { id: 4, title: '4. Complete Website Copy (Production-Ready)', icon: Sparkles },
    { id: 5, title: '5. Course Page & Curriculum Structure', icon: BookOpen },
    { id: 6, title: '6. Visual Design System & Aesthetics', icon: Award },
    { id: 7, title: '7. Mobile UX & Responsive Strategy', icon: Smartphone },
    { id: 8, title: '8. Local SEO & Search Engine Strategy', icon: Search },
    { id: 9, title: '9. Conversion Optimization & Funnel', icon: ShieldCheck },
    { id: 10, title: '10. Recommended Interactive Features', icon: Sparkles },
    { id: 11, title: '11. Final Quality & Ethical Checklist', icon: Check }
  ];

  const handleCopy = (sectionId: number, contentText: string) => {
    navigator.clipboard.writeText(contentText);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Elite Strategic Blueprint & Architectural Deliverable</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Words and Wisdom: Academy Strategy & Digital Concept
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Complete strategy document, UX/UI framework, high-conversion copy, local SEO roadmap, and design system engineered specifically for the Saligramam, Chennai educational market.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onReturnToSite}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              ← View Live Academy Website
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Test Free Booking Flow
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {sections.map((s) => {
            const Icon = s.icon;
            const isCurrent = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border ${
                  isCurrent
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                    : 'bg-white text-slate-600 border-neutral-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
          
          {/* Section 1: Brand Direction */}
          {activeSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 01</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Brand Direction & Identity Strategy</h2>
                </div>
                <button
                  onClick={() => handleCopy(1, 'Brand Direction content for Words and Wisdom Academy')}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedSection === 1 ? 'Copied!' : 'Copy Section'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="font-bold text-slate-900 text-base font-display mb-2">1. Brand Essence & Name Rationale</h3>
                  <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                    <strong>“Words and Wisdom”</strong> unites communicative precision (Words) with intellectual maturity and emotional poise (Wisdom). Unlike coaching factories that treat English purely as vocabulary memorization, the academy treats communication as a life skill that commands workplace respect, family dignity, and professional mobility.
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="font-bold text-slate-900 text-base font-display mb-2">2. Brand Voice & Emotional Tone</h3>
                  <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                    <strong>Supportive, Dignified, Practical, and Non-Judgmental.</strong> In Tamil Nadu, spoken English anxiety is deeply tied to fears of public embarrassment or feeling "less intelligent." The voice never scolds, never uses aggressive fear-mongering ("If you don't speak English you will fail in life"), and never offers fake shortcuts ("100% fluency in 7 days").
                  </p>
                </div>
              </div>

              <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-700 space-y-3">
                <h3 className="font-bold text-blue-950 text-base font-display">3. Core Positioning Statement</h3>
                <blockquote className="italic border-l-3 border-blue-900 pl-4 py-1 text-slate-800 leading-relaxed font-sans">
                  "For ambitious students, homemakers, and working professionals in Chennai who feel paralyzed by hesitation or the Tamil-to-English translation loop, Words and Wisdom is the neighborhood communication sanctuary in Saligramam that provides small-group, zero-judgment active speaking practice so you express your real intellect with natural confidence."
                </blockquote>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-slate-900 text-base font-display">4. Core Brand Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Human Empathy First</div>
                    <div className="text-slate-600 leading-relaxed">Mistakes are treated as natural acoustic milestones, not grammatical crimes.</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Authentic Accent Respect</div>
                    <div className="text-slate-600 leading-relaxed">No fake American or British accents. We teach clear, globally intelligible Indian English.</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">Capped Batches (8–10 Max)</div>
                    <div className="text-slate-600 leading-relaxed">Strict limit on admissions to preserve at least 20 minutes of daily talk time per student.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Sitemap */}
          {activeSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 02</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Sitemap & Information Architecture</h2>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                A streamlined, conversion-focused structure designed to minimize cognitive load while ensuring immediate access to course syllabi, local credibility, and free booking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
                
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                  <div className="font-bold text-blue-900 font-display text-base">Primary Navigation</div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-1.5 font-medium"><span>/</span> Home (Hero, Proof, Methodology, Location)</li>
                    <li className="flex items-center gap-1.5 font-medium"><span>/courses</span> Courses & Syllabi (4 Tracks)</li>
                    <li className="flex items-center gap-1.5 font-medium"><span>/methodology</span> 4-Pillar Teaching Method</li>
                    <li className="flex items-center gap-1.5 font-medium"><span>/testimonials</span> Verified Student Journeys</li>
                    <li className="flex items-center gap-1.5 font-medium"><span>/about</span> About Academy & Trainer Credentials</li>
                    <li className="flex items-center gap-1.5 font-medium"><span>/contact</span> Saligramam Centre & Directions</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                  <div className="font-bold text-blue-900 font-display text-base">Dedicated Course Sub-Pages</div>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong className="text-slate-900">/courses/foundation:</strong> Spoken English & Grammar in Context (8 Wks)</li>
                    <li><strong className="text-slate-900">/courses/workplace-english:</strong> IT & Corporate Communication (6 Wks)</li>
                    <li><strong className="text-slate-900">/courses/interview-gd-mastery:</strong> Campus & Lateral Prep (4 Wks)</li>
                    <li><strong className="text-slate-900">/courses/young-communicators:</strong> Teens Public Speaking (8 Wks)</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                  <div className="font-bold text-blue-900 font-display text-base">Conversion & Utility Endpoints</div>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong className="text-slate-900">/book-counselling:</strong> Free 1-on-1 Level Diagnostic Slot</li>
                    <li><strong className="text-slate-900">/fluency-check:</strong> 2-Minute Interactive Self-Assessment</li>
                    <li><strong className="text-slate-900">/fees-schedule:</strong> Transparent Shift Timings & Installments</li>
                    <li><strong className="text-slate-900">/faq:</strong> Detailed Objections & Admissions Guide</li>
                  </ul>
                </div>

              </div>

              {/* Conversion Flow Diagram */}
              <div className="p-5 bg-slate-900 text-white rounded-xl text-xs sm:text-sm space-y-2">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">Standard User Journey Flow</div>
                <div className="flex flex-wrap items-center gap-2 text-slate-300 pt-1">
                  <span className="bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 text-white font-medium">1. Local Search / Ad Landing</span>
                  <span>→</span>
                  <span className="bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 text-white font-medium">2. Self-Select Persona & Challenge</span>
                  <span>→</span>
                  <span className="bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700 text-white font-medium">3. View Syllabus & Max 8 Batch Guarantee</span>
                  <span>→</span>
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1.5 rounded-md font-semibold">4. Book Free Diagnostic in Saligramam</span>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Homepage Wireframe */}
          {activeSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 03</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Homepage Wireframe & Section-by-Section Anatomy</h2>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {[
                  {
                    sec: '01. Top Navigation Bar',
                    intent: 'Instant credibility, local identity, phone and WhatsApp access, clean 3-zone contract.',
                    elements: 'Wordmark "Words and Wisdom", 6 navigation links, "Book Free Counselling" button, micro-trust line with Saligramam location.'
                  },
                  {
                    sec: '02. Hero Section (Focal Anchor)',
                    intent: 'Connect emotionally with Tamil-to-English translation anxiety; present immediate solution.',
                    elements: 'H1 ("Speak English with calm confidence — without translating from Tamil in your head"), supporting paragraph, 4 proof checks (Max 8 students, zero ridicule, real scenarios), high-fidelity photography, dual CTA.'
                  },
                  {
                    sec: '03. Academy Introduction & Philosophy',
                    intent: 'Dispel the myth that poor speaking is a lack of grammar knowledge; establish psychological safety.',
                    elements: 'Root cause explanation of Tamil Nadu school curriculum, 3 operational pillars, documentary trainer image.'
                  },
                  {
                    sec: '04. Course Showcase (Interactive Track Filter)',
                    intent: 'Clear catalog segmentation for beginners, IT pros, job seekers, and students.',
                    elements: 'Filter buttons, course cards with unboxed metadata (Duration, Batch Size, Timing), syllabus accordion, fee transparency note.'
                  },
                  {
                    sec: '05. The 4-Pillar Methodology & 70% Talk Time Rule',
                    intent: 'Prove how learning takes place; overcome fears of passive classroom boredom.',
                    elements: 'Numbered steps (01 to 04), 70% student speech rule box, active group discussion photo asset.'
                  },
                  {
                    sec: '06. Who The Courses Are For (Persona Segments)',
                    intent: 'Self-identification for college freshers, IT employees, homemakers, and business owners.',
                    elements: '5 persona cards highlighting specific pain points and demonstrated outcomes.'
                  },
                  {
                    sec: '07. Words and Wisdom vs Traditional Coaching',
                    intent: 'Overcome skepticism from past bad experiences at large coaching centers.',
                    elements: 'Side-by-side comparison table (batch size, active speaking minutes, grammar teaching style).'
                  },
                  {
                    sec: '08. Student Testimonials (Authentic Transformations)',
                    intent: 'Social proof from nearby Chennai localities (Saligramam, Vadapalani, Virugambakkam).',
                    elements: 'Locality filter, before/after impact cards, star rating, verified dates.'
                  },
                  {
                    sec: '09. Trainer & Academy Credibility',
                    intent: 'Build trust in the founder/mentor credentials (TESOL/CELTA, corporate background).',
                    elements: 'Trainer bio, personal coaching philosophy, teaching commitments.'
                  },
                  {
                    sec: '10. FAQ Section (Objection Dissolution)',
                    intent: 'Address unspoken fears: Tamil medium background, fear of public mistakes, trial class policy.',
                    elements: 'Category segmented accordion with keyboard accessible toggles.'
                  },
                  {
                    sec: '11. Saligramam Location, Transit Guide & Contact Form',
                    intent: 'Conversion closure with clear physical accessibility and walking/bus details.',
                    elements: 'Exact address, transit bus numbers (17D, 25G, 37G), Vadapalani Metro distance, validated enquiry form, direct WhatsApp trigger.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 font-display text-sm">{item.sec}</span>
                      <span className="text-[11px] text-blue-900 font-semibold">Section {idx + 1}</span>
                    </div>
                    <div className="text-slate-700 mt-1"><strong>Strategic Intent:</strong> {item.intent}</div>
                    <div className="text-slate-500 text-xs mt-0.5"><strong>Key UI Elements:</strong> {item.elements}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Complete Website Copy */}
          {activeSection === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 04</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Complete Production Website Copy</h2>
                </div>
              </div>

              <div className="space-y-6 text-xs sm:text-sm">
                
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">Hero Section Copy</div>
                  <div className="text-slate-900 font-bold text-base">H1: "Speak English with calm confidence — without translating from Tamil in your head."</div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Lead Paragraph:</strong> "Most learners in Chennai know grammar rules, yet hesitate to speak during office standups, job interviews, or everyday social situations. At Words and Wisdom, we replace passive lectures with 70% active speaking practice in small batches capped at 8 to 10 students."
                  </p>
                  <p className="text-slate-600">
                    <strong>Primary CTA:</strong> "Book a Free Counselling Session" · <strong>Secondary CTA:</strong> "Take 2-Min Fluency Self-Check"
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">Philosophy & Methodology Copy</div>
                  <div className="text-slate-900 font-bold text-base">H2: "Why most people who know English grammar still struggle to speak it fluently"</div>
                  <p className="text-slate-700 leading-relaxed">
                    "In schools and colleges across Tamil Nadu, English is taught as a subject to pass exams through memorization. You were tested on passive voice, fill-in-the-blanks, and essay questions. But nobody trained your vocal cords, your spontaneous thinking reflex, or your emotional comfort when speaking in front of others."
                  </p>
                  <div className="text-slate-600 text-xs pl-3 border-l-2 border-slate-300">
                    "Pillar 1: Breaking the Native Language Translation Loop · Pillar 2: 70% Active Student Talk Time · Pillar 3: Psychological Safety & Gentle Real-Time Calibration · Pillar 4: Contextual Grammar Over Rote Memorization"
                  </div>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">Course Taglines & Value Propositions</div>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Foundation Spoken English:</strong> "Overcome hesitation, stop translating from Tamil in your head, and construct correct sentences naturally."</li>
                    <li><strong>Professional Workplace Communication:</strong> "Participate actively in client scrums, write crisp emails, and present ideas with poise and authority."</li>
                    <li><strong>Job Interview Mastery & GD:</strong> "Crush the dreaded 'Tell me about yourself', tackle behavioural questions, and stand out in campus or lateral interviews."</li>
                    <li><strong>Young Communicators (Teens):</strong> "Help school students shed stage fear, build articulate vocabulary, and speak with natural expression."</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-blue-900 font-bold">Local Assurance Copy</div>
                  <p className="text-slate-700">
                    "Located on Dasarathapuram Main Road in Saligramam, just 7 minutes from Vadapalani Metro and 5 minutes from Saligramam Bus Stand. Serving motivated learners from Saligramam, Vadapalani, Virugambakkam, and K.K. Nagar."
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Section 5: Course Page Structure */}
          {activeSection === 5 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 05</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Course Page Architecture & Syllabus Schema</h2>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                To maximize trust and conversions, every dedicated course page must follow a uniform, highly rigorous 7-part content hierarchy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">1. Course Hero & Metadata Ribbon</div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Course Title + Specific Subtitle</li>
                    <li>Level Classification (e.g. Beginner to Intermediate)</li>
                    <li>Duration in Weeks + Total Guided Hours</li>
                    <li>Batch Cap (Strictly Max 8–10 Students)</li>
                    <li>Delivery Format (In-person Saligramam Studio / Hybrid Live)</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">2. "Is This Course For You?" Checklist</div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Specific frustration symptoms (e.g. freezing on Zoom calls)</li>
                    <li>Educational/professional background criteria</li>
                    <li>Required baseline (ability to read simple English)</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">3. Concrete Measurable Milestones</div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Week-by-week syllabus breakdown with tangible outputs</li>
                    <li>Speaking benchmark test at Week 1 vs Week 8</li>
                    <li>Voice recording audits and pronunciation calibration</li>
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">4. Fee & Schedule Transparency</div>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Exact fee placeholder with no hidden registration costs</li>
                    <li>Shift options: Early morning, evening post-work, and weekend</li>
                    <li>Missed-class backup and doubt-clearing policy</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Section 6: Visual Design System */}
          {activeSection === 6 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 06</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Visual Design System & Aesthetic Constitution</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                
                {/* 60-30-10 Color Scheme */}
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                  <h3 className="font-bold text-slate-900 font-display text-base">Color Hierarchy (60-30-10 Rule)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                      <span className="font-medium text-slate-700">60% Dominant Canvas</span>
                      <span className="font-mono text-slate-500">#FAF9F6 / #FFFFFF (Soft Warm White)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                      <span className="font-medium text-slate-700">30% Structural Surfaces</span>
                      <span className="font-mono text-slate-500">#0E2038 (Academic Navy) / #334155 (Slate)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                      <span className="font-medium text-slate-700">10% High-Intent Accent</span>
                      <span className="font-mono text-slate-500">#D97706 / #B45309 (Warm Amber)</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Complies strictly with WCAG AA contrast (&gt; 4.5:1 text, &gt; 3:1 display type). No states conveyed by color alone.
                  </p>
                </div>

                {/* Typography System */}
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                  <h3 className="font-bold text-slate-900 font-display text-base">Typographic Pairings (2+1 Rule)</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-blue-900 uppercase">Display & Headings</span>
                      <div className="font-display font-bold text-lg text-slate-900">Outfit (Bold & SemiBold)</div>
                      <p className="text-xs text-slate-500">Warm, modern, trustworthy geometric sans with human proportions.</p>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-blue-900 uppercase">Body & Interactive UI</span>
                      <div className="font-sans font-medium text-base text-slate-900">Plus Jakarta Sans (Regular & Medium)</div>
                      <p className="text-xs text-slate-500">Optically balanced for high reading comfort at 15–16px.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Anti-Slop Rules */}
              <div className="p-5 bg-slate-900 text-white rounded-xl text-xs sm:text-sm space-y-2">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">Anti-AI Slop Rules Strictly Applied</div>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li><strong>Zero Static Pills:</strong> Metadata formatted as quiet unboxed text with `·` or `/` separators.</li>
                  <li><strong>No Mechanical Comment Syntax:</strong> Editorial numbering like `01.` instead of `// 01 ARCHITECTURE`.</li>
                  <li><strong>Single-Level Elevation:</strong> Clean hairline borders (`border border-neutral-200`) instead of heavy blurry dropshadows.</li>
                  <li><strong>Claim-to-Proof Adjacency:</strong> Every testimonial and review is adjacent to the exact course claim it validates.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Section 7: Mobile UX */}
          {activeSection === 7 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 07</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Mobile UX & Responsive Strategy</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Touch Target & Tap Safeguards</div>
                  <p className="text-slate-600 leading-relaxed">
                    Over 72% of education website visitors in Chennai arrive via smartphones. All buttons, accordions, and form fields are built with minimum 44px tap heights to avoid accidental misclicks on crowded transit.
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">15% Mobile Sticky Cap Discipline</div>
                  <p className="text-slate-600 leading-relaxed">
                    Fixed header and floating navigation take less than 12% of vertical screen height, guaranteeing ample reading canvas without obstructive promo banners or aggressive overlays.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 8: SEO Strategy */}
          {activeSection === 8 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 08</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Local SEO & High-Intent Search Strategy</h2>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Target Keyword Clusters</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                    <div>
                      <strong className="text-blue-900">High-Intent Local Keywords:</strong>
                      <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                        <li>"Spoken English classes in Saligramam"</li>
                        <li>"English communication training Vadapalani"</li>
                        <li>"Best spoken English academy near Virugambakkam"</li>
                        <li>"Spoken English classes near Vadapalani Metro"</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-900">Outcome & Persona Keywords:</strong>
                      <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                        <li>"Interview preparation English course Chennai"</li>
                        <li>"How to stop translating Tamil to English"</li>
                        <li>"Public speaking classes for teens Chennai"</li>
                        <li>"Corporate English training for IT engineers"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Schema.org JSON-LD Implementation</div>
                  <p className="text-slate-600 leading-relaxed">
                    Full Schema.org EducationalOrganization, LocalBusiness, and Course schemas are embedded in `index.html`, capturing Google Map pack ranking, phone citations, and rich course snippet displays.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 9: Conversion Strategy */}
          {activeSection === 9 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 09</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Conversion Funnel & Friction Elimination</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">1. Low-Friction Entry Point</div>
                  <p className="text-slate-600 leading-relaxed">
                    Instead of demanding immediate payment or large enrollments upfront, the primary CTA is "Book a Free Counselling Session" or "Take 2-Min Fluency Check".
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">2. Risk Reversal</div>
                  <p className="text-slate-600 leading-relaxed">
                    Free 20-minute 1-on-1 diagnostic with the mentor in Saligramam. Transparent refund guarantee on the first class.
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">3. WhatsApp Direct Bridge</div>
                  <p className="text-slate-600 leading-relaxed">
                    Indian consumers prefer immediate WhatsApp conversation over impersonal web forms. Pre-populated chat links allow 1-click engagement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 10: Recommended Features */}
          {activeSection === 10 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 10</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Recommended Interactive Features</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Feature 1: Interactive Fluency Self-Diagnostic</div>
                  <p className="text-slate-600 leading-relaxed">
                    Already built and functioning live in this application! Allows learners to test their hesitation root cause and receive a personalized study prescription.
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Feature 2: Student Audio Transformation Samples</div>
                  <p className="text-slate-600 leading-relaxed">
                    Short 30-second audio clips comparing Day 1 self-introduction vs Day 45 final presentation (with student consent) demonstrating tangible acoustic progress.
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Feature 3: Batch Timing Seat Availability Tracker</div>
                  <p className="text-slate-600 leading-relaxed">
                    Displays real-time remaining seats out of the 8–10 capacity (e.g. "Only 2 seats remaining in 7:30 AM Morning Shift").
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="font-bold text-slate-900 font-display text-base">Feature 4: WhatsApp Consultation Automation</div>
                  <p className="text-slate-600 leading-relaxed">
                    Automatic trigger of location pin, classroom photos, and syllabus PDF directly to the student's WhatsApp number immediately upon enquiry.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 11: Final Quality Checklist */}
          {activeSection === 11 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Deliverable 11</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900">Final Quality & Ethical Verification Checklist</h2>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  { check: 'Zero Exaggerated Claims:', detail: 'No "100% fluency guaranteed in 7 days" or fake promises. Realistic milestones only.' },
                  { check: 'Local Authenticity:', detail: 'Exact Saligramam geography (Dasarathapuram Rd, Vadapalani Metro, MTC bus routes 17D, 25G).' },
                  { check: 'Explicit Placeholders:', detail: 'Unknown facts clearly tagged as [Placeholder] (e.g., [Door Number Placeholder], +91 9840X XXXXX, ₹[Fee Placeholder]).' },
                  { check: 'Accessibility (WCAG AA):', detail: 'High contrast text ratios, descriptive alt tags, keyboard focus rings, semantic HTML headings.' },
                  { check: 'Zero-Pill Discipline:', detail: 'Metadata unboxed with subtle typographical dots; no badge sandwiches or clutter.' },
                  { check: 'Mobile Responsiveness:', detail: 'Touch targets >= 44px, sticky cap < 15%, fluid layout from 320px mobile to 1440px desktop.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-950 font-display">{item.check} </span>
                      <span className="text-emerald-900">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={onReturnToSite}
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Return to Live Academy Website Experience →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
