import React from 'react';
import { AlertTriangle, Clock, Ban, HelpCircle, FileX, ArrowDown } from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';

export const PainPointsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'literature-overload':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'hard-to-prove-novelty':
        return <HelpCircle className="w-5 h-5 text-rose-400" />;
      case 'ai-hallucination-fear':
        return <Ban className="w-5 h-5 text-red-400" />;
      case 'semester-delay':
      default:
        return <FileX className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section id="masalah" className="py-16 md:py-24 bg-[#080D1A] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-rose-400 uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Kenyataan Pahit Menulis Proposal & Artikel Ilmiah</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Apakah Anda Sedang Mengalami 4 Kebuntuan Riset yang Melelahkan Ini?
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Menulis tesis, disertasi, atau naskah jurnal bukan hanya soal kerja keras. Tanpa alur kerja yang tepat, 80% energi Anda habis untuk hal yang salah.
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/80">
                      {getIcon(item.id)}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      Masalah #0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Real Researcher Quote */}
                <blockquote className="text-sm font-medium italic text-slate-300 bg-slate-950/60 border border-slate-800/60 rounded-lg p-3.5 mb-4">
                  {item.quote}
                </blockquote>

                {/* Title & Detailed Explanation */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Concrete Consequence */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-start gap-2 text-xs text-rose-300 font-medium">
                <span className="shrink-0 text-rose-400 font-bold">Dampak Nyata:</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agitation Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-rose-950/40 via-slate-900 to-rose-950/40 border border-rose-500/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Berapa Biaya Sebenarnya dari Proposal yang Mandek?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
            Bukan hanya kelelahan fisik dan mental. Setiap semester yang tertunda berarti <strong className="text-rose-400 font-semibold">biaya UKT/SPP tambahan senilai Rp 5 – 15 juta</strong>, tertundanya promosi jabatan fungsional dosen, serta risiko judul riset Anda didahului peneliti lain.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Kabar baiknya: Ada cara yang jauh lebih cerdas, presisi, dan terbukti ilmiah</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
