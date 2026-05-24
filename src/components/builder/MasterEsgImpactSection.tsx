import React from 'react';
import { Leaf, Droplet, Wind, Zap, Activity, ShieldCheck } from 'lucide-react';

export interface EsgMetric {
  tag: string;
  value: string;
  title: string;
  desc: string;
  iconType: string;
}

export interface MasterEsgImpactSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  metrics?: EsgMetric[];
}

export const MasterEsgImpactSection: React.FC<MasterEsgImpactSectionProps> = ({
  badge = "Desa Hijau & Lestari",
  title = "Indeks Lingkungan & Sosial Desa",
  description = "Pemantauan berkala terhadap indikator kebersihan, penghijauan, dan kesehatan masyarakat untuk menjaga kenyamanan ekosistem Desa Citali.",
  metrics = [
    { tag: "I-01", value: "85%", title: "Indeks Kebersihan", desc: "Tingkat partisipasi warga dalam pengelolaan sampah mandiri.", iconType: "leaf" },
    { tag: "I-02", value: "92", title: "Skor Air Bersih", desc: "Kualitas ketersediaan air bersih untuk sanitasi keluarga.", iconType: "droplet" },
    { tag: "I-03", value: "A+", title: "Kesehatan Warga", desc: "Capaian program Posyandu dan penurunan stunting desa.", iconType: "activity" }
  ]
}) => {
  const getIconAndColor = (type: string) => {
    switch (type) {
      case 'leaf': return { icon: <Leaf size={20} />, color: 'text-green-300' };
      case 'droplet': return { icon: <Droplet size={20} />, color: 'text-emerald-300' };
      case 'wind': return { icon: <Wind size={20} />, color: 'text-teal-300' };
      case 'zap': return { icon: <Zap size={20} />, color: 'text-lime-300' };
      case 'activity': return { icon: <Activity size={20} />, color: 'text-emerald-400' };
      case 'shield': return { icon: <ShieldCheck size={20} />, color: 'text-green-400' };
      default: return { icon: <Leaf size={20} />, color: 'text-green-300' };
    }
  };

  return (
    <section className="py-24 bg-green-950 text-white font-sans overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 bg-white/5 p-8 md:p-12 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <div className="space-y-6 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-black bg-white/10 px-4 py-2 rounded-full text-green-300 uppercase tracking-widest inline-block shadow-inner">
              {badge}
            </span>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-snug">{title}</h2>
          </div>
          <div className="max-w-sm text-center md:text-right">
            <p className="text-sm text-green-100 font-bold leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, idx) => {
            const { icon, color } = getIconAndColor(m.iconType);
            return (
              <div key={idx} className="bg-white/10 rounded-[32px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl space-y-6 hover:bg-white/15 hover:-translate-y-2 transition-all duration-500 group">
                <div className={`flex items-center justify-between ${color}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                    {icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-green-100/50 bg-black/20 px-3 py-1 rounded-full group-hover:text-green-300 transition-colors">{m.tag}</span>
                </div>
                
                <div className="pt-2">
                  <span className="text-5xl font-black block tracking-tight text-white drop-shadow-sm">{m.value}</span>
                  <p className="text-base font-black mt-3 text-green-100">{m.title}</p>
                </div>
                
                <div className="w-full h-px bg-white/10 my-4" />
                
                <p className="text-sm text-green-100/70 leading-relaxed font-medium">{m.desc}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};