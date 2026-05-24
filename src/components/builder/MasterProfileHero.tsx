import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export interface MasterProfileHeroProps {
  breadcrumb?: string;
  badge?: string;
  title?: string;
  description?: string;
}

export const MasterProfileHero: React.FC<MasterProfileHeroProps> = ({
  breadcrumb = "Profil Desa",
  badge = "Pemerintahan Citali",
  title = "Membangun Desa Citali yang Transparan dan Mandiri",
  description = "Pusat informasi profil, visi-misi, serta jajaran aparatur yang mengabdi untuk kesejahteraan masyarakat Desa Citali."
}) => {
  return (
    <section className="relative w-full bg-green-950 text-white overflow-hidden font-sans select-none pt-48 pb-24 sm:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-950 z-0" />
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute left-[-10%] bottom-[-20%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
        <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-green-100/50 uppercase">
          <Link to="/" className="hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-full">Beranda</Link>
          <ChevronRight size={12} />
          <span>Tentang Desa</span>
          <ChevronRight size={12} />
          <span className="text-white bg-green-800/50 px-3 py-1.5 rounded-full shadow-inner">{breadcrumb}</span>
        </nav>
        
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest shadow-inner backdrop-blur-sm">
            <ShieldCheck size={16} className="text-green-300" /> {badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-green-100/90 font-bold leading-relaxed max-w-2xl relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-400 before:rounded-full">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-r from-green-400 via-emerald-600 to-green-950 opacity-90 z-20 rounded-t-full blur-[2px]" />
    </section>
  );
};