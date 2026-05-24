import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface MasterHeroProps {
  badgeText?: string;
  title?: string;
  description?: string;
  breadcrumbCurrent?: string;
  imgUrl?: string;
}

export const MasterHero: React.FC<MasterHeroProps> = ({
  badgeText = "Portal Publik",
  title = "Pusat Informasi & Operasional",
  description = "Akses cepat menuju layanan administrasi, berita terkini, dan profil lengkap Pemerintahan Desa Citali.",
  breadcrumbCurrent = "Halaman",
  imgUrl
}) => {
  return (
    <section className="relative w-full bg-green-950 overflow-hidden font-sans select-none pt-40 pb-20 md:pt-48 md:pb-32 animate-in fade-in duration-500">
      
      {/* Latar Belakang (Diubah menggunakan Green-950 dan efek blur putih/hijau) */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-0">
        {imgUrl ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-green-950/80 to-green-950 z-10" />
            <img 
              src={imgUrl} 
              alt={title}
              className="w-full h-full object-cover rounded-l-[80px] opacity-70" 
            />
          </>
        ) : (
          <div className="w-full h-full bg-green-900 rounded-l-[100px] relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col justify-center min-h-[400px]">
        
        {/* Konten Box dengan efek Glassmorphism Tanpa Border */}
        <div className="max-w-2xl bg-white/5 backdrop-blur-xl p-10 md:p-14 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] space-y-10">
          
          {/* Rantai Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-green-100/50 uppercase">
            <Link to="/" className="hover:text-white transition-colors bg-white/10 px-3 py-1 rounded-full">Beranda</Link>
            <ChevronRight size={14} />
            <span>Kategori</span>
            <ChevronRight size={14} />
            <span className="text-white bg-green-800/50 px-3 py-1 rounded-full shadow-inner">{breadcrumbCurrent}</span>
          </nav>

          {/* Tajuk Utama */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 text-green-100 text-[10px] font-black uppercase tracking-widest shadow-inner">
              <Sparkles size={16} className="text-white" /> {badgeText}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1]">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-green-100/90 font-bold leading-relaxed relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-400 before:rounded-full">
              {description}
            </p>
          </div>
          
        </div>
      </div>

      {/* Garis Aksen Bawah - Tanpa Border, Pakai Div Drop Shadow */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-r from-green-400 via-emerald-600 to-green-950 opacity-90 z-30 rounded-t-full blur-[2px]" />

    </section>
  );
};