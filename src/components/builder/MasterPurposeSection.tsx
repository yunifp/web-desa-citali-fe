import React from 'react';

export interface MasterPurposeSectionProps {
  badge?: string;
  items?: string[];
  description?: string;
  bgImageUrl?: string;
}

export const MasterPurposeSection: React.FC<MasterPurposeSectionProps> = ({
  badge = 'Fokus Kami',
  items = [
    'Transparansi Dana',
    'Ekonomi Mandiri',
    'Kesejahteraan Warga',
  ],
  description = 'Mengoptimalkan potensi alam dan sumber daya manusia guna menopang kemajuan ekonomi kerakyatan di Desa Citali.',
  bgImageUrl = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop',
}) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />

        {/* Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-green-100/50 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-green-50/80 blur-[100px]" />

        {/* Image Accent Left */}
        <div className="absolute left-[-15%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 hidden lg:block">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-green-900/5 shadow-[0_0_120px_rgba(20,83,45,0.1)] backdrop-blur-3xl" />
            <img
              src={bgImageUrl}
              alt="Background Accent"
              className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-overlay grayscale"
            />
          </div>
        </div>
      </div>

      {/* CUSTOM STYLE */}
      <style>{`
        @keyframes marqueeVertical {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        .animate-marquee-v {
          animation: marqueeVertical 32s linear infinite;
        }

        .mask-fade-vertical {
          -webkit-mask-image: linear-gradient(to bottom, transparent, white 15%, white 85%, transparent);
          mask-image: linear-gradient(to bottom, transparent, white 15%, white 85%, transparent);
        }

        .text-stroke {
          color: transparent;
          -webkit-text-stroke: 1px rgba(20, 83, 45, 0.15); /* Soft green border */
          transition: all 0.4s ease;
        }

        .text-stroke:hover {
          color: #14532d; /* green-900 */
          -webkit-text-stroke: 1px transparent;
          text-shadow: 0 10px 30px rgba(20, 83, 45, 0.15);
        }
      `}</style>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-end">
          <div className="w-full max-w-3xl text-right">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 shadow-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-green-900">
                {badge}
              </span>
            </div>

            {/* Description */}
            <div className="flex justify-end mb-14">
              <p className="text-sm sm:text-base leading-relaxed text-green-900/80 font-bold max-w-xl relative pr-6 before:absolute before:right-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-600 before:rounded-full">
                {description}
              </p>
            </div>

            {/* MARQUEE */}
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden mask-fade-vertical">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee-v flex flex-col pt-10">
                {duplicatedItems.map((text, idx) => (
                  <div
                    key={idx}
                    className="group py-2 sm:py-3 transition-all duration-500"
                  >
                    <h2 className="text-stroke text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tight leading-none uppercase cursor-default">
                      {text}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom line accent */}
            <div className="mt-12 flex justify-end">
              <div className="w-64 h-1.5 rounded-full bg-gradient-to-l from-green-300 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};