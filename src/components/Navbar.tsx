import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Menu, X, BookOpen, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenDiagnostic
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Courses', tab: 'courses' },
    { label: 'Methodology', tab: 'methodology' },
    { label: 'Student Stories', tab: 'stories' },
    { label: 'About & Faculty', tab: 'about' },
    { label: 'Location & Contact', tab: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      {/* Top micro-bar for local trust & quick phone access */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-medium">Saligramam, Chennai</span>
            <span aria-hidden="true">·</span>
            <span>Near Vadapalani Metro & Prasad Studios</span>
            <span aria-hidden="true">·</span>
            <span>Strictly 8–10 Students Per Batch</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="text-amber-300 hover:text-amber-200 font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 2-Min Fluency Self-Check</span>
            </button>
            <span aria-hidden="true">·</span>
            <a href="tel:+919840000000" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>Call: +91 9840X XXXXX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Single Wordmark), Zone 2 (Clean Nav Links), Zone 3 (Primary CTAs) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('home')}
            className="text-left group cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display group-hover:text-blue-900 transition-colors">
              Words and Wisdom
            </span>
            <span className="block text-[11px] font-medium tracking-wider text-slate-500 uppercase -mt-0.5">
              Spoken English Academy · Saligramam
            </span>
          </button>
        </div>

        {/* Zone 2: Clean text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => {
                  setActiveTab(item.tab);
                }}
                className={`transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-blue-900 font-semibold border-b-2 border-blue-900'
                    : 'hover:text-slate-900 hover:border-b-2 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions & Blueprint Deck Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setActiveTab(activeTab === 'blueprint' ? 'home' : 'blueprint')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors border flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'blueprint'
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="View complete 11-part architectural strategy & website brief"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>{activeTab === 'blueprint' ? 'Exit Blueprint Deck' : 'Strategy Deck (11 Sections)'}</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            Book Free Counselling
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'blueprint' ? 'home' : 'blueprint')}
            className="p-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-md border border-slate-200"
          >
            {activeTab === 'blueprint' ? 'Site' : 'Deck'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  setActiveTab(item.tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === item.tab
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenDiagnostic();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200 rounded-lg"
            >
              Take 2-Min Fluency Diagnostic
            </button>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-900 rounded-lg shadow-sm"
            >
              Book Free Counselling Session
            </button>
            <button
              onClick={() => {
                setActiveTab(activeTab === 'blueprint' ? 'home' : 'blueprint');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg"
            >
              {activeTab === 'blueprint' ? 'Return to Academy Website' : 'Open 11-Section Strategy Deck'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
