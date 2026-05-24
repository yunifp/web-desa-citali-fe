import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface StrategicCard {
  title: string;
  image: string;
  icon: string;
  url: string;
}

export interface MasterStrategicSectorsProps {
  badge?: string;
  title?: string;
  cards?: StrategicCard[];
}

export const MasterStrategicSectors: React.FC<MasterStrategicSectorsProps> = ({
  badge = "Fokus Pembangunan",
  title = "Sektor strategis untuk kemajuan desa",
  cards = []
}) => {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden relative">
      {/* Background Ornament */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Header Center */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          <span className="text-[11px] font-black text-green-800 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)] px-5 py-2 rounded-full uppercase tracking-widest inline-block">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-green-950 tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((sec, idx) => (
            <div 
              key={idx}
              // Bentuk Kartu Kapsul Vertikal Penuh (Pill shape)
              className="relative overflow-hidden h-[450px] rounded-[100px] bg-green-950 shadow-[0_15px_40px_-15px_rgba(20,83,45,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.4)] hover:-translate-y-2 group flex flex-col justify-between p-8 transition-all duration-500"
            >
              <img 
                src={sec.image} 
                alt={sec.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-0 opacity-60 group-hover:opacity-40"
              />
              {/* Overlay Gradient Hijau Tua */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/50 to-green-950 z-10" />

              {/* Ikon di Tengah Atas */}
              <div className="relative z-20 self-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner font-bold text-2xl mt-4">
                {sec.icon}
              </div>

              {/* Teks & Panah di Bawah */}
              <div className="relative z-20 space-y-6 text-center">
                <h3 className="text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                  {sec.title}
                </h3>

                <Link 
                  to={sec.url || '#'} 
                  className="w-14 h-14 mx-auto rounded-full bg-white hover:bg-green-300 flex items-center justify-center text-green-950 font-black transition-all shadow-lg transform group-hover:scale-110"
                  title="Lihat Detail"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};