/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { publicApi, getBackendMediaUrl } from '../../services/publicApi';

export interface MasterNewsroomSectionProps {
  badge?: string;
  title?: string;
  linkText?: string;
  linkUrl?: string;
  categorySlug?: string;
  limit?: number;
}

export const MasterNewsroomSection: React.FC<MasterNewsroomSectionProps> = ({
  badge = "Pusat Media & Informasi",
  title = "Berita & Pengumuman Desa",
  linkText = "Lihat Semua Berita",
  linkUrl = "/p/berita",
  categorySlug = "",
  limit = 4
}) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    publicApi.get('/posts', { 
      params: { category: categorySlug || undefined, limit, status: 'PUBLISHED' } 
    })
      .then(res => setPosts(res.data?.data || []))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [categorySlug, limit]);

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header dengan layout menyamping vertikal center */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-8">
          <div className="space-y-4">
            <span className="text-[11px] font-black bg-green-50 text-green-800 px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-green-950 tracking-tight leading-snug">
              {title}
            </h2>
          </div>

          {linkText && linkUrl && (
            <Link to={linkUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_20px_rgba(20,83,45,0.15)] rounded-full text-xs font-black text-green-900 transition-all flex-shrink-0 group hover:-translate-y-1">
              <span>{linkText}</span> <ArrowRight size={16} className="text-green-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-sm font-bold text-green-800/50 animate-pulse">Memuat berita terkini...</div>
        ) : posts.length > 0 ? (
          <div className="flex gap-8 overflow-x-auto pb-10 pt-4 scrollbar-hide snap-x">
            {posts.map((post) => (
              <div 
                key={post.id}
                className="w-80 sm:w-96 flex-shrink-0 snap-start bg-white rounded-[32px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group h-[420px] cursor-pointer relative"
              >
                <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden rounded-[32px] m-2 shadow-inner w-[calc(100%-16px)] h-[calc(100%-16px)]">
                  {post.image ? (
                    <img 
                      src={getBackendMediaUrl(post.image)} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-green-50 text-[10px] font-bold text-green-800/40">BERITA DESA</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-green-950 text-[9px] font-black px-3 py-1.5 rounded-full uppercase shadow-sm">
                    {post.category?.name || 'Informasi'}
                  </span>
                </div>

                <div className="px-6 pb-6 pt-2 flex-1 flex flex-col justify-between bg-white rounded-b-[32px]">
                  <h3 className="text-lg font-black text-green-950 leading-snug line-clamp-3 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between pt-5 mt-2">
                    <span className="text-[11px] font-mono font-bold text-green-800/60 group-hover:text-green-700 transition-colors">
                      {new Date(post.publishedAt || post.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <Link 
                      to={`/read/${post.slug}`} 
                      className="w-10 h-10 rounded-full bg-white shadow-md group-hover:bg-green-950 flex items-center justify-center text-green-900 group-hover:text-white transition-all transform group-hover:scale-110"
                    >
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-sm text-green-900/60 font-medium bg-green-50/50 rounded-3xl shadow-inner">
            Belum ada berita atau pengumuman yang dipublikasikan.
          </div>
        )}

      </div>
    </section>
  );
};