import React from 'react';
import { Camera, Maximize2 } from 'lucide-react';

interface GalleryAssetItem {
  id: string;
  title: string;
  caption: string;
  sizeClass: string;
  imgUrl: string;
}

interface MasterGalleryGridProps {
  badge?: string;
  title?: string;
  tagline?: string;
  images?: GalleryAssetItem[];
}

export const MasterGalleryGrid: React.FC<MasterGalleryGridProps> = ({
  badge = "Galeri Desa",
  title = "Dokumentasi & Potret Desa Citali",
  tagline = "Arsip Visual",
  images = []
}) => {
  return (
    <section className="py-24 bg-white font-sans select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Header Section (Susunan Diubah: Teks Tengah dengan Aksen Soft) */}
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="text-[11px] font-black bg-green-50 px-5 py-2 rounded-full text-green-800 uppercase tracking-widest inline-flex items-center gap-2 shadow-sm">
            <Camera size={16} className="text-green-600" /> {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight leading-snug">
            {title}
          </h2>
          <span className="text-sm font-bold text-green-900/70 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.05)] px-6 py-2.5 rounded-2xl">
            {tagline}
          </span>
        </div>

        {/* Grid Galeri (Bentuk diubah jadi full rounded tanpa sudut lancip) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {images.map((item) => (
            <div 
              key={item.id}
              className={`relative rounded-[32px] overflow-hidden bg-green-950 shadow-[0_15px_40px_-15px_rgba(20,83,45,0.3)] group hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.4)] transition-all duration-500 transform hover:-translate-y-2 ${item.sizeClass}`}
            >
              <img 
                src={item.imgUrl} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

              <button 
                onClick={() => alert(`Memperbesar citra lapangan: ${item.title}`)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white backdrop-blur-md flex items-center justify-center text-white hover:text-green-950 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg scale-75 group-hover:scale-100"
                title="Perbesar Citra"
              >
                <Maximize2 size={20} />
              </button>

              {/* Caption Card (Diubah jadi Floating Card di dalam gambar) */}
              <div className="absolute bottom-6 inset-x-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl z-20 space-y-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-inner">
                <h3 className="text-lg font-black text-white tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs text-green-50 font-bold leading-relaxed line-clamp-2 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-green-400 before:rounded-full">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};