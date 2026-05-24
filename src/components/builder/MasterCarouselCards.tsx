import React from 'react';
import { Zap, Shield, Cpu, Compass, ArrowRight } from 'lucide-react';

interface CarouselCardItem {
  title: string;
  imgUrl: string;
  iconType?: string;
  linkUrl?: string;
}

interface MasterCarouselCardsProps {
  sectionLabel: string;
  sectionTitle: string;
  cards: CarouselCardItem[];
}

export const MasterCarouselCards: React.FC<MasterCarouselCardsProps> = ({
  sectionLabel,
  sectionTitle,
  cards
}) => {
  const safeCards = Array.isArray(cards) ? cards : [];

  const renderIcon = (type?: string) => {
    switch (type) {
      case 'shield': return <Shield size={16} />;
      case 'cpu': return <Cpu size={16} />;
      case 'compass': return <Compass size={16} />;
      default: return <Zap size={16} />;
    }
  };

  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        
        {/* Header Seksi */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-black text-green-800 bg-green-50 px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            {sectionLabel || 'Sektor Strategis'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-green-950 tracking-tight">
            {sectionTitle || 'Sektor-sektor utama yang menopang rencana kami'}
          </h2>
        </div>

        {/* Wadah Korsel / Slider Horizontal */}
        <div className="flex gap-8 overflow-x-auto pb-10 pt-4 px-4 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {safeCards.map((card, idx) => (
            <div 
              key={idx}
              className="relative w-[280px] h-[380px] rounded-t-full rounded-b-[40px] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex-shrink-0 snap-center group flex flex-col items-center p-4 transition-transform hover:-translate-y-2"
            >
              {/* Gambar Melingkar di Atas */}
              <div className="w-full aspect-square rounded-full overflow-hidden relative mb-6 shadow-inner">
                <img 
                  src={card.imgUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Teks Judul */}
              <h3 className="text-green-950 font-black text-xl tracking-tight leading-tight text-center px-2">
                {card.title || 'Sektor Operasi'}
              </h3>

              {/* Ikon & Tombol Bulat di Bawah */}
              <div className="mt-auto flex items-center justify-between w-full px-4 pt-4">
                <div className="w-11 h-11 rounded-full bg-green-50 shadow-sm flex items-center justify-center text-green-900">
                  {renderIcon(card.iconType)}
                </div>
                <button 
                  onClick={() => card.linkUrl && alert(`Menuju tautan: ${card.linkUrl}`)}
                  className="w-11 h-11 rounded-full bg-green-950 hover:bg-green-800 shadow-md flex items-center justify-center text-white transition-all transform hover:scale-105 cursor-pointer"
                  title="Eksplorasi Sektor"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};