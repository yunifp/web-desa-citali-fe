import React from 'react';
import { Globe, TrendingUp, ShieldCheck } from 'lucide-react';

interface MetricObj {
  label: string;
  value: string;
  unit: string;
  subtitle: string;
  desc: string;
}

interface MasterImpactDashboardProps {
  sectionSection?: string;
  sectionTitle?: string;
  badgeText?: string;
  metric1?: MetricObj;
  metric2?: MetricObj;
  metric3?: MetricObj;
  disclaimerTitle?: string;
  disclaimerDesc?: string;
  buttonText?: string;
  buttonUrl?: string; 
}

export const MasterImpactDashboard: React.FC<MasterImpactDashboardProps> = ({
  sectionSection = "Statistik Terbuka",
  sectionTitle = "Dasbor Pencapaian Desa Citali",
  badgeText = "Data Real-Time",
  metric1 = { label: "Populasi", value: "3,250", unit: "Jiwa", subtitle: "Total Penduduk", desc: "Jumlah keseluruhan warga yang menetap di wilayah administratif Desa Citali." },
  metric2 = { label: "Infrastruktur", value: "100", unit: "%", subtitle: "Akses Jalan Desa", desc: "Persentase jalan desa dan dusun yang telah teraspal dan dicor dengan baik." },
  metric3 = { label: "Ekonomi", value: "15", unit: "Kelompok", subtitle: "UMKM Aktif", desc: "Kelompok usaha mikro yang produktif mendorong ekonomi kerakyatan." },
  disclaimerTitle = "Transparansi Publik",
  disclaimerDesc = "Seluruh data statistik dan laporan pertanggungjawaban diperbarui secara berkala sebagai bentuk komitmen keterbukaan informasi pemerintah desa.",
  buttonText = "Unduh Laporan Lengkap",
  buttonUrl = "#"
}) => {
  return (
    <section className="py-24 bg-green-950 text-white font-sans select-none overflow-hidden relative">
      
      {/* Background Gradient & Ornaments */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-emerald-950/40 z-0" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Tanpa Border, Pakai Padding/Gap */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-4">
          <div className="space-y-6 max-w-2xl">
            <span className="text-[11px] font-black text-green-300 uppercase tracking-widest block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-white/20 after:rounded-full">
              {sectionSection}
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-snug mt-6">
              {sectionTitle}
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full text-white text-xs font-bold flex-shrink-0 shadow-inner backdrop-blur-sm">
            <Globe size={18} className="text-green-300" /> {badgeText}
          </div>
        </div>

        {/* Grid Cards Tanpa Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-10 bg-white/5 rounded-[32px] space-y-6 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500">
            <div className="flex items-center justify-between text-green-300">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                <TrendingUp size={24} />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-green-100/50 bg-black/20 px-3 py-1 rounded-full">{metric1.label}</span>
            </div>
            <div className="pt-2">
              <span className="text-5xl font-black block tracking-tight text-white group-hover:text-green-200 transition-colors drop-shadow-md">
                {metric1.value} <span className="text-base font-bold text-green-100/50 uppercase ml-1">{metric1.unit}</span>
              </span>
              <p className="text-base font-black text-green-50 mt-2">{metric1.subtitle}</p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <p className="text-xs text-green-100/80 leading-relaxed font-bold">
              {metric1.desc}
            </p>
          </div>

          <div className="p-10 bg-white/5 rounded-[32px] space-y-6 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500">
            <div className="flex items-center justify-between text-emerald-300">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-green-100/50 bg-black/20 px-3 py-1 rounded-full">{metric2.label}</span>
            </div>
            <div className="pt-2">
              <span className="text-5xl font-black block tracking-tight text-white group-hover:text-emerald-200 transition-colors drop-shadow-md">
                {metric2.value} <span className="text-base font-bold text-green-100/50 uppercase ml-1">{metric2.unit}</span>
              </span>
              <p className="text-base font-black text-green-50 mt-2">{metric2.subtitle}</p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <p className="text-xs text-green-100/80 leading-relaxed font-bold">
              {metric2.desc}
            </p>
          </div>

          <div className="p-10 bg-white/5 rounded-[32px] space-y-6 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative group hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500">
            <div className="flex items-center justify-between text-teal-300">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                <Globe size={24} />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-green-100/50 bg-black/20 px-3 py-1 rounded-full">{metric3.label}</span>
            </div>
            <div className="pt-2">
              <span className="text-5xl font-black block tracking-tight text-white group-hover:text-teal-200 transition-colors drop-shadow-md">
                {metric3.value} <span className="text-base font-bold text-green-100/50 uppercase ml-1">{metric3.unit}</span>
              </span>
              <p className="text-base font-black text-green-50 mt-2">{metric3.subtitle}</p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <p className="text-xs text-green-100/80 leading-relaxed font-bold">
              {metric3.desc}
            </p>
          </div>

        </div>

        {/* Banner Bawah (Disclaimer & Tombol) */}
        <div className="p-10 bg-white/10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <div className="space-y-3 text-center md:text-left relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-green-400 before:rounded-full">
            <h4 className="text-lg font-black tracking-tight text-white uppercase">
              {disclaimerTitle}
            </h4>
            <p className="text-sm text-green-100 font-bold max-w-2xl leading-relaxed">
              {disclaimerDesc}
            </p>
          </div>
          
          <a 
            href={buttonUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-10 py-5 bg-white hover:bg-green-50 text-green-950 font-black rounded-full text-xs uppercase tracking-widest shadow-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all flex-shrink-0 inline-block text-center"
          >
            {buttonText}
          </a>
        </div>

      </div>
    </section>
  );
};