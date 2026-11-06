import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck, Quote } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#080D1A] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Testimonials Proof Section (adjacent to FAQ / Risk Reversal) */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-emerald-400" />
              <span>Pengalaman Nyata Pembaca</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Apa Kata Dosen dan Mahasiswa Pascasarjana?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Dipercaya oleh akademisi di berbagai kampus ternama di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative"
              >
                <div>
                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                    {t.avatar}
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-white block">{t.name}</span>
                    <span className="text-slate-400 block text-[11px]">{t.role}</span>
                    <span className="text-slate-500 block text-[10px]">{t.institution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Masih Ragu? Temukan Jawabannya di Sini
          </h2>

          <p className="mt-3 text-slate-400 text-xs sm:text-base leading-relaxed">
            Semua hal yang perlu Anda ketahui mengenai kepatutan akademik, lisensi tools, dan pengiriman berkas.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all ${
                  isOpen ? 'bg-slate-900 border-slate-700 shadow-md' : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
