import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';

export interface MasterCareerApprenticeshipProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export const MasterCareerApprenticeship: React.FC<MasterCareerApprenticeshipProps> = ({
  badge = "Rekrutmen BUMN",
  title = "Karier Profesional & Magang Vokasi",
  description = "Bergabunglah bersama kami membangun kedaulatan industri hilir mineral.",
  buttonText = "Eksplorasi Posisi",
  buttonUrl = "/karier/lowongan"
}) => {
  return (
    <section className="relative w-full py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Card Melayang Tanpa Border */}
        <div className="bg-gradient-to-br from-green-950 to-green-900 rounded-[40px] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(20,83,45,0.5)] relative overflow-hidden flex flex-col items-center text-center gap-8">
          
          {/* Efek Pendaran Latar */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Konten */}
          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-green-950/50 shadow-inner px-5 py-2 rounded-full text-green-100 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
              <Briefcase size={14} /> {badge}
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              {title}
            </h3>

            <p className="text-sm text-green-100/90 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <Link 
              to={buttonUrl || '#'} 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-green-50 text-green-950 font-black text-xs uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-1"
            >
              <span>{buttonText}</span> 
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};