import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  User,
  Mail,
  Clock,
  Smartphone,
  PenLine,
  Landmark,
  ShieldCheck,
} from 'lucide-react';

interface MasterContactFormProps {
  sectionBadge?: string;
  title: string;
  subtitle: string;
  whatsappNumber: string;
  buttonText?: string;
}

export const MasterContactForm: React.FC<MasterContactFormProps> = ({
  sectionBadge = 'LAYANAN MASYARAKAT',
  title = 'Hubungi Pemerintah Desa',
  subtitle = 'Kami siap membantu kebutuhan informasi, pelayanan administrasi, aspirasi masyarakat, dan berbagai keperluan lainnya secara cepat, ramah, dan transparan.',
  whatsappNumber = '6281234567890',
  buttonText = 'Kirim Pesan WhatsApp',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert('Mohon isi nama dan pesan terlebih dahulu.');
      return;
    }

    const textMessage = `Halo Pemerintah Desa,

Perkenalkan saya *${formData.name}* (${
      formData.email || 'Tanpa Email'
    }).

${formData.message}

Terima kasih.`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(waUrl, '_blank');
  };

  return (
    <section className="relative py-24 bg-[#052e2b] overflow-hidden border-t border-white/5 font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT */}
        <div className="lg:col-span-5 space-y-10">

          <div className="space-y-6">

            {/* BADGE */}
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-[10px] font-black text-emerald-200 uppercase tracking-[0.3em] shadow-xl">
              <MessageSquare size={14} className="text-emerald-300" />
              {sectionBadge}
            </span>

            {/* TITLE */}
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h2>

            {/* SUBTITLE */}
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-medium max-w-lg">
              {subtitle}
            </p>
          </div>

          {/* INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">

            {/* RESPONSE */}
            <div className="space-y-4 group">

              <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:bg-white/10 transition-all duration-300">
                <Clock size={20} className="text-emerald-300" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] block">
                  Respon Pelayanan
                </span>

                <span className="text-sm font-bold text-white block">
                  Cepat & Responsif
                </span>
              </div>
            </div>

            {/* CHANNEL */}
            <div className="space-y-4 group">

              <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:bg-white/10 transition-all duration-300">
                <Smartphone size={20} className="text-cyan-300" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] block">
                  Media Utama
                </span>

                <span className="text-sm font-bold text-white block">
                  WhatsApp Desa
                </span>
              </div>
            </div>

            {/* TRANSPARAN */}
            <div className="space-y-4 group">

              <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:bg-white/10 transition-all duration-300">
                <ShieldCheck size={20} className="text-emerald-300" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] block">
                  Pelayanan
                </span>

                <span className="text-sm font-bold text-white block">
                  Transparan & Aman
                </span>
              </div>
            </div>

            {/* PEMDES */}
            <div className="space-y-4 group">

              <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:bg-white/10 transition-all duration-300">
                <Landmark size={20} className="text-cyan-300" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] block">
                  Pemerintahan
                </span>

                <span className="text-sm font-bold text-white block">
                  Profesional & Modern
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <form
            onSubmit={handleWhatsAppSubmit}
            className="relative z-10 space-y-6"
          >

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* NAME */}
              <div className="space-y-2">

                <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em] ml-1">
                  Nama Lengkap *
                </label>

                <div className="relative">

                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-4
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      text-sm
                      font-medium
                      text-white
                      placeholder:text-white/30
                      outline-none
                      transition-all
                      focus:border-emerald-400
                      focus:ring-4
                      focus:ring-emerald-500/10
                      backdrop-blur-xl
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-2">

                <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em] ml-1">
                  Alamat Email
                </label>

                <div className="relative">

                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="
                      w-full
                      pl-11
                      pr-4
                      py-4
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      text-sm
                      font-medium
                      text-white
                      placeholder:text-white/30
                      outline-none
                      transition-all
                      focus:border-emerald-400
                      focus:ring-4
                      focus:ring-emerald-500/10
                      backdrop-blur-xl
                    "
                  />
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">

              <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em] ml-1">
                Pesan / Keperluan *
              </label>

              <div className="relative">

                <PenLine
                  size={16}
                  className="absolute left-4 top-5 text-white/30"
                />

                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pertanyaan, aspirasi, atau kebutuhan pelayanan Anda..."
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-4
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    text-sm
                    font-medium
                    text-white
                    placeholder:text-white/30
                    outline-none
                    transition-all
                    resize-none
                    focus:border-emerald-400
                    focus:ring-4
                    focus:ring-emerald-500/10
                    backdrop-blur-xl
                  "
                />
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-2">

              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-4
                  rounded-2xl
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-black
                  text-white
                  bg-gradient-to-r
                  from-emerald-700
                  via-emerald-600
                  to-cyan-600
                  hover:from-emerald-500
                  hover:to-cyan-500
                  transition-all
                  duration-300
                  shadow-[0_15px_50px_rgba(16,185,129,0.3)]
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.35)]
                  group/btn
                "
              >
                {buttonText}

                <Send
                  size={16}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </button>

              <p className="text-[10px] text-center text-white/35 font-medium mt-4 tracking-wide">
                Sistem akan otomatis membuka aplikasi WhatsApp Anda.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};