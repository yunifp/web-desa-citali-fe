import React from 'react';

interface MasterSplitHeadlineProps {
  headlineHtml?: string;
  narrative?: string;
  imgUrl?: string;
}

export const MasterSplitHeadline: React.FC<MasterSplitHeadlineProps> = ({
  headlineHtml,
  narrative,
  imgUrl
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Sisi Kiri: Foto Pilar Vertikal (Tanpa Border) */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[360px] h-[500px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,83,45,0.3)] bg-green-50 hover:shadow-[0_25px_60px_-15px_rgba(20,83,45,0.4)] hover:-translate-y-2 transition-all duration-700 group">
            <img 
              src={imgUrl || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'} 
              alt="Visual Pendukung"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Lapis gradient halus bawah agar lebih menyatu */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Sisi Kanan: Tumpukan Teks Penjelas */}
        <div className="md:col-span-7 space-y-10 text-center md:text-left">
          {/* Judul Utama */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-green-950 tracking-tight leading-tight [&>strong]:font-black [&>strong]:text-green-700"
            dangerouslySetInnerHTML={{ 
              __html: headlineHtml || '<strong>Desa Citali</strong> hadir sebagai pusat inovasi dan kolaborasi warga.' 
            }}
          />

          {/* Paragraf Narasi Pendukung */}
          <div className="bg-green-50/50 p-6 sm:p-8 rounded-[32px] shadow-sm">
            <p className="text-sm sm:text-base text-green-900/80 font-bold leading-relaxed max-w-xl mx-auto md:mx-0 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-green-600 before:rounded-full">
              {narrative || 'Dengan mengonsolidasikan potensi-potensi unggulan, kami mentransformasikan tata kelola desa menjadi lebih transparan, responsif, dan berorientasi pada kemajuan bersama.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};