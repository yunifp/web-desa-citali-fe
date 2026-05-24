import React from 'react';
import DefaultBgImage from '../../assets/leader_quote.png';

export interface MasterLeaderQuoteProps {
  quoteHtml?: string;
  authorTitle?: string;
  authorSubtitle?: string;
  bgImage?: string;
}

export const MasterLeaderQuote: React.FC<MasterLeaderQuoteProps> = ({
  quoteHtml = "“Pembangunan sejati bermula dari <strong class=\"font-black text-green-950\">kesejahteraan</strong> masyarakat desa yang <strong class=\"font-black text-green-700\">mandiri</strong> dan <strong class=\"font-black text-green-950\">inovatif</strong>.”",
  authorTitle = "Amanat Kepala Desa",
  authorSubtitle = "Pemerintah Desa Citali",
  bgImage = ""
}) => {
  
  const finalBgImage = bgImage || DefaultBgImage;

  return (
    <section className="relative w-full bg-white font-sans select-none overflow-hidden">
      
      <div className="relative w-full aspect-[21/9] min-h-[400px] sm:min-h-[500px] flex items-center">
        
        <img 
          src={finalBgImage} 
          alt={authorTitle} 
          className="absolute inset-0 w-full h-full object-cover object-left sm:object-center z-0"
        />

        {/* Gradient Blur yang lebih lembut dan elegan */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-white/20 w-full md:w-[70%] right-0 ml-auto z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full flex justify-end px-6 sm:px-12 md:px-16">
          <div className="max-w-xl space-y-8 text-left">
            
            <blockquote 
              className="text-2xl sm:text-3xl md:text-4xl font-light text-green-900/90 tracking-tight leading-snug drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: quoteHtml }}
            />

            {/* Kotak Identitas tanpa border, menggunakan shadow dan pseudo-element bulat */}
            <div className="pt-2 space-y-1.5 bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] py-4 px-6 rounded-2xl w-max relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-600 rounded-r-full" />
              <cite className="text-sm font-black text-green-950 block not-italic uppercase tracking-wide">
                {authorTitle}
              </cite>
              <span className="text-[11px] text-green-800/70 block font-bold tracking-wider">
                {authorSubtitle}
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};