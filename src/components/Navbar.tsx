import React from 'react';
import { BookOpen } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <header className="w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/80 sticky top-[41px] z-40 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <BookOpen className="w-4 h-4" />
          </span>
          <span>ResearchPotential<span className="text-emerald-400">.id</span></span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#masalah" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Masalah Riset
          </a>
          <a href="#workflow" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Workflow 4 Langkah
          </a>
          <a href="#modul" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Daftar Modul
          </a>
          <a href="#bonus" className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-emerald-300 font-semibold">
            3 Bonus Gratis
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md hover:shadow-emerald-400/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ambil Promo Rp 49.000
          </button>
        </div>
      </div>
    </header>
  );
};
