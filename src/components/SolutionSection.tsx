import React, { useState } from 'react';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, Copy, Check, Sparkles, Brain, Cpu, FileText } from 'lucide-react';
import { MODULES, MAIN_PRODUCT } from '../data/landingData';

export const SolutionSection: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const samplePrompt = `Peran Anda: Evaluator Novelty Riset & Editor Senior Jurnal Internasional Bereputasi (Scopus Q1).
Tugas: Menganalisis matriks komparasi dari 25 paper terlampir (hasil ekstraksi NotebookLM).

Instruksi Analisis:
1. Identifikasi konsensus metodologis utama yang digunakan oleh mayoritas penulis dalam 3 tahun terakhir.
2. Temukan minimal 2 keterbatasan (limitations) yang paling sering diakui oleh para peneliti sebelumnya.
3. Rumuskan 3 kandidat Research Gap yang spesifik:
   - Gap Teoretis: Asumsi teori apa yang belum diuji secara mendalam?
   - Gap Metodologis: Kelemahan alat ukur / teknik analisis masa lalu apa yang bisa diatasi?
   - Gap Praktis/Kontekstual: Lokus atau populasi spesifik apa yang belum pernah dijangkau?
4. Berikan skor Feasibility (1-10) dan Publishability (1-10) untuk masing-masing gap beserta argumen justifikasinya.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="modul" className="py-16 md:py-24 bg-[#0B1120] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Solusi Terstruktur & Teruji</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Memperkenalkan E-Book Utama: <br className="hidden sm:inline" />
            <span className="text-emerald-400">{MAIN_PRODUCT.shortTitle}</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Bukan sekadar teori generik, melainkan panduan taktis step-by-step memanfaatkan kombinasi dua kecerdasan buatan dengan peran yang sangat spesifik.
          </p>
        </div>

        {/* The Synergy Mechanism: NotebookLM vs ChatGPT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Card 1: NotebookLM */}
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Brain className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Langkah Ekstraksi</span>
                <h3 className="text-xl font-bold text-white">Google NotebookLM</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              <strong>Sebagai Analis Ekstraksi Tanpa Halusinasi:</strong> Bekerja strictly dengan sistem <em>grounded retrieval</em> pada 20–50 PDF artikel yang Anda upload. Setiap poin data (metode, sampel, temuan, limitasi) memiliki tautan nomor kutipan yang langsung menunjuk ke baris teks pada halaman paper asli.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Nol risiko halusinasi atau mengarang paper palsu</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Menghasilkan matriks komparatif lintas puluhan paper dalam 1 klik</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Gratis menggunakan akun Google Anda</span>
              </li>
            </ul>
          </div>

          {/* Card 2: ChatGPT */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Langkah Sintesis</span>
                <h3 className="text-xl font-bold text-white">ChatGPT (Prompt Chain Ilmiah)</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              <strong>Sebagai Arsitek Sintesis & Penulis Akademik:</strong> Menerima data matriks bersih dari NotebookLM, kemudian melakukan inferensi tingkat lanjut untuk merumuskan celah riset, menghitung skor <em>feasibility</em>, serta menyusun paragraf 'The Present Study' berstandar internasional.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Merumuskan Gap Teoretis, Metodologis, dan Praktis</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Scoring kelayakan riset (Feasibility & Publishability)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Dapat dijalankan pada ChatGPT versi gratis (Free Tier)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Module Breakdown */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                Silabus Kurikulum Lengkap
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                5 Modul Praktis yang Akan Anda Pelajari
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Disajikan dengan tangkapan layar antarmuka asli (step-by-step), studi kasus nyata, dan template prompt yang tinggal Anda tiru.
            </p>
          </div>

          <div className="space-y-3">
            {MODULES.map((module, index) => {
              const isOpen = activeModuleIndex === index;
              return (
                <div
                  key={module.number}
                  className={`border rounded-xl transition-all ${
                    isOpen ? 'bg-slate-900 border-emerald-500/50 shadow-lg' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setActiveModuleIndex(isOpen ? -1 : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs sm:text-sm shrink-0 border border-emerald-500/30">
                        {module.number}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {module.title}
                        </h4>
                        <span className="text-xs text-slate-400 line-clamp-1 hidden sm:block">
                          {module.description}
                        </span>
                      </div>
                    </div>

                    <span className="text-slate-400 p-1">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-800/80">
                      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                        {module.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800/60">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                            Materi Pembahasan Inti:
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-0.5">·</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80 text-xs">
                          <div>
                            <span className="text-slate-400 block font-medium">Output yang Dihasilkan:</span>
                            <span className="text-white font-semibold">{module.output}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Tools yang Digunakan:</span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {module.tools.map((t, i) => (
                                <span key={i} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sneak-Peek Prompt Preview Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm sm:text-base font-bold text-white">
                Contoh Bocoran Template Prompt Akademis (Tercakup di Dalam E-Book)
              </h4>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-slate-700"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Contoh Prompt</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-xs sm:text-sm font-mono text-slate-300 bg-slate-900/80 p-4 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {samplePrompt}
          </pre>
          <div className="mt-3 text-right text-xs text-slate-500">
            *E-Book mencakup 50+ variasi prompt akademik untuk berbagai disiplin ilmu & gaya sitasi.
          </div>
        </div>

      </div>
    </section>
  );
};
