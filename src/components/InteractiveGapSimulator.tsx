import React, { useState } from 'react';
import { Sparkles, Brain, CheckCircle2, Award, Zap, ArrowRight, ShieldCheck, Database } from 'lucide-react';
import { SAMPLE_SIMULATION_DATA } from '../data/landingData';

interface InteractiveGapSimulatorProps {
  onUnlockClick: () => void;
}

export const InteractiveGapSimulator: React.FC<InteractiveGapSimulatorProps> = ({ onUnlockClick }) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'gap-synthesis'>('gap-synthesis');
  const [selectedTopic, setSelectedTopic] = useState<string>("Penerapan Blended Learning Berbasis Gamifikasi pada Kemandirian Belajar Siswa");

  const topics = [
    "Penerapan Blended Learning Berbasis Gamifikasi pada Kemandirian Belajar Siswa",
    "Adopsi Green Accounting & ESG terhadap Nilai Perusahaan Sektor Energi",
    "Penerapan Deep Learning untuk Deteksi Dini Hama Padi pada Citra UAV"
  ];

  return (
    <section className="py-16 bg-[#0B1120] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4" />
            <span>Interactive Live Simulation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Lihat Bagaimana NotebookLM + ChatGPT Menemukan Gap Riset dalam Praktik
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Uji coba simulasi langsung output yang akan Anda hasilkan setelah mempraktikkan isi e-book ini.
          </p>
        </div>

        {/* Topic Selector */}
        <div className="max-w-4xl mx-auto mb-6 bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
            Pilih Contoh Topik Riset:
          </span>
          <div className="flex flex-wrap gap-2">
            {topics.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTopic(t)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors text-left cursor-pointer ${
                  selectedTopic === t
                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Simulation Output Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Bar of the Simulation Card */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-semibold text-white">
                Live Simulator: Grounded RAG + 3-Layer Gap
              </span>
            </div>

            {/* Toggle Modes */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('gap-synthesis')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'gap-synthesis'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Sintesis 3 Jenis Gap & Scoring
              </button>
              <button
                onClick={() => setActiveTab('matrix')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'matrix'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Matriks Bukti NotebookLM
              </button>
            </div>
          </div>

          {/* Simulation Content Body */}
          <div className="p-5 sm:p-6">
            {activeTab === 'gap-synthesis' ? (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Hasil sintesis cross-paper dari 24 artikel Scopus Q1-Q3 (2023–2025):
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    3 Gap Terverifikasi
                  </span>
                </div>

                <div className="space-y-4">
                  {SAMPLE_SIMULATION_DATA.extractedGaps.map((gap, i) => (
                    <div key={i} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">
                          {gap.type}
                        </span>

                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-400">
                            Feasibility: <strong className="text-emerald-400">{gap.feasibilityScore}/10</strong>
                          </span>
                          <span className="text-slate-400">
                            Publishability: <strong className="text-amber-400">{gap.publishabilityScore}/10</strong>
                          </span>
                        </div>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                        {gap.title}
                      </h4>

                      <div className="text-xs text-slate-400 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 mb-2.5">
                        <span className="font-semibold text-slate-300 block mb-0.5">Bukti Empiris dari NotebookLM:</span>
                        {gap.evidence}
                      </div>

                      <div className="text-xs text-emerald-300 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/20">
                        <span className="font-bold text-emerald-400 block mb-0.5">Rekomendasi Novelty Siap Tulis:</span>
                        {gap.noveltyRecommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 text-xs text-slate-400">
                  Potongan ekstraksi data terstruktur NotebookLM (dengan rujukan halaman langsung tanpa halusinasi):
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/60">
                        <th className="py-2.5 px-3 font-semibold">Paper Ref</th>
                        <th className="py-2.5 px-3 font-semibold">Metode & Sampel</th>
                        <th className="py-2.5 px-3 font-semibold">Temuan Utama</th>
                        <th className="py-2.5 px-3 font-semibold">Keterbatasan Penulis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-white whitespace-nowrap">
                          Chen et al. (2024)<br />
                          <span className="text-[10px] text-emerald-400">[Source #3, hal. 14]</span>
                        </td>
                        <td className="py-2.5 px-3">Eksperimen 6 minggu, n=120 mahasiswa di Taiwan</td>
                        <td className="py-2.5 px-3">Gamifikasi leaderboard menaikkan kemandirian belajar 18%</td>
                        <td className="py-2.5 px-3 text-rose-300/90">Tidak mengukur retensi jangka panjang (&gt;2 bulan)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-white whitespace-nowrap">
                          Al-Mansoor (2025)<br />
                          <span className="text-[10px] text-emerald-400">[Source #7, hal. 8]</span>
                        </td>
                        <td className="py-2.5 px-3">Kuantitatif SEM-PLS, n=340 siswa sekolah menengah</td>
                        <td className="py-2.5 px-3">Badges tidak signifikan mempengaruhi motivasi otonom</td>
                        <td className="py-2.5 px-3 text-rose-300/90">Beban kognitif desain UI tidak dikontrol dalam kuesioner</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-white whitespace-nowrap">
                          Sari & Pratama (2024)<br />
                          <span className="text-[10px] text-emerald-400">[Source #11, hal. 22]</span>
                        </td>
                        <td className="py-2.5 px-3">Mix-method, n=85 siswa SMK di Yogyakarta</td>
                        <td className="py-2.5 px-3">Siswa antusias namun terkendala jaringan internet lambat</td>
                        <td className="py-2.5 px-3 text-rose-300/90">Fokus pada kota urban, belum mencakup area 3T</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Bottom CTA Inside Simulator */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Ingin menerapkan alur ini pada topik riset Anda sendiri hari ini?
              </div>
              <button
                onClick={onUnlockClick}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Pelajari Rumus Lengkapnya (Rp 49.000)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
