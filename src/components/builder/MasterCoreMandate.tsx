import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface MandateCard {
  title: string;
  desc: string;
  bgImage: string;
  isDefaultImg: string | boolean;
  vectorIcon: string;
  vectorText: string;
  linkUrl?: string;
}

export interface MasterCoreMandateProps {
  badge?: string;
  titleHtml?: string;
  linkText?: string;
  linkUrl?: string;
  cards?: MandateCard[];
}

export const MasterCoreMandate: React.FC<MasterCoreMandateProps> = ({
  badge = "Lingkup Kerja",
  titleHtml = "Melalui pendekatan terintegrasi, <strong class=\"font-black text-green-950\">Perminas</strong> memastikan cadangan mineral strategis negara dikelola secara efektif.",
  linkText = "Baca Selengkapnya",
  linkUrl = "/tentang-kami/profil",
  cards = []
}) => {
  const marqueeSliderCards = [...cards, ...cards];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      
      <style>{`
        @keyframes scrollMarqueeHorizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-h {
          animation: scrollMarqueeHorizontal 35s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-h {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16 pause-on-hover">
        
        {/* Tajuk Tengah */}
        <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto px-6">
          <span className="px-5 py-2 rounded-full bg-green-50 shadow-sm text-green-800 text-[10px] font-black uppercase tracking-widest block">{badge}</span>
          <h2 
            className="text-2xl sm:text-4xl font-light text-slate-700 tracking-tight leading-snug"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          {linkText && linkUrl && (
            <a href={linkUrl} className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-white text-green-950 font-black text-xs rounded-full shadow-md hover:shadow-lg transition-all group hover:-translate-y-1">
              <span>{linkText}</span> <ArrowRight size={14} className="text-green-700 transform group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>

        {/* Wadah Slider Marquee Horizontal */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee-h flex gap-8 w-max px-6 pb-10">
            
            {marqueeSliderCards.map((card, idx) => {
              
              if (card.isDefaultImg === true || card.isDefaultImg === 'true') {
                return (
                  <div 
                    key={`${idx}`}
                    className="relative rounded-t-full rounded-b-[40px] overflow-hidden w-[320px] sm:w-[360px] h-[480px] bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] group flex flex-col justify-end p-8 flex-shrink-0 select-none"
                  >
                    <img 
                      src={card.bgImage} 
                      alt={card.vectorText} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent" />
                    
                    <div className="relative z-10 text-center space-y-4 max-w-md mx-auto flex flex-col items-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {card.vectorIcon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight whitespace-pre-line">
                        {card.title}
                      </h3>
                      <p className="text-xs text-white/80 font-medium leading-relaxed line-clamp-3">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div 
                  key={`${idx}`}
                  className="relative rounded-t-full rounded-b-[40px] overflow-hidden w-[320px] sm:w-[360px] h-[480px] bg-green-950 shadow-[0_20px_50px_-15px_rgba(20,83,45,0.4)] group flex flex-col justify-between p-8 transition-colors flex-shrink-0 select-none text-center"
                >
                  <img 
                    src={card.bgImage} 
                    alt={card.vectorText} 
                    className="absolute inset-0 w-full h-full object-cover transform opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500 ease-out z-0"
                  />

                  <div className="relative z-20 flex flex-col items-center pt-8">
                    <span className="text-5xl drop-shadow-md mb-3">{card.vectorIcon}</span>
                    <span className="text-[10px] font-black text-green-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-widest shadow-inner">{card.vectorText}</span>
                  </div>

                  <div className="relative z-20 space-y-4 max-w-md mx-auto flex flex-col items-center">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="text-xs text-green-100/70 font-medium leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                    <a href={card.linkUrl || '#'} className="mt-3 w-14 h-14 rounded-full bg-white hover:bg-green-50 text-green-950 flex items-center justify-center transition-all shadow-xl hover:-translate-y-1">
                      <ArrowRight size={20} />
                    </a>
                  </div>

                </div>
              );

            })}

          </div>
        </div>

      </div>
    </section>
  );
};