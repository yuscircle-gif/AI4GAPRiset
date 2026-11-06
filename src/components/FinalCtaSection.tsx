import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Download, MessageCircle } from 'lucide-react';
import { MAIN_PRODUCT } from '../data/landingData';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
  onWhatsAppClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick, onWhatsAppClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#080D1A] via-[#0B1528] to-[#080D1A] relative overflow-hidden border-b border-slate-800">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Promo Peluncuran Terbatas — Beli 1 E-Book Gratis 3 E-Book Bonus</span>
        </div>

        {/* Main Final Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6" style={{ textWrap: 'balance' }}>
          Jangan Biarkan Tesis atau Naskah Jurnal Anda Tertunda Satu Semester Lagi
        </h2>

        {/* Persuasive copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Hanya dengan investasi <strong className="text-emerald-400 font-bold">Rp 49.000</strong> (kurang dari harga satu kali makan siang), Anda memegang peta jalan tercepat untuk menaklukkan kebuntuan literatur dan menghadirkan novelty yang tidak bisa dibantah oleh penguji maupun reviewer.
        </p>

        {/* Visual Comparison Box: 2 Choices */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left text-xs sm:text-sm">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Pilihan A (Tanpa Panduan):
            </span>
            <p className="text-slate-400">
              Lanjut membaca PDF manual berminggu-minggu, terjebak revisi berulang, dan mengambil risiko draf ditolak karena dianggap "tidak ada kebaruan".
            </p>
          </div>

          <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Pilihan B (Miliki Panduan Hari Ini):
            </span>
            <p className="text-slate-200 font-medium">
              Gunakan kombinasi NotebookLM + ChatGPT, ekstraksi 25 paper dalam 25 menit, rumuskan 3 jenis gap, dan selesaikan proposal Anda minggu ini!
            </p>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Ambil Akses Bundle Rp 49.000 Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Microcopy & Fast WhatsApp Help */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Download className="w-4 h-4 text-emerald-400" />
            File Langsung Dikirim ke Email & WhatsApp
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Akses Google Drive Permanen
          </span>
          <button
            onClick={onWhatsAppClick}
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Ada Pertanyaan? Chat Admin WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
