import React from 'react';
import { Layers } from 'lucide-react';

export interface MasterMandateHistoryProps {
  titleHtml?: string;
  desc1?: string;
  desc2?: string;
  youtubeId?: string;
  watermark?: string;
  quote?: string;
}

export const MasterMandateHistory: React.FC<MasterMandateHistoryProps> = ({
  titleHtml = "Mengoptimalkan <strong class='font-black text-green-900'>potensi desa</strong> demi masa depan yang lebih baik.",
  desc1 = "Pemerintah Desa Citali terus berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat. Melalui program-program inovatif dan partisipasi aktif warga, kami berupaya menciptakan lingkungan yang sejahtera dan berdaya saing.",
  desc2 = "Sejarah dan pencapaian desa merupakan fondasi kuat untuk melangkah maju menuju desa mandiri.",
  youtubeId = "BMyw1deZ17c", // Ganti dengan ID video Desa Citali jika ada
  watermark = "Desa Citali",
  quote = "Kedaulatan ekonomi dan sosial dimulai dari desa kita."
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-green-950 tracking-tight leading-[1.2]" dangerouslySetInnerHTML={{ __html: titleHtml }} />
          </div>
          <div className="lg:w-1/2 space-y-6 text-sm text-green-900/80 leading-relaxed font-bold bg-green-50/50 p-8 rounded-3xl shadow-sm">
            <p>{desc1}</p>
            {desc2 && <p className="text-xs text-green-800/60 pt-4 border-t border-green-100">{desc2}</p>}
          </div>
        </div>

        {youtubeId && (
          <div className="relative w-full rounded-[40px] overflow-hidden bg-black aspect-video max-h-[600px] shadow-[0_20px_60px_-15px_rgba(20,83,45,0.4)] flex items-center justify-center group transform transition-transform duration-500 hover:scale-[1.01]">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
              title="Video Profil" className="absolute inset-0 w-full h-full pointer-events-none scale-[1.05] opacity-80 transition-opacity duration-700 group-hover:opacity-100" allow="autoplay; encrypted-media" frameBorder="0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent z-10 opacity-90" />
            
            <div className="absolute top-8 right-8 z-20 flex items-center gap-2.5 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
              <Layers size={14} className="text-white" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase block leading-none">{watermark}</span>
            </div>
            
            <div className="absolute bottom-10 inset-x-0 z-20 text-center px-8">
              <p className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] italic">"{quote}"</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};