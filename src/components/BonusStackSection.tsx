import React from 'react';
import { Gift, CheckCircle2, Star, ArrowRight, ShieldCheck, Sparkles, BookMarked, Network, Cpu, Compass } from 'lucide-react';
import { BONUS_STACK, MAIN_PRODUCT } from '../data/landingData';

interface BonusStackSectionProps {
  onClaimClick: () => void;
}

export const BonusStackSection: React.FC<BonusStackSectionProps> = ({ onClaimClick }) => {
  const getBonusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Network className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 2:
      default:
        return <Compass className="w-5 h-5 text-amber-400" />;
    }
  };

  const formatRupiah = (val: number) => `Rp ${val.toLocaleString('id-ID')}`;

  return (
    <section id="bonus" className="py-16 md:py-24 bg-[#080D1A] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
            <Gift className="w-4 h-4" />
            <span>Exclusive Bonus Stack (Total Nilai Rp 397.000)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Beli E-Book Utama Hari Ini, Dapatkan 3 E-Book Bonus Eksklusif <span className="text-amber-400 underline decoration-amber-500/50">100% GRATIS</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Kami tidak ingin Anda hanya memiliki satu metode. Tiga e-book pelengkap ini dirancang untuk melengkapi pembuktian bibliometrik dan pelacakan literatur tingkat lanjut Anda.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {BONUS_STACK.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative shadow-xl hover:border-amber-400/60 transition-all group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded">
                    {bonus.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-right">
                    <span className="text-xs text-slate-500 line-through">
                      {formatRupiah(bonus.originalPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      GRATIS
                    </span>
                  </div>
                </div>

                {/* Visual Icon Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {getBonusIcon(index)}
                  </span>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide block">E-Book Lengkap</span>
                    <span className="text-xs font-bold text-emerald-400">Termasuk PDF Siap Unduh</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {bonus.subtitle}
                </p>

                {/* Key Benefit Box */}
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 mb-5 text-xs text-amber-200/90 font-medium leading-relaxed">
                  <strong className="text-amber-400 block mb-0.5">Manfaat Strategis:</strong>
                  {bonus.highlightBenefit}
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Isi Materi di Dalamnya:
                  </span>
                  {bonus.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools footer badge */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400">Tools:</span>
                <div className="flex flex-wrap gap-1">
                  {bonus.toolsUsed.map((tool, i) => (
                    <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Box (Conversion Anchor) */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Perhitungan Nilai Nyata Bundle
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              Bandingkan Apa yang Anda Dapatkan vs Biaya Investasi Hari Ini
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
            <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-emerald-400" />
                <span>E-Book Utama: Unlock Research Potential (NotebookLM + ChatGPT)</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">Rp 149.000</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Bonus #1: Panduan Pemetaan VOSviewer, Mendeley & PoP</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">Rp 149.000</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Bonus #2: Triad Riset AI (Claude, Consensus & ResearchRabbit)</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">Rp 149.000</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>Bonus #3: Visualisasi Klaster Open Knowledge Maps</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">Rp 99.000</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>50+ Template Prompt Ilmiah & Lembar Kerja Matriks Riset</span>
              </span>
              <span className="font-mono font-semibold text-slate-200">Rp 99.000</span>
            </div>
          </div>

          {/* Grand Total Comparison */}
          <div className="p-4 sm:p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Total Nilai Sebenarnya:</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-400 line-through">
                Rp 645.000
              </span>
            </div>

            <div className="text-right">
              <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wider">
                Harga Promo Terbatas Hari Ini:
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                Hanya Rp 49.000
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClaimClick}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Klaim Bundle Lengkap (4 E-Book) Hanya Rp 49.000</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-400 mt-2">
              *Harga dapat kembali ke normal Rp 149.000 sewaktu-waktu tanpa pemberitahuan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
