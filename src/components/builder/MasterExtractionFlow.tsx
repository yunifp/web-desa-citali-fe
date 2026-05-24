import React from 'react';
import { Layers } from 'lucide-react';

interface FlowStep {
  phase: string;
  title: string;
  desc: string;
}

interface MasterExtractionFlowProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  steps?: FlowStep[];
}

export const MasterExtractionFlow: React.FC<MasterExtractionFlowProps> = ({
  badge = "Prosedur Layanan",
  title = "Alur Pelayanan Administrasi Publik",
  subtitle = "Panduan ringkas bagi warga Desa Citali untuk mengurus dokumen administrasi kependudukan di kantor balai desa.",
  steps = [
    { phase: "01", title: "Persiapan Berkas", desc: "Warga melengkapi persyaratan dokumen dasar seperti KTP, KK, dan surat pengantar dari RT/RW setempat." },
    { phase: "02", title: "Verifikasi Loket", desc: "Penyerahan berkas ke petugas pelayanan balai desa untuk diperiksa kelengkapannya." },
    { phase: "03", title: "Proses Dokumen", desc: "Pencetakan dan pengesahan dokumen oleh Kepala Desa atau perangkat yang berwenang." },
    { phase: "04", title: "Pengambilan", desc: "Warga mengambil dokumen yang telah selesai diproses tanpa dipungut biaya (Gratis)." }
  ]
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-6 flex flex-col items-center">
          <span className="text-[11px] font-black bg-green-50 px-5 py-2 rounded-full text-green-800 uppercase tracking-widest block shadow-sm">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight mt-6">
            {title}
          </h2>
          <p className="text-sm text-green-900/70 font-bold max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-6 relative">
          {/* Vertical Line Connector (Desktop) */}
          <div className="hidden sm:block absolute left-[4.5rem] top-10 bottom-10 w-1.5 bg-green-50 rounded-full z-0" />

          {steps.map((st, idx) => (
            <div key={idx} className="relative z-10 flex flex-col sm:flex-row items-center gap-6 group">
              
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-[24px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.08)] text-green-900 font-black text-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-950 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 z-10">
                {st.phase}
              </div>

              {/* Card Text */}
              <div className="flex-1 w-full bg-white p-8 rounded-[32px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_-15px_rgba(20,83,45,0.15)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-green-950 tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-sm text-green-800/80 font-bold leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-2xl bg-green-50 items-center justify-center text-green-300 flex-shrink-0 group-hover:text-green-700 group-hover:bg-green-100 transition-colors shadow-inner">
                  <Layers size={20} />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};