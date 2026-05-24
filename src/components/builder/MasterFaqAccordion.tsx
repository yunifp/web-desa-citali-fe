/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

interface MasterFaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs?: any[];
}

export const MasterFaqAccordion: React.FC<MasterFaqAccordionProps> = ({
  title = 'Pusat Layanan & Pertanyaan', 
  subtitle = 'Informasi seputar pelayanan publik, administrasi desa, dan program kemasyarakatan Desa Citali.', 
  faqs = [
    { q: "Apa saja syarat membuat Surat Keterangan Usaha (SKU)?", a: "Membawa fotokopi KTP, KK, dan surat pengantar dari RT/RW setempat, serta foto tempat usaha." },
    { q: "Kapan jam operasional pelayanan Balai Desa?", a: "Pelayanan dibuka setiap hari Senin hingga Jumat, mulai pukul 08.00 WIB hingga 15.00 WIB." },
    { q: "Bagaimana cara melaporkan infrastruktur jalan yang rusak?", a: "Warga dapat melapor langsung melalui ketua RW masing-masing, atau melalui formulir pengaduan di website ini." }
  ]
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden w-full relative">
      {/* Background Ornament */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 space-y-16 relative z-10">
        
        <div className="text-center space-y-6 flex flex-col items-center">
          <span className="text-[11px] font-black bg-green-50 px-5 py-2 rounded-full text-green-800 uppercase tracking-widest block shadow-sm">
            Informasi Publik
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight mt-6">
            {title}
          </h2>
          <p className="text-sm text-green-900/70 font-bold max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {safeFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-[32px] shadow-[0_5px_20px_-5px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(20,83,45,0.12)]">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full p-8 text-left flex items-center justify-between gap-6 transition-colors cursor-pointer block group ${isOpen ? 'bg-green-50/50' : 'bg-white'}`}
                >
                  <span className={`text-base sm:text-lg font-black transition-colors ${isOpen ? 'text-green-950' : 'text-green-900/80 group-hover:text-green-900'}`}>
                    {item.q || 'Pertanyaan?'}
                  </span>
                  <span className={`text-sm font-black w-10 h-10 rounded-[18px] flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-sm ${isOpen ? 'bg-green-950 text-white rotate-180' : 'bg-green-50 text-green-800 group-hover:bg-green-100'}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="p-8 pt-0 bg-green-50/50 text-sm text-green-900/80 leading-relaxed font-bold">
                    <div className="h-px w-full bg-green-900/10 mb-6" />
                    <p className="animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.a || 'Penjelasan jawaban.'}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};