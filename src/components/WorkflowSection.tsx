import React, { useState } from 'react';
import { ArrowRight, Clock, Zap, FileCheck, Layers, Sparkles, Database, Search, GitBranch } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/landingData';

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = WORKFLOW_STEPS[activeStep];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <GitBranch className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="workflow" className="py-16 md:py-24 bg-[#080D1A] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" />
            <span>Alur Kerja Terstandarisasi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug" style={{ textWrap: 'balance' }}>
            Workflow 4 Langkah: Dari Ratusan PDF Menjadi Draf Novelty dalam 1 Hari
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Perbandingan waktu: Cara konvensional membutuhkan <strong className="text-rose-400">4–8 minggu</strong> penuh kelelahan, sedangkan protokol ini hanya membutuhkan <strong className="text-emerald-400">kurang dari 2–3 jam</strong> kerja fokus.
          </p>
        </div>

        {/* Step Selector Buttons Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-extrabold ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                    TAHAP {step.step}
                  </span>
                  <span className="p-1 rounded bg-slate-800/80">
                    {getStepIcon(idx)}
                  </span>
                </div>
                <div>
                  <div className={`text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.tool}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Step Overview & Actions */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                  Tahap 0{activeStep + 1} of 04
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Peran AI: {current.role}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {current.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {current.action}
              </p>

              {/* Sample Action / Command Preview */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Formula Operasional yang Dijalankan:</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-emerald-300/90 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  {current.samplePromptOrAction}
                </div>
              </div>

              {/* Deliverable result */}
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs sm:text-sm text-slate-200">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Artefak yang Dihasilkan:</span>
                  <span>{current.outputArtifact}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Time Saved Metric & Workflow Comparison */}
            <div className="lg:col-span-5 bg-slate-950/70 rounded-xl p-5 border border-slate-800">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Efisiensi Waktu pada Tahap Ini</span>
              </h4>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                  <div className="text-[11px] text-emerald-300 font-semibold uppercase">Dengan Alur E-Book Ini:</div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">{current.timeTaken}</div>
                  <div className="text-xs text-slate-400 mt-1">Selesai terverifikasi dengan rujukan nomor halaman asli.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Cara Manual / Konvensional:</div>
                  <div className="text-xl font-bold text-slate-400 line-through mt-0.5">{current.manualTime}</div>
                  <div className="text-xs text-slate-500 mt-1">Membaca PDF satu per satu, membuat catatan manual di kertas/Word.</div>
                </div>
              </div>

              {/* Quick Navigation to Next Step */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded transition-colors ${
                    activeStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white bg-slate-800'
                  }`}
                >
                  ← Tahap Sebelumnya
                </button>

                <button
                  disabled={activeStep === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1 ${
                    activeStep === WORKFLOW_STEPS.length - 1
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-950 bg-emerald-400 hover:bg-emerald-300'
                  }`}
                >
                  <span>Tahap Berikutnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
