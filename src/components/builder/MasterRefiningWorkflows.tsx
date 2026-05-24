import React, { useState } from 'react';
import { Settings2, ArrowRight, CheckCircle2, FlaskConical, Gauge } from 'lucide-react';

interface WorkflowItem {
  title: string;
  subtitle: string;
  desc: string;
  metric: string;
  efficiency: string;
  imgUrl: string;
}

interface MasterRefiningWorkflowsProps {
  sectionBadge?: string;
  sectionTitle?: string;
  sectionDesc?: string;
  workflows?: WorkflowItem[];
}

export const MasterRefiningWorkflows: React.FC<MasterRefiningWorkflowsProps> = ({
  sectionBadge = "Prosedur Layanan",
  sectionTitle = "Alur Pelayanan Administrasi",
  sectionDesc = "Panduan ringkas bagi warga untuk mengurus dokumen administrasi di balai desa secara efisien dan transparan.",
  workflows = []
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!workflows || workflows.length === 0) return null;

  return (
    <section className="py-24 bg-white text-green-950 font-sans select-none overflow-hidden relative">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Tajuk Seksi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="space-y-6 max-w-2xl">
            <span className="text-[11px] font-black bg-green-50 text-green-800 px-5 py-2 rounded-full uppercase tracking-widest inline-flex items-center gap-2 shadow-sm">
              <Settings2 size={16} className="text-green-600" /> {sectionBadge}
            </span>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-snug text-green-950">
              {sectionTitle}
            </h2>
          </div>
          <p className="text-sm text-green-900/70 font-bold max-w-md leading-relaxed relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-400 before:rounded-full">
            {sectionDesc}
          </p>
        </div>

        {/* Tata Letak Akordeon Kiri & Dasbor Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Kolom Kiri: Daftar Akordeon */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            {workflows.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-[32px] transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${
                    isActive 
                      ? 'bg-green-50 shadow-[0_15px_30px_-10px_rgba(20,83,45,0.15)]' 
                      : 'bg-white shadow-sm hover:bg-green-50/50 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-5">
                      <span className={`text-sm font-black w-10 h-10 flex items-center justify-center rounded-2xl transition-all shadow-sm ${
                        isActive ? 'bg-green-950 text-white' : 'bg-white text-green-800 group-hover:bg-green-100'
                      }`}>
                        0{idx + 1}
                      </span>
                      <span className={`text-base sm:text-lg font-black tracking-tight ${isActive ? 'text-green-950' : 'text-green-900/60 group-hover:text-green-900 transition-colors'}`}>
                        {item.title}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${isActive ? 'bg-white text-green-700 translate-x-1' : 'bg-green-50 text-green-400 group-hover:bg-white group-hover:text-green-600'}`}>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  {isActive && (
                    <div className="pt-6 mt-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-green-900/10 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <span className="text-[10px] font-black text-green-700 block uppercase tracking-widest">
                        {item.subtitle}
                      </span>
                      <p className="text-sm text-green-950/80 leading-relaxed font-bold">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Kolom Kanan: Panel Visual */}
          <div className="lg:col-span-6 bg-green-950 rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,83,45,0.4)]">
            <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
              <img 
                src={workflows[activeStep]?.imgUrl} 
                alt={workflows[activeStep]?.title} 
                className="w-full h-full object-cover transition-transform duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/80 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between pb-6 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                  <FlaskConical size={18} className="text-green-300" />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  Visualisasi Tahapan
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-inner">
                <CheckCircle2 size={14} className="text-green-400" /> Valid
              </span>
            </div>

            <div className="relative z-10 my-10 space-y-5 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-green-400 before:rounded-full">
              <span className="text-[10px] font-mono font-black text-green-300 bg-white/10 px-3 py-1 rounded-full inline-block uppercase tracking-widest shadow-inner">
                TAHAP_0{activeStep + 1}
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-snug drop-shadow-md">
                {workflows[activeStep]?.title}
              </h3>
              <p className="text-sm text-green-100/90 leading-relaxed font-bold">
                {workflows[activeStep]?.desc}
              </p>
            </div>

            <div className="relative z-10 pt-6 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-white/10 grid grid-cols-2 gap-8 bg-white/5 p-8 rounded-[32px] backdrop-blur-xl shadow-inner">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-green-300 block uppercase tracking-widest flex items-center gap-2">
                  <Gauge size={14} className="text-white" /> Estimasi Waktu
                </span>
                <span className="text-base font-black text-white block truncate">
                  {workflows[activeStep]?.metric}
                </span>
              </div>

              <div className="space-y-2 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                <span className="text-[10px] font-black text-green-300 block uppercase tracking-widest">
                  Biaya Layanan
                </span>
                <span className="text-base font-black text-green-400 block truncate drop-shadow-sm">
                  {workflows[activeStep]?.efficiency}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};