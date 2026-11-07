import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Download, QrCode, CreditCard, ArrowRight, Sparkles, MessageCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { MAIN_PRODUCT, BONUS_STACK, BRAND_INFO, trackInitiateCheckout } from '../data/landingData';
import { OrderFormData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    institution: '',
    paymentMethod: 'qris',
  });

  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);

  if (!isOpen) return null;

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      alert('Mohon lengkapi Nama, Email, dan Nomor WhatsApp Anda.');
      return;
    }
    setStep('payment');
  };

  const handleSimulatePaymentSuccess = () => {
    setStep('success');
  };

  const copyAccountNumber = (acc: string) => {
    navigator.clipboard.writeText(acc);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const whatsappMessage = `Halo Admin BiruDaun Corp, saya ingin konfirmasi pemesanan Bundle E-Book Unlock Research Potential (Rp 49.000).
Nama: ${formData.fullName || 'Nama Lengkap'}
Email: ${formData.email || 'email@kampus.ac.id'}
Kampus: ${formData.institution || '-'}`;

  const copyWaText = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {step === 'form' && 'Formulir Pemesanan Bundle E-Book'}
                {step === 'payment' && 'Instruksi Pembayaran Promo Rp 49.000'}
                {step === 'success' && 'Akses Terkonfirmasi! Siap Mengunduh'}
              </h3>
              <span className="text-[11px] text-slate-400 block">
                Beli 1 E-Book Utama + Gratis 3 E-Book Bonus Eksklusif
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {step === 'form' && (
            <form onSubmit={handleSubmitForm} className="space-y-4">
              
              {/* Direct Lynk.id Option */}
              <div className="p-4 bg-emerald-950/40 rounded-xl border border-emerald-500/40 text-center space-y-2.5">
                <div className="flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 block">Metode Paling Praktis & Cepat:</span>
                    <span className="text-[11px] text-slate-300">Checkout otomatis melalui platform resmi Lynk.id</span>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-300">Rp 49.000</span>
                </div>
                <a
                  href={BRAND_INFO.checkoutUrl}
                  onClick={() => trackInitiateCheckout()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs sm:text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Halaman Checkout Lynk.id</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink mx-3 text-[11px] text-slate-500 uppercase tracking-wider">atau isi formulir di bawah</span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* Input Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nama Lengkap (Beserta Gelar jika ada) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Contoh: Budi Santoso, M.Pd."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Alamat Email Aktif (Untuk Pengiriman File PDF & Drive) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email.anda@gmail.com / kampus.ac.id"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nomor WhatsApp Aktif (Untuk Notifikasi Link Unduhan) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Asal Kampus / Institusi (Opsional)
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="Contoh: Universitas Indonesia / ITB / UNY"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Payment method selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Pilih Metode Pembayaran
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className={`p-2.5 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'qris'
                        ? 'bg-emerald-500/10 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="qris"
                        checked={formData.paymentMethod === 'qris'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'qris' })}
                        className="text-emerald-500 focus:ring-emerald-400"
                      />
                      <QrCode className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-xs">QRIS (GoPay/OVO/BCA)</span>
                    </label>

                    <label className={`p-2.5 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                      formData.paymentMethod === 'bca'
                        ? 'bg-emerald-500/10 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="bca"
                        checked={formData.paymentMethod === 'bca'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'bca' })}
                        className="text-emerald-500 focus:ring-emerald-400"
                      />
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-xs">Transfer Bank BCA</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 text-sm mt-2"
              >
                <span>Lanjut ke Pembayaran (Rp 49.000)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-4">
              <div className="text-center p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Total yang Harus Ditransfer:</span>
                <div className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                  Rp 49.000
                </div>
                <span className="text-[11px] text-amber-300 block mt-1">
                  Harap transfer tepat sesuai nominal untuk aktivasi instan otomatis
                </span>
              </div>

              {formData.paymentMethod === 'qris' ? (
                <div className="text-center bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="w-40 h-40 mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-md">
                    {/* Simulated QRIS code visual */}
                    <div className="w-full h-full border-4 border-slate-900 rounded p-1 flex flex-col items-center justify-between bg-slate-100">
                      <div className="flex justify-between w-full">
                        <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                        <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                      </div>
                      <div className="text-[10px] font-mono font-bold text-slate-900">QRIS STANDAR</div>
                      <div className="flex justify-between w-full">
                        <div className="w-7 h-7 bg-slate-950 rounded-sm" />
                        <div className="w-4 h-4 bg-emerald-600 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">
                    Scan menggunakan aplikasi <strong>BCA mobile, GoPay, OVO, Dana, ShopeePay</strong>, atau m-Banking apapun.
                  </p>
                </div>
              ) : (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-400">Bank Tujuan:</span>
                    <span className="font-bold text-white text-xs">BCA (Bank Central Asia)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs text-slate-400">Nomor Rekening:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-400 text-sm">8735 0192 84</span>
                      <button
                        type="button"
                        onClick={() => copyAccountNumber('8735019284')}
                        className="p-1 text-slate-400 hover:text-white rounded bg-slate-800 text-[10px]"
                      >
                        {copiedBank ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Atas Nama:</span>
                    <span className="font-semibold text-white text-xs">BiruDaun Corp</span>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleSimulatePaymentSuccess}
                  className="w-full py-3 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Saya Sudah Transfer (Konfirmasi Otomatis)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  ← Kembali ke Ubah Data
                </button>
              </div>

            </div>
          )}

          {step === 'success' && (
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  Selamat, {formData.fullName || 'Rekan Peneliti'}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
                  Paket E-Book Utama + 3 E-Book Bonus telah siap dikirimkan ke <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Download links simulation */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left space-y-2.5">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Akses Link Google Drive Eksklusif:
                </div>

                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    📘 E-Book Utama: Unlock Research Potential (PDF 138 Hlm)
                  </span>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Simulasi: Berkas PDF E-Book Utama sedang dibuka!'); }}
                    className="text-emerald-400 hover:underline font-bold text-[11px]"
                  >
                    Buka File
                  </a>
                </div>

                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    🎁 Bonus #1, #2, & #3 (Folder Bundle Bonus)
                  </span>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Simulasi: Folder Google Drive 3 Bonus sedang dibuka!'); }}
                    className="text-emerald-400 hover:underline font-bold text-[11px]"
                  >
                    Buka Drive
                  </a>
                </div>

                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    📑 50+ Prompt Library & Template Matriks Spreadsheet
                  </span>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Simulasi: Template Spreadsheet Matriks sedang dibuka!'); }}
                    className="text-emerald-400 hover:underline font-bold text-[11px]"
                  >
                    Salin Template
                  </a>
                </div>
              </div>

              {/* WhatsApp confirmation button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={copyWaText}
                  className="w-full py-2.5 px-4 font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                >
                  {copiedWhatsapp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Format Konfirmasi WhatsApp Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Salin Format Konfirmasi ke WhatsApp Admin</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer"
                >
                  Selesai & Tutup Jendela
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
