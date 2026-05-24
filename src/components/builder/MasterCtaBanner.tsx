import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MasterCtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export const MasterCtaBanner: React.FC<MasterCtaBannerProps> = ({
  title = 'Mari Berkolaborasi Membangun Desa Citali', 
  subtitle = 'Pemerintah Desa Citali membuka ruang partisipasi seluas-luasnya bagi masyarakat untuk mewujudkan lingkungan yang asri, sejahtera, dan inovatif.', 
  buttonText = 'Hubungi Pemerintah Desa',
  buttonUrl = '/p/kontak'
}) => {
  const isExternal = buttonUrl.startsWith('http');

  const buttonClasses = "inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-950 text-white rounded-full text-xs font-black hover:bg-green-800 shadow-[0_10px_30px_-10px_rgba(20,83,45,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(20,83,45,0.6)] hover:-translate-y-1 transition-all group/cta flex-shrink-0 cursor-pointer w-full md:w-auto";

  return (
    <section className="py-24 bg-white text-green-950 font-sans select-none overflow-hidden relative w-full">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-green-50 rounded-[40px] p-12 md:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Ornamen Background Soft */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-2xl text-center md:text-left relative z-20 flex-1">
            <span className="text-[10px] font-black text-green-800 uppercase tracking-widest block bg-white px-5 py-2 rounded-full w-max mx-auto md:mx-0 shadow-sm">
              LAYANAN MASYARAKAT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-green-950 leading-tight">
              {title}
            </h2>
            
            <div className="bg-white/60 p-5 rounded-2xl backdrop-blur-sm shadow-sm inline-block text-left mx-auto md:mx-0">
              <p className="text-sm text-green-900/80 font-bold leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="relative z-20 flex-shrink-0 w-full md:w-auto">
            {isExternal ? (
              <a href={buttonUrl} target="_blank" rel="noreferrer" className={buttonClasses}>
                <span>{buttonText}</span>
                <ArrowRight size={18} className="text-green-300 transform group-hover/cta:translate-x-1.5 transition-transform" />
              </a>
            ) : (
              <Link to={buttonUrl} className={buttonClasses}>
                <span>{buttonText}</span>
                <ArrowRight size={18} className="text-green-300 transform group-hover/cta:translate-x-1.5 transition-transform" />
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};