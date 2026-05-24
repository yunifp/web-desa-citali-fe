import React from 'react';
import { Globe2, MapPin } from 'lucide-react';

export interface MasterGlobalSupplyChainProps {
  badge?: string;
  title?: string;
  descriptionHtml?: string;
  regions?: { name: string }[];
}

export const MasterGlobalSupplyChain: React.FC<MasterGlobalSupplyChainProps> = ({
  badge = "Jaringan & Distribusi",
  title = "Pusat Koordinasi dan Penyaluran Komoditas",
  descriptionHtml = "Produksi dan komoditas unggulan <strong class=\"text-green-950 font-black\">Desa Citali</strong> didistribusikan secara strategis ke berbagai wilayah.",
  regions = []
}) => {
  return (
    <section className="py-24 bg-white font-sans text-center selection:bg-green-900 selection:text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12 relative z-10">
        
        <div className="w-24 h-24 bg-green-50 rounded-full shadow-[0_10px_30px_-10px_rgba(20,83,45,0.2)] flex items-center justify-center text-green-900 mx-auto hover:-translate-y-2 transition-transform duration-500">
          <Globe2 size={40} strokeWidth={1.5} />
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <span className="text-[11px] font-black text-green-800 uppercase tracking-widest block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-green-950 tracking-tight leading-snug mt-6">
            {title}
          </h2>
          <p 
            className="text-sm text-green-900/80 leading-relaxed font-bold max-w-2xl mx-auto mt-4"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>

        {/* Wadah Regions diubah jadi Soft Container */}
        <div className="pt-8 bg-green-50/50 p-8 rounded-[40px] shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {regions.map((reg, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-full shadow-[0_5px_15px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_20px_-5px_rgba(20,83,45,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <MapPin size={16} className="text-green-700" />
                </div>
                <span className="text-sm font-black text-green-950 tracking-tight">{reg.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};