import React, { useEffect, useState } from "react";
import { publicProductApi } from "../../services/publicApi";
import type { Product } from "../../types/cms";
import { ShoppingBag, ArrowRight, X, MessageCircle, Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export const MasterProductCatalog: React.FC<Props> = ({
  badge = "PRODUK LOKAL",
  title = "Katalog UMKM Desa",
  subtitle = "Mendukung kedaulatan ekonomi melalui produk unggulan daerah yang terverifikasi."
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await publicProductApi.getPublishedProducts();
        if (res.success) setProducts(res.data);
      } catch (err) {
        console.error("Gagal memuat katalog:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return "";
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
    return `${apiBase.replace('/api', '')}${imagePath}`;
  };
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 flex flex-col items-center">
          <span className="text-[11px] font-black bg-green-50 text-green-800 px-5 py-2 rounded-full uppercase tracking-widest block shadow-sm">
            {badge}
          </span>
          <h2 className="text-3xl lg:text-5xl font-light text-green-950 tracking-tight mt-6">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-green-900/70 font-bold leading-relaxed max-w-2xl">{subtitle}</p>}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 opacity-50">
            <ShoppingBag size={48} className="text-green-200 animate-bounce mb-4" />
            <p className="text-xs font-bold text-green-800/50 uppercase tracking-widest">Menyiapkan Etalase...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map(p => (
              <div
                key={p.id}
                onClick={() => navigate(`/produk/${p.slug}`)} 
                className="bg-white rounded-[32px] flex flex-col overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-green-50/50 relative overflow-hidden m-2 rounded-[24px] w-[calc(100%-16px)]">
                  {p.image ? (
                    <img src={getImageUrl(p.image)} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-green-800/30"><ShoppingBag size={32} /></div>
                  )}
                  {p.stock === 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">HABIS</div>
                  )}
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-black text-green-950 line-clamp-1 group-hover:text-green-700 transition-colors tracking-tight">{p.name}</h3>
                    <p className="text-xs text-green-900/60 mt-2 line-clamp-2 leading-relaxed font-bold">{p.description}</p>
                  </div>
                  <div className="mt-6 pt-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-green-50 flex items-center justify-between">
                    <span className="text-lg font-black text-green-700 group-hover:text-green-950 transition-colors">Rp {p.price.toLocaleString("id-ID")}</span>
                    <span className="w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-950 text-green-900 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-green-50/50 rounded-[40px] shadow-inner">
            <p className="text-green-900/50 font-bold text-sm">Belum ada produk yang dipublikasikan.</p>
          </div>
        )}
      </div>

      {/* MODAL QUICK VIEW */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-green-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="bg-white rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-300">

            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-green-900 hover:bg-red-50 hover:text-red-600 transition-colors shadow-lg">
              <X size={20} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto bg-green-50/50 relative">
              {selectedProduct.image ? (
                <img src={getImageUrl(selectedProduct.image)} alt={selectedProduct.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-green-800/30"><ShoppingBag size={64} className="mb-4" /><span>Tidak Ada Foto</span></div>
              )}
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-[10px] font-black text-green-900 uppercase tracking-widest mb-6 shadow-sm">
                  <Box size={14} className="text-green-600" /> Sisa Stok: {selectedProduct.stock} unit
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-green-950 leading-tight mb-2 tracking-tight">{selectedProduct.name}</h2>
                <div className="text-3xl font-black text-green-700 mb-8 tracking-tight">Rp {selectedProduct.price.toLocaleString("id-ID")}</div>

                <div className="prose prose-sm prose-slate relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-100 before:rounded-full">
                  <p className="text-green-900/80 leading-relaxed text-justify font-bold">{selectedProduct.description}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-green-50 space-y-4">
                <p className="text-[10px] font-black text-green-800/50 uppercase tracking-widest text-center mb-6 relative flex justify-center items-center">
                  <span className="bg-white px-4 relative z-10">Pilih Saluran Pembelian</span>
                  <span className="absolute w-full h-px bg-green-50 left-0"></span>
                </p>

                {selectedProduct.button1Url && (
                  <a href={selectedProduct.button1Url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white py-4 px-6 rounded-full font-black text-sm uppercase tracking-wide transition-all shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 active:scale-95">
                    <MessageCircle size={20} /> {selectedProduct.button1Label || "Beli via WhatsApp"}
                  </a>
                )}
                {selectedProduct.button2Url && (
                  <a href={selectedProduct.button2Url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#EE4D2D] hover:bg-[#D74225] text-white py-4 px-6 rounded-full font-black text-sm uppercase tracking-wide transition-all shadow-[0_10px_20px_rgba(238,77,45,0.3)] hover:-translate-y-1 active:scale-95">
                    <ShoppingBag size={20} /> {selectedProduct.button2Label || "Beli via Shopee"}
                  </a>
                )}
                {!selectedProduct.button1Url && !selectedProduct.button2Url && (
                  <div className="text-center p-5 bg-green-50 text-green-900 rounded-2xl text-xs font-bold shadow-inner">
                    Penjual belum mengatur tautan pembelian untuk produk ini.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};