import React from 'react';
import { X, Sparkles, Download, ArrowRight } from 'lucide-react';
import { MAIN_PRODUCT } from '../data/landingData';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick: () => void;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ isOpen, onClose, onOrderClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-emerald-500/20 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold text-white text-xs sm:text-sm">
              Visual Preview: E-Book Utama + 3 E-Book Bonus (Bundle Eksklusif)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-[#070b14]">
          <img
            src={MAIN_PRODUCT.coverImage}
            alt="3D Mockup Bundle E-Book Utama dan 3 E-Book Bonus"
            className="w-full max-h-[65vh] object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Footer with Price & CTA */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block">Harga Spesial Hari Ini (Beli 1 Gratis 3):</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-400">Rp 49.000</span>
              <span className="text-sm text-slate-500 line-through">Rp 149.000</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOrderClick();
            }}
            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <span>Klaim Paket Ini Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
