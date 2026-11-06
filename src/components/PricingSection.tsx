import React from 'react';
import { Check, ShieldCheck, Zap, Download, Coffee, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { MAIN_PRODUCT } from '../data/landingData';

interface PricingSectionProps {
  onOrderClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="penawaran" className="py-16 md:py-24 bg-[#0B1120] relative border-b border-slate-800/80">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" />
            <span>Investasi Edukasi Berkelanjutan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Dapatkan Akses E-Book Utama + 3 Bonus Eksklusif Hari Ini
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Satu keputusan kecil hari ini dapat menyelamatkan proposal, tesis, atau naskah jurnal Anda dari penolakan berbulan-bulan.
          </p>
        </div>

        {/* Pricing Card Box */}
        <div className="max-w-3xl mx-auto bg-slate-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Ribon */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-1.5 px-6 rounded-full inline-block mb-6 shadow-md">
            PAKET LENGKAP ALL-IN-ONE (E-BOOK + 3 BONUS + PROMPT REPOSITORY)
          </div>

          <div className="grid sm:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800">
            {/* Price presentation */}
            <div className="sm:col-span-7">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">
                Investasi Sekali Bayar (Tanpa Biaya Langganan)
              </span>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
                  Rp 49.000
                </span>
                <span className="text-lg text-slate-500 line-through">
                  Rp 149.000
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Hemat 67% khusus periode peluncuran. Akses file langsung dikirim detik ini juga.
              </p>
            </div>

            {/* Coffee Value Comparison Callout */}
            <div className="sm:col-span-5 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                <Coffee className="w-4 h-4" />
                <span>Hanya Seharga 1 Cangkir Kopi:</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Rp 49.000 lebih murah daripada sekali nongkrong di cafe, tetapi bisa mencegah penundaan semester yang berharga jutaan rupiah.
              </p>
            </div>
          </div>

          {/* Checklist of Everything Included */}
          <div className="py-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
              Apa Saja yang Akan Anda Dapatkan:
            </span>

            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>E-Book Utama:</strong> Unlock Research Potential (NotebookLM + ChatGPT, 138 Hlm)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>FREE BONUS #1:</strong> Panduan VOSviewer, Mendeley & Publish or Perish (Rp 149k)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>FREE BONUS #2:</strong> Triad AI Riset: Claude, Consensus & ResearchRabbit (Rp 149k)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>FREE BONUS #3:</strong> Open Knowledge Maps Visualisasi Klaster Riset (Rp 99k)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>50+ Prompt Library:</strong> Template siap salin-tempel bahasa Indonesia & Inggris</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Spreadsheet Matrix Template:</strong> Format lembar kerja ekstraksi literatur</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Gratis Pembaruan Materi:</strong> Update berkala saat ada fitur baru NotebookLM</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Akses Unduh Selamanya:</strong> Disimpan di Google Drive permanen milik Anda</span>
              </div>
            </div>
          </div>

          {/* Big Direct Call to Action Button */}
          <div className="pt-2">
            <button
              onClick={onOrderClick}
              className="w-full py-4 px-6 text-base sm:text-lg font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Ambil Akses E-Book + 3 Bonus Sekarang (Hanya Rp 49.000)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Icons & Payment Methods */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Pembayaran Aman (QRIS & Bank Transfer)
              </span>
              <span className="flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                Pengiriman Berkas Otomatis & Instan
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Privasi 100% Terjaga
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
