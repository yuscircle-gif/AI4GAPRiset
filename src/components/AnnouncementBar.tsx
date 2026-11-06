import React, { useState, useEffect } from 'react';
import { Sparkles, Timer, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onClaimClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onClaimClick }) => {
  // 12-hour countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white text-xs md:text-sm py-2.5 px-4 border-b border-emerald-500/20 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="font-semibold text-emerald-300">
            Penawaran Spesial Peluncuran:
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Dapatkan 3 E-Book Bonus Senilai Rp 397.000 Hari Ini — Hanya <strong className="text-emerald-400 font-bold">Rp 49.000</strong>!
          </span>
          <span className="text-slate-300 sm:hidden">
            3 Bonus Gratis! Hanya <strong className="text-emerald-400">Rp 49.000</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono bg-slate-950/70 px-2.5 py-1 rounded-md border border-slate-800">
            <Timer className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sisa Waktu Promo:</span>
            <span className="font-bold text-amber-400 tabular-nums">
              {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>

          <button
            onClick={onClaimClick}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm hover:shadow-emerald-600/30"
          >
            <span>Klaim Promo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
