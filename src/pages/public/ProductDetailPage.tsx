/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productApi } from '../../services/product.api';
import type { Product } from '../../types/cms';

import {
  ShoppingBag, MessageCircle, Tag,
  ShieldCheck, Truck, BadgeCheck, Sparkles,
  PackageCheck, ChevronRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return '';
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
    return `${apiBase.replace('/api', '')}${imagePath}`;
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      productApi
        .getByIdOrSlug(slug)
        .then((res) => {
            setProduct(res.data);
            setActiveImage(res.data.image || null);
        })
        .catch((err) => console.error('Gagal memuat detail produk:', err))
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6 pt-48">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 animate-pulse">
          <div className="h-[550px] rounded-[40px] bg-green-50/80 shadow-sm"></div>
          <div className="space-y-6 pt-4">
            <div className="h-8 w-48 rounded-full bg-green-50/80"></div>
            <div className="h-14 w-full rounded-2xl bg-green-50/80"></div>
            <div className="h-10 w-64 rounded-2xl bg-green-50/80"></div>
            <div className="space-y-4 pt-6">
              <div className="h-5 rounded-full bg-green-50/80"></div>
              <div className="h-5 rounded-full bg-green-50/80"></div>
              <div className="h-5 w-5/6 rounded-full bg-green-50/80"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white pt-48">
        <div className="w-32 h-32 rounded-full bg-green-50 shadow-[0_10px_30px_rgba(20,83,45,0.1)] flex items-center justify-center mb-10 animate-bounce">
          <ShoppingBag className="text-green-500" size={56} />
        </div>
        <h2 className="text-4xl font-light text-green-950 mb-4 tracking-tight">Produk Tidak Ditemukan</h2>
        <p className="text-green-900/60 font-bold mb-12 max-w-md text-sm leading-relaxed">Produk yang kamu cari mungkin sudah ditarik dari etalase, dihapus, atau tautannya tidak lagi valid.</p>
        <Link to="/" className="px-10 py-5 rounded-full bg-green-950 text-white text-xs font-black uppercase tracking-widest hover:bg-green-800 hover:-translate-y-1 shadow-[0_15px_30px_rgba(20,83,45,0.2)] transition-all">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pb-24">
      
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full bg-green-950 text-white overflow-hidden font-sans select-none pt-40 pb-32 md:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-950 z-0" />
        <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 space-y-10">
          
          <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-green-100/50 uppercase">
            <Link to="/" className="hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-full">Beranda</Link>
            <ChevronRight size={12} />
            <Link to="/katalog" className="hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-full">Katalog</Link>
            <ChevronRight size={12} />
            <span className="text-white bg-green-800/50 px-3 py-1.5 rounded-full shadow-inner truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
          </nav>
          
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest shadow-inner backdrop-blur-sm">
              <ShieldCheck size={16} className="text-green-300" /> {product.category?.name || "Produk Desa"}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-green-100/90 font-bold leading-relaxed max-w-2xl line-clamp-2 relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:bg-green-400 before:rounded-full">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT (Overlap -mt-20)
      ========================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 -mt-20 md:-mt-32">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* IMAGE & GALLERY KIRI */}
          <div className="space-y-8">
            
            {/* Main Image Display (Tanpa Border) */}
            <div className="relative overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_-15px_rgba(20,83,45,0.3)] group">
              {activeImage ? (
                <img
                  src={getImageUrl(activeImage)}
                  alt={product.name}
                  className="w-full h-[450px] md:h-[600px] object-cover transition-transform duration-1000 hover:scale-105"
                />
              ) : (
                <div className="h-[450px] md:h-[600px] flex flex-col items-center justify-center bg-green-50 text-green-800/30">
                  <ShoppingBag size={80} className="mb-6 animate-pulse" />
                  <span className="font-bold text-sm tracking-wide">Tidak Ada Foto Produk</span>
                </div>
              )}
              <div className="absolute top-8 left-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                <Sparkles size={16} className="text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-950">Premium Label</span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-5 px-2">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`aspect-square rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer bg-white ${activeImage === imgUrl ? 'shadow-[0_10px_20px_rgba(20,83,45,0.3)] scale-110 z-10 relative ring-4 ring-white' : 'opacity-60 hover:opacity-100 hover:scale-105 shadow-sm'}`}
                  >
                    <img src={getImageUrl(imgUrl)} alt={`Galeri ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* FEATURE BOXES */}
            <div className="grid grid-cols-3 gap-5 pt-4">
              <div className="bg-green-50/50 rounded-3xl p-6 shadow-sm text-center transition-all duration-500 hover:bg-green-50 hover:shadow-md hover:-translate-y-1 group">
                <Truck className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-black text-[10px] uppercase tracking-wider text-green-900">Pengiriman Cepat</h4>
              </div>
              <div className="bg-green-50/50 rounded-3xl p-6 shadow-sm text-center transition-all duration-500 hover:bg-green-50 hover:shadow-md hover:-translate-y-1 group">
                <ShieldCheck className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-black text-[10px] uppercase tracking-wider text-green-900">Produk Asli</h4>
              </div>
              <div className="bg-green-50/50 rounded-3xl p-6 shadow-sm text-center transition-all duration-500 hover:bg-green-50 hover:shadow-md hover:-translate-y-1 group">
                <BadgeCheck className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-black text-[10px] uppercase tracking-wider text-green-900">Seller Trusted</h4>
              </div>
            </div>
          </div>

          {/* CONTENT KANAN */}
          <div className="space-y-10 lg:pt-16">
            
            {/* STOCK & PRICE KARTU */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_15px_40px_-15px_rgba(20,83,45,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.2)] transition-shadow duration-500">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-green-50 shadow-inner mb-8">
                <PackageCheck size={18} className="text-green-600" />
                <span className="text-[11px] font-black uppercase tracking-widest text-green-900">
                  Sisa Stok : {product.stock} Unit
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[24px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] flex items-center justify-center">
                  <Tag className="text-green-500" size={28} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-green-800/50 font-black mb-2">Harga Produk</p>
                  <h2 className="text-4xl md:text-5xl font-black text-green-700 tracking-tight">
                    Rp {product.price.toLocaleString('id-ID')}
                  </h2>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_15px_40px_-15px_rgba(20,83,45,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(20,83,45,0.2)] transition-shadow duration-500">
              <h3 className="text-xl font-black text-green-950 mb-8 flex items-center gap-3 relative pb-5 before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-green-50">
                <Sparkles size={24} className="text-green-500" /> Deskripsi Detail
              </h3>
              <p className="text-sm md:text-base text-green-900/80 leading-loose whitespace-pre-wrap font-bold">
                {product.description || 'Belum ada deskripsi spesifik untuk produk ini.'}
              </p>
            </div>

            {/* BENEFIT (Sekarang Pakai Green-950) */}
            <div className="bg-green-950 rounded-[40px] p-8 md:p-12 text-white shadow-[0_20px_50px_-15px_rgba(20,83,45,0.4)] relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-inner">
                  <Sparkles className="text-green-300" size={20} />
                </div>
                <h3 className="font-light text-2xl md:text-3xl tracking-tight">Nilai Tambah Produk</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-inner hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-black text-base mb-3 text-white tracking-wide">Kualitas Lokal</h4>
                  <p className="text-xs text-green-100/80 leading-relaxed font-bold">Diproduksi langsung oleh tangan terampil masyarakat Desa Citali.</p>
                </div>
                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md shadow-inner hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-black text-base mb-3 text-white tracking-wide">Layanan Responsif</h4>
                  <p className="text-xs text-green-100/80 leading-relaxed font-bold">Tim penjual siap membantu setiap kebutuhan transaksi Anda.</p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_15px_40px_-15px_rgba(20,83,45,0.1)]">
              <div className="flex flex-col mb-8 pb-6 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-green-50">
                <h3 className="text-2xl font-black text-green-950 tracking-tight">Proses Pembelian</h3>
                <p className="text-xs text-green-800/60 mt-2 font-bold uppercase tracking-wider">Silakan pilih platform afiliasi di bawah ini</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {product.button1Url ? (
                  <a href={product.button1Url} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] active:scale-95 text-white py-5 px-6 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)]">
                    <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                    <span className="relative z-10">{product.button1Label || 'WhatsApp'}</span>
                  </a>
                ) : (
                  <div className="py-5 rounded-full bg-slate-50 text-center text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-inner">
                    <MessageCircle size={18} /> WA Tidak Aktif
                  </div>
                )}

                {product.button2Url ? (
                  <a href={product.button2Url} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#EE4D2D] hover:bg-[#D74225] active:scale-95 text-white py-5 px-6 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(238,77,45,0.3)] hover:shadow-[0_15px_30px_rgba(238,77,45,0.4)]">
                    <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
                    <span className="relative z-10">{product.button2Label || 'Shopee'}</span>
                  </a>
                ) : (
                  <div className="py-5 rounded-full bg-slate-50 text-center text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-inner">
                    <ShoppingBag size={18} /> Marketplace Off
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CTA FLOATING */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-2xl p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-[32px]">
        <div className="flex gap-4">
          {product.button1Url && (
            <a href={product.button1Url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-black text-[10px] tracking-widest uppercase shadow-[0_10px_20px_rgba(37,211,102,0.3)] active:scale-95 transition-transform">
              <MessageCircle size={18} /> WA
            </a>
          )}
          {product.button2Url && (
            <a href={product.button2Url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#EE4D2D] text-white py-4 rounded-full font-black text-[10px] tracking-widest uppercase shadow-[0_10px_20px_rgba(238,77,45,0.3)] active:scale-95 transition-transform">
              <ShoppingBag size={18} /> Beli
            </a>
          )}
        </div>
      </div>
    </div>
  );
};