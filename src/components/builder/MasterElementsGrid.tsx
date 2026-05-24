/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Leaf, Droplet, Wind, Zap } from 'lucide-react';

interface ElementItem {
  symbol: string;
  name: string;
  number: string;
  desc: string;
  icon: any;
}

interface MasterElementsGridProps {
  sectionSection?: string;
  sectionTitle?: string;
  sectionDesc?: string;
  items?: ElementItem[];
}

export const MasterElementsGrid: React.FC<MasterElementsGridProps> = ({
  sectionSection = "Potensi Unggulan",
  sectionTitle = "Kekayaan & Komoditas Utama Desa",
  sectionDesc = "Desa Citali dianugerahi potensi sumber daya alam dan komoditas unggulan yang dikelola secara swadaya untuk kesejahteraan masyarakat lokal.",
  items = [
    { symbol: "Ag", name: "Agrikultur", number: "SEKTOR_1", desc: "Sektor pertanian padi dan palawija yang menjadi tulang punggung ketahanan pangan desa.", icon: Leaf },
    { symbol: "Pn", name: "Peternakan", number: "SEKTOR_2", desc: "Sentra peternakan unggas dan domba yang dikelola oleh kelompok tani masyarakat.", icon: Zap },
    { symbol: "Um", name: "UMKM Lokal", number: "SEKTOR_3", desc: "Produksi kerajinan tangan dan makanan olahan khas warga Pamulihan.", icon: Droplet },
    { symbol: "Tr", name: "Pariwisata", number: "SEKTOR_4", desc: "Potensi rintisan wisata alam dan budaya yang menonjolkan keasrian pedesaan.", icon: Wind }
  ]
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-6 flex-1">
            <span className="text-[11px] font-black text-green-800 block uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
              {sectionSection}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight leading-snug mt-6">
              {sectionTitle}
            </h2>
            <div className="h-1 w-24 bg-green-100 rounded-full mt-6" />
          </div>
          
          <div className="bg-green-50 p-6 rounded-3xl max-w-lg shadow-inner">
            <p className="text-sm text-green-900/80 font-bold leading-relaxed">
              {sectionDesc}
            </p>
          </div>
        </div>

        {/* Grid Potensi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((el, idx) => {
            const IconComp = el.icon;
            return (
              <div 
                key={idx}
                className="p-8 bg-white rounded-[32px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono font-black text-green-900/30 group-hover:text-green-600 transition-colors uppercase bg-slate-50 px-3 py-1 rounded-full">
                    {el.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-900 group-hover:bg-green-950 group-hover:text-white transition-all duration-500 shadow-sm">
                    {IconComp && <IconComp size={20} />}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-5xl font-black tracking-tight text-green-950 group-hover:text-green-700 transition-colors">
                      {el.symbol}
                    </span>
                    <span className="text-base font-black text-green-800 block truncate w-full mt-2">
                      {el.name}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-green-50 group-hover:bg-green-100 transition-colors mb-5" />

                <p className="text-sm text-green-900/70 leading-relaxed font-bold line-clamp-4 transition-colors">
                  {el.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};