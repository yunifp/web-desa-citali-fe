import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { publicApi } from '../../services/publicApi';

interface MasterPostGridProps {
  sectionTitle?: string;
  categorySlug: string;
  limit: number;
}

interface PostItem {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  image?: string;
  category?: { name: string };
}

export const MasterPostGrid: React.FC<MasterPostGridProps> = ({
  categorySlug,
  limit = 3
}) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const sanitizeUrl = (url?: string) => {
    if (!url) return '';
    const cleanUrl = url.trim();
    if (cleanUrl.startsWith('http')) return cleanUrl;
    const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/api$/, '').replace(/\/$/, '');
    return `${baseUrl}${cleanUrl.startsWith('/') ? '' : '/'}${cleanUrl}`;
  };

  useEffect(() => {
    const fetchDynamicPosts = async () => {
      try {
        setLoading(true);
        const response = await publicApi.get(`/posts`, {
          params: { category: categorySlug, limit: limit }
        });
        const data = response.data?.data || response.data || [];
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Gagal memuat postingan:", error);
      } finally {
        setLoading(false);
      }
    };
    if (categorySlug) fetchDynamicPosts();
  }, [categorySlug, limit]);

  return (
    <section className="py-24 bg-white font-sans select-none w-full relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(limit)].map((_, i) => <div key={i} className="animate-pulse bg-green-50/50 h-[420px] rounded-[32px] shadow-sm" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-[32px] flex flex-col overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer" 
                onClick={() => navigate(`/read/${post.slug}`)}
              >
                
                {post.image ? (
                  <div className="w-full h-56 overflow-hidden relative m-2 rounded-[24px] w-[calc(100%-16px)]">
                    <img 
                      src={sanitizeUrl(post.image)} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-green-950/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                ) : (
                   <div className="w-full h-56 m-2 rounded-[24px] w-[calc(100%-16px)] flex items-center justify-center bg-green-50 text-[10px] font-bold text-green-800/40">TIDAK ADA GAMBAR</div>
                )}

                <div className="p-8 pt-4 flex flex-col justify-between flex-grow bg-white">
                  <div className="space-y-4">
                    <div className="text-[11px] font-mono font-bold text-green-800/50 group-hover:text-green-600 transition-colors flex items-center gap-2">
                      <Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                    </div>
                    <h3 className="text-lg font-black text-green-950 line-clamp-2 group-hover:text-green-700 transition-colors leading-snug tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-green-50 flex items-center justify-between">
                    <span className="text-xs font-black text-green-900 group-hover:text-green-600 transition-colors">Baca Selengkapnya</span>
                    <div className="w-8 h-8 rounded-full bg-green-50 group-hover:bg-green-600 flex items-center justify-center text-green-800 group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};