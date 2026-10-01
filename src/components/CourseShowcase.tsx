import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES } from '../data/academyData';
import { Check, Clock, Users, Calendar, ArrowRight, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseShowcaseProps {
  onSelectCourseForBooking: (courseTitle: string) => void;
}

export const CourseShowcase: React.FC<CourseShowcaseProps> = ({ onSelectCourseForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const categories = ['All', 'Spoken English', 'Career & Interview', 'Teens & Kids'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  const toggleExpand = (courseId: string) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <section id="courses-section" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-900 mb-2">
              Structured Learning Pathways
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Practical Spoken English Courses in Saligramam
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Every course is structured with 70% active speaking practice, small batches, and personalized feedback. Choose the program that aligns with your current milestone.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (allowed as functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-neutral-200 rounded-lg shadow-2xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course: Course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata with subtle dots */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-blue-900">{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {course.batchSize}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                    {course.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
                    {course.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Core outcomes checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Key Capabilities You Will Build
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {course.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Batch Shifts */}
                  <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-600 space-y-1">
                    <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-900" />
                      Available Class Shifts (Saligramam Classroom & Online Live)
                    </div>
                    <div className="text-slate-600 pl-5">
                      {course.timingOptions.join(' · ')}
                    </div>
                  </div>

                  {/* Expandable Syllabus Detail */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                        Detailed Weekly Learning Roadmap
                      </div>
                      <div className="space-y-3">
                        {course.syllabusWeeks.map((week, wIdx) => (
                          <div key={wIdx} className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200/80 text-xs">
                            <div className="flex items-center justify-between font-semibold text-slate-900 mb-1">
                              <span className="text-blue-900">{week.week}: {week.focus}</span>
                            </div>
                            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1 pl-1">
                              {week.topics.map((t, tIdx) => (
                                <li key={tIdx}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900">
                        <strong className="font-semibold">Fee Transparency Note:</strong> Course investment is {course.feePlaceholder}. Flexible installment options are available. Study materials and personalized audio-review audits are included with zero hidden registration fees.
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer CTAs */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => toggleExpand(course.id)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer py-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>{isExpanded ? 'Hide Syllabus Breakdown' : 'View Full Syllabus & Roadmap'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectCourseForBooking(course.title)}
                    className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap"
                  >
                    <span>Enquire for this Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Course Reassurance */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-neutral-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 font-display">
              Not sure which level is right for you?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Visit our Saligramam centre for a friendly, 20-minute diagnostic chat with our lead trainer. We will pinpoint your exact hesitation bottlenecks and recommend the right batch with zero pressure to join.
            </p>
          </div>
          <button
            onClick={() => onSelectCourseForBooking('Free Level Counselling')}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 cursor-pointer shadow-xs transition-colors"
          >
            Schedule Free Walk-In Level Check
          </button>
        </div>

      </div>
    </section>
  );
};
