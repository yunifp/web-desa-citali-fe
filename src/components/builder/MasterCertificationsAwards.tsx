import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export interface CertItem { title: string; desc: string; }
export interface MasterCertificationsAwardsProps {
  title?: string;
  description?: string;
  certs?: CertItem[];
}

export const MasterCertificationsAwards: React.FC<MasterCertificationsAwardsProps> = ({
  title, description, certs = []
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16 text-center relative z-10">
        
        {/* Teks Tengah */}
        <div className="space-y-5 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-3xl bg-green-950 text-white flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(20,83,45,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Award size={28} />
          </div>
          <h3 className="text-3xl font-black text-green-950 tracking-tight">{title}</h3>
          <p className="text-sm text-green-900/70 font-bold leading-relaxed">{description}</p>
        </div>

        {/* Grid Kartu Sertifikat Tanpa Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[32px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col text-left gap-4 transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-green-700" />
              </div>
              <div>
                <h4 className="text-base font-black text-green-950 tracking-tight">{c.title}</h4>
                <p className="text-xs text-green-800/80 font-bold mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};