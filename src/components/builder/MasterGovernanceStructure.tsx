import React from 'react';
import { Network, ArrowDown } from 'lucide-react';

export interface MasterGovernanceStructureProps {
  badge?: string; title?: string; desc?: string;
  topBadge?: string; topTitle?: string; topDesc?: string;
  midTitle?: string; midDesc?: string;
  botBadge?: string; botTitle?: string; botDesc?: string;
}

export const MasterGovernanceStructure: React.FC<MasterGovernanceStructureProps> = ({
  badge = "Struktur Organisasi", 
  title = "Tata Kelola Pemerintahan Desa", 
  desc = "Sistem pemerintahan yang terstruktur untuk memastikan pelayanan masyarakat berjalan optimal.",
  topBadge = "Tingkat I", topTitle = "Kepala Desa", topDesc = "Pimpinan tertinggi penyelenggaraan pemerintahan desa.",
  midTitle = "Sekretariat Desa", midDesc = "Pusat koordinasi administrasi dan pelayanan umum.",
  botBadge = "Pelaksana Teknis", botTitle = "Kepala Urusan & Kewilayahan", botDesc = "Mengeksekusi program kerja di masing-masing dusun dan RW."
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden text-center relative">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 space-y-16 relative z-10">
        
        <div className="space-y-6 flex flex-col items-center">
          <span className="text-[11px] font-black text-green-800 uppercase tracking-widest block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
            {badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-light text-green-950 tracking-tight mt-6">{title}</h2>
          <p className="text-sm text-green-900/70 font-bold max-w-xl mx-auto leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-col items-center justify-center pt-8">
          
          {/* Top Node (Diubah jadi bentuk Pil Bulat) */}
          <div className="px-8 py-6 bg-green-950 text-white rounded-full shadow-[0_20px_40px_-15px_rgba(20,83,45,0.4)] w-80 space-y-2 relative transform hover:-translate-y-2 transition-transform duration-300">
            <span className="text-[9px] font-black bg-white/10 px-3 py-1 rounded-full text-green-300 uppercase tracking-widest inline-block shadow-inner">{topBadge}</span>
            <h4 className="text-base font-black tracking-wider uppercase text-white">{topTitle}</h4>
            <p className="text-[10px] text-green-100/70 font-medium leading-relaxed">{topDesc}</p>
          </div>
          
          {/* Connector */}
          <div className="h-14 w-1.5 bg-green-100 rounded-full relative my-2">
            <ArrowDown size={18} className="absolute bottom-[-10px] left-[-6px] text-green-400 animate-bounce" />
          </div>
          
          {/* Middle Node (Diubah jadi kotak Soft Shadow) */}
          <div className="p-6 bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] w-72 space-y-2 mt-2 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-sm font-black text-green-900 uppercase">{midTitle}</h4>
            <p className="text-[10px] text-green-800/70 font-bold leading-relaxed">{midDesc}</p>
          </div>
          
          {/* Connector */}
          <div className="h-14 w-1.5 bg-green-100 rounded-full relative my-2">
            <ArrowDown size={18} className="absolute bottom-[-10px] left-[-6px] text-green-400 animate-bounce" />
          </div>
          
          {/* Bottom Node (Card Lebar Glassmorphism) */}
          <div className="p-10 bg-green-50 text-green-950 rounded-[40px] shadow-[0_15px_40px_-15px_rgba(20,83,45,0.15)] w-full max-w-md space-y-5 mt-2 transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-green-600 mx-auto shadow-sm">
              <Network size={24} />
            </div>
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-black text-green-700 uppercase tracking-widest block">{botBadge}</span>
              <h4 className="text-lg font-black tracking-tight uppercase mt-1 text-green-950">{botTitle}</h4>
              <div className="h-px w-1/2 bg-green-900/10 mx-auto my-4" />
              <p className="text-xs text-green-900/70 font-bold leading-relaxed">{botDesc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};