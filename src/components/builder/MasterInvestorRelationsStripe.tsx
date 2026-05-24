import React from 'react';
import { FileText, Download } from 'lucide-react';

export interface InvestorDoc {
  title: string;
  url: string;
}

export interface MasterInvestorRelationsStripeProps {
  title?: string;
  subtitle?: string;
  documents?: InvestorDoc[];
}

export const MasterInvestorRelationsStripe: React.FC<MasterInvestorRelationsStripeProps> = ({
  title = "Keterbukaan Informasi Publik",
  subtitle = "Laporan & Dokumen Desa",
  documents = []
}) => {
  return (
    <section className="py-12 bg-white font-sans selection:bg-green-900 selection:text-white relative z-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
          <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-900 flex-shrink-0 shadow-inner">
            <FileText size={24} />
          </div>
          <div className="space-y-1">
            <span className="text-sm font-black text-green-950 block tracking-tight">
              {title}
            </span>
            <span className="text-[10px] font-bold text-green-800/60 uppercase tracking-widest block">
              {subtitle}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 w-full md:w-auto">
          {documents.map((doc, idx) => (
            <a 
              key={idx}
              href={doc.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-green-950 text-green-800 hover:text-white rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2.5 shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(20,83,45,0.2)] group cursor-pointer hover:-translate-y-1"
            >
              <Download size={16} className="text-green-600 group-hover:text-green-400 transition-colors" /> 
              <span>{doc.title}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};