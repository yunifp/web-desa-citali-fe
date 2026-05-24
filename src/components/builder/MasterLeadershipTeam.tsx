import React from 'react';
import { Link2 } from 'lucide-react';

export interface Leader { name: string; role: string; image: string; url?: string; }
export interface MasterLeadershipTeamProps {
  badge?: string; title?: string; period?: string;
  commissaries?: Leader[]; directors?: Leader[];
}

export const MasterLeadershipTeam: React.FC<MasterLeadershipTeamProps> = ({
  badge = "Aparatur Desa", 
  title = "Pemerintahan Desa Citali", 
  period = "Periode Berjalan", 
  commissaries = []
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden relative">
      {/* Background Ornament Lembut */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Header Section dengan layout yang lebih terpusat secara vertikal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-5">
            <span className="text-[11px] font-black text-green-800 block uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight leading-snug mt-6">
              {title}
            </h2>
          </div>
          <span className="text-xs font-bold text-green-900 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.05)] px-6 py-2.5 rounded-full">
            {period}
          </span>
        </div>

        <div className="space-y-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {commissaries.map((person, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-slate-100 relative shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-10px_rgba(20,83,45,0.25)] transition-all duration-500 transform group-hover:-translate-y-2">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
                  
                  {person.url && (
                    <a href={person.url} target="_blank" rel="noreferrer" className="absolute bottom-5 right-5 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white hover:bg-green-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-500">
                      <Link2 size={18} />
                    </a>
                  )}
                </div>
                
                <div className="space-y-1.5 px-3 text-center">
                  <h4 className="text-lg font-black text-green-950 group-hover:text-green-700 transition-colors tracking-tight">{person.name}</h4>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wider">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};