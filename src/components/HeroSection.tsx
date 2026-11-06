import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Download, Layers, Sparkles, Eye } from 'lucide-react';
import { MAIN_PRODUCT } from '../data/landingData';

interface HeroSectionProps {
  onCtaClick: () => void;
  onImageClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onImageClick }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct-Response Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Attention Grabbing Pre-headline (Clean unboxed text metadata) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-emerald-400 mb-4 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Panduan Riset Khusus Dosen</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Peneliti</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Mahasiswa S2 / S3 & Skripsi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6" style={{ textWrap: 'balance' }}>
              Temukan <span className="text-emerald-400">Research Gap Valid</span> dan Rumuskan Novelty Berdaya Saing Jurnal Bereputasi <span className="underline decoration-emerald-500/60 decoration-wavy decoration-2">Hanya dalam Hitungan Jam</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Tinggalkan cara manual membaca 100+ PDF yang melelahkan. Kuasai sinergi terstruktur <strong className="text-white font-semibold">Google NotebookLM</strong> (ekstraksi matriks bukti 100% bebas halusinasi) dan <strong className="text-white font-semibold">ChatGPT</strong> (sintesis gap teoretis, metodologis & praktis) untuk meloloskan proposal tesis/disertasi dan artikel SINTA/Scopus Anda.
            </p>

            {/* Offer Highlight Box Inside Hero */}
            <div className="w-full bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 sm:p-5 mb-8 backdrop-blur-sm shadow-xl shadow-emerald-950/20">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Penawaran Paket Peluncuran (Beli 1 Gratis 3)
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                      Rp 49.000
                    </span>
                    <span className="text-base text-slate-500 line-through">
                      Rp 149.000
                    </span>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                      HEMAT 67%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Sudah termasuk 3 E-Book Bonus Eksklusif senilai Rp 397.000 (100% Gratis).
                  </p>
                </div>

                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm md:text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Ambil Paket E-Book Sekarang</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Microcopy Guarantee & Instant Delivery */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  Akses Download Langsung
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Sekali Bayar Akses Selamanya
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  100% Tools AI Legal & Gratis
                </span>
              </div>
            </div>

            {/* Quick bullet outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ekstraksi 20-30 paper secara simultan tanpa takut AI mengarang fakta</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Matriks komparatif otomatis lengkap dengan nomor halaman verbatim</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rumuskan 3 jenis gap (Teoretis, Metodologis, Praktis) dengan skor kelayakan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Template formulasi kalimat 'The Present Study' siap masuk Bab 1 / Paper</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact 3D Product Bundle Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-lg group">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-cyan-500/20 rounded-2xl filter blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Main Mockup Card Container */}
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-md">
                
                {/* Visual Image */}
                <div 
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  onClick={onImageClick}
                  title="Klik untuk memperbesar gambar bundle"
                >
                  <img
                    src={MAIN_PRODUCT.coverImage}
                    alt="Mockup E-Book Utama dan 3 E-Book Bonus Unlock Research Potential"
                    className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Zoom hint overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    <span>Klik untuk Lihat Tampilan Penuh</span>
                  </div>
                </div>

                {/* Bundle Summary Pill Strip below image */}
                <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block">Total Paket Diterima:</span>
                    <span className="font-bold text-white text-sm">1 E-Book Utama + 3 E-Book Bonus</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block">Nilai Bundle:</span>
                    <span className="font-extrabold text-emerald-400 text-sm">Hanya Rp 49.000</span>
                  </div>
                </div>

              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-slate-950 border border-emerald-500/40 rounded-lg py-2 px-3.5 shadow-xl flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Bebas Halusinasi AI</div>
                  <div className="text-xs font-bold text-white">Grounded RAG Protocol</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Academic Credential & Social Proof Strip (Full width row below split) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              1.400+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Akademisi & Peneliti Terbantu
            </div>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              80+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Perguruan Tinggi di Indonesia
            </div>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Tools AI Legal & Sepenuhnya Gratis
            </div>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
              Scopus & SINTA
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Kompatibel Standar Publikasi Bereputasi
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
