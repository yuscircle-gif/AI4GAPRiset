import React from 'react';
import { BookOpen, Shield, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] text-slate-400 text-xs py-12 px-4 sm:px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-white font-bold text-base mb-3">
              <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center border border-slate-700 shrink-0 overflow-hidden">
                <img 
                  src="/assets/aistudio/logo_bd2_54a633d6.jpg" 
                  alt="BiruDaun Corp" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold tracking-tight">BiruDaun <span className="text-emerald-400">Corp</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-4">
              Platform literasi kecerdasan buatan terapan untuk riset akademik oleh BiruDaun Corp. Membantu dosen, peneliti, dan mahasiswa merumuskan novelty ilmiah secara mandiri, presisi, dan bertanggung jawab.
            </p>
            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} BiruDaun Corp. Seluruh Hak Cipta Dilindungi Undang-Undang.
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block mb-3">
              Navigasi Cepat
            </span>
            <ul className="space-y-2">
              <li><a href="#masalah" className="hover:text-emerald-400 transition-colors">Masalah Riset & Solusi</a></li>
              <li><a href="#workflow" className="hover:text-emerald-400 transition-colors">Workflow 4 Tahap</a></li>
              <li><a href="#modul" className="hover:text-emerald-400 transition-colors">Daftar Modul E-Book</a></li>
              <li><a href="#bonus" className="hover:text-emerald-400 transition-colors">3 Bonus E-Book Gratis</a></li>
              <li><a href="#penawaran" className="hover:text-emerald-400 transition-colors">Penawaran Promo Rp 49.000</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Academic Integrity Disclaimer */}
          <div className="md:col-span-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Komitmen Integritas Akademik</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              BiruDaun Corp menyajikan materi panduan edukasi metodologi mandiri. Kami secara tegas <strong>menolak segala bentuk joki tesis, fabrikasi data, atau plagiarisme</strong>. Seluruh alur kerja dalam panduan ini bertujuan memberdayakan peneliti mengekstrak fakta literatur asli secara mandiri dan transparan.
            </p>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            Disclaimer: Google NotebookLM adalah merek dagang dari Google LLC. ChatGPT adalah merek dagang dari OpenAI. Panduan ini merupakan publikasi edukasi independen.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Kontak Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
