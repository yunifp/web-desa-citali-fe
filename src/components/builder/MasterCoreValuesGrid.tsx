import React from 'react';
import { Compass, Target, Award, Shield, Zap, Users } from 'lucide-react';

export interface CoreValueItem { title: string; desc: string; iconType: string; }
export interface MissionItem { text: string; }

export interface MasterCoreValuesGridProps {
  visionBadge?: string; visionTitle?: string; visionDesc?: string; visionTarget?: string;
  missionBadge?: string; missionTitle?: string; missions?: MissionItem[];
  valuesBadge?: string; valuesTitle?: string; valuesDesc?: string; coreValues?: CoreValueItem[];
}

const getIcon = (type: string) => {
  switch(type) {
    case 'award': return Award; case 'users': return Users; case 'target': return Target;
    case 'zap': return Zap; case 'compass': return Compass; default: return Shield;
  }
};

export const MasterCoreValuesGrid: React.FC<MasterCoreValuesGridProps> = ({
  visionBadge = "Visi Utama", 
  visionTitle = "Mewujudkan Desa Citali yang Mandiri dan Sejahtera", 
  visionDesc = "Berkomitmen penuh pada pembangunan berkelanjutan, pelayanan transparan, dan pemberdayaan ekonomi masyarakat berbasis potensi lokal.", 
  visionTarget = "2026 - 2030",
  missionBadge = "Misi Pembangunan", 
  missionTitle = "Langkah Strategis Kami", 
  missions = [
    { text: "Meningkatkan kualitas pelayanan administrasi publik yang cepat dan tepat." },
    { text: "Mengoptimalkan potensi pertanian dan UMKM warga Desa Citali." },
    { text: "Membangun infrastruktur desa yang memadai dan ramah lingkungan." },
    { text: "Mendorong partisipasi aktif masyarakat dalam setiap program desa." }
  ],
  valuesBadge = "Nilai Dasar", 
  valuesTitle = "Prinsip Kerja Aparatur", 
  valuesDesc = "Landasan etos kerja yang dipegang teguh oleh seluruh perangkat Desa Citali.", 
  coreValues = [
    { title: "Transparansi", desc: "Keterbukaan informasi publik dan pengelolaan dana desa.", iconType: "compass" },
    { title: "Integritas", desc: "Kejujuran dan tanggung jawab dalam melayani masyarakat.", iconType: "shield" },
    { title: "Kolaborasi", desc: "Sinergi antara pemerintah desa, BPD, dan warga.", iconType: "users" }
  ]
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Misi (Dipindah ke Kiri) */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-[11px] font-black text-green-800 block uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
                {missionBadge}
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-green-950 tracking-tight mt-6">{missionTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {missions.map((misi, idx) => (
                <div key={idx} className="flex gap-4 group bg-green-50/50 p-5 rounded-3xl shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-300">
                  <div className="w-1.5 h-auto bg-green-200 group-hover:bg-green-600 rounded-full transition-colors" />
                  <div className="space-y-2">
                    <span className="text-green-800 font-black text-sm block">0{idx + 1}.</span>
                    <p className="text-sm text-green-950/70 leading-relaxed font-bold group-hover:text-green-950 transition-colors">{misi.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kotak Visi (Dipindah ke Kanan, Bentuk Rounded Rectangle Lembut) */}
          <div className="lg:col-span-5 p-12 bg-green-950 text-white rounded-[40px] shadow-[0_20px_50px_-15px_rgba(20,83,45,0.5)] flex flex-col justify-between relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 order-1 lg:order-2">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <span className="text-[10px] font-black bg-white/10 px-4 py-2 rounded-full text-green-100 uppercase tracking-widest w-max shadow-inner">{visionBadge}</span>
              <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-snug">{visionTitle}</h3>
              <p className="text-sm text-green-100/90 font-medium leading-relaxed italic">"{visionDesc}"</p>
            </div>
            
            <div className="pt-8 mt-10 relative z-10 flex flex-col gap-2">
              <div className="h-px w-full bg-white/10 mb-4" />
              <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">Target Realisasi</span>
              <p className="text-base font-black text-white">{visionTarget}</p>
            </div>
          </div>

        </div>

        {/* Core Values (Tanpa Border) */}
        <div className="space-y-16 pt-12 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-px before:bg-green-100">
          <div className="text-center max-w-2xl mx-auto space-y-6 flex flex-col items-center">
            <span className="text-[11px] font-black text-green-800 block uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-green-900 after:rounded-full">
              {valuesBadge}
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-green-950 tracking-tight mt-6">{valuesTitle}</h3>
            <p className="text-sm text-green-900/70 font-bold">{valuesDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((val, idx) => {
              const IconComponent = getIcon(val.iconType);
              return (
                <div key={idx} className="p-10 bg-white rounded-[32px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.15)] hover:-translate-y-2 transition-all duration-500 space-y-8 group">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 group-hover:bg-green-950 text-green-900 group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-sm">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[10px] font-mono font-black text-green-900/20 group-hover:text-green-600 transition-colors bg-slate-50 px-3 py-1 rounded-full">VAL_{idx + 1}</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-black text-green-950 tracking-tight">{val.title}</h4>
                    <p className="text-sm text-green-800/80 leading-relaxed font-bold">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};