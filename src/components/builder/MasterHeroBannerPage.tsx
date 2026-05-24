import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface HeroSlide {
  image: string;
  title: string;
  desc: string;
}

export interface QuickLink {
  label: string;
  url: string;
}

export interface MasterHeroBannerPageProps {
  slides?: HeroSlide[];
  quickLinks?: QuickLink[];
}

export const MasterHeroBannerPage: React.FC<MasterHeroBannerPageProps> = ({ slides = [], quickLinks = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const displaySlides = slides.length > 0 ? slides : [
    {
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2070&auto=format&fit=crop", 
      title: "Membangun Desa Citali yang Mandiri, Inovatif, dan Sejahtera",
      desc: "Menghadirkan pelayanan publik yang transparan dan memberdayakan potensi lokal secara berkelanjutan."
    }
  ];

  const displayLinks = quickLinks.length > 0 ? quickLinks : [
    { label: "Profil Desa & Aparatur", url: "/p/profil-desa" },
    { label: "Layanan Mandiri Warga", url: "/p/layanan" },
    { label: "Transparansi Dana Desa", url: "/p/transparansi" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [displaySlides.length]);

  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[900px] bg-green-950 overflow-hidden font-sans flex flex-col justify-end select-none">
      
      {displaySlides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img 
            src={slide.image} 
            alt={`Hero Background ${index + 1}`} 
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-black/20" />
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-16 sm:pb-24 pt-32">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-light text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-lg">
            {displaySlides[currentSlide]?.title}
          </h1>
          
          <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md shadow-lg max-w-2xl animate-in fade-in duration-1000 delay-300">
            <p className="text-sm sm:text-base text-white font-bold leading-relaxed relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-400 before:rounded-full">
              {displaySlides[currentSlide]?.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-green-950/80 backdrop-blur-xl shadow-[0_-15px_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          
          <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-white/90">
            {displayLinks.map((link, idx) => (
              <Link key={idx} to={link.url} className="hover:text-green-300 transition-colors flex items-center gap-3 group/ql">
                {link.label} 
                <span className="p-1.5 rounded-full bg-white/10 group-hover/ql:bg-green-800 transition-colors shadow-inner">
                  <ArrowRight size={14} className="text-white transform group-hover/ql:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {displaySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? 'w-12 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Pindah ke slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};