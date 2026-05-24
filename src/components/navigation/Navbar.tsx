/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicApi } from '../../services/publicApi';
import { Globe, Menu, X, ChevronDown, Megaphone } from 'lucide-react';

interface SubNavItem {
  label: string;
  url: string;
}

interface DynamicNavItemObj {
  id: string;
  label: string;
  url: string;
  subMenus: SubNavItem[];
}

export const Navbar: React.FC = () => {
  const [navTree, setNavTree] = useState<DynamicNavItemObj[]>([]);
  const [siteOptions, setSiteOptions] = useState<Record<string, string>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<any>({});
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState<'ID' | 'EN'>('ID');
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const [topbarLinks, setTopbarLinks] = useState<{label: string, url: string}[]>([
    { label: 'Portal Kab. Sumedang', url: '#' },
    { label: 'Kemendesa PDTT', url: '#' },
    { label: 'Layanan Pengaduan', url: '#' }
  ]);

  const getBackendImageUrl = (pathString: string) => {
    if (!pathString) return '';
    if (pathString.startsWith('http')) return pathString;
    const backendOrigin = (import.meta.env.VITE_API_URL || "http://localhost:8000/api").replace(/\/api$/, "");
    return `${backendOrigin}${pathString}`;
  };

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/id\/(en|id)/);
    if (match && match[1] === 'en') {
      setActiveLang('EN');
    } else {
      setActiveLang('ID');
    }

    publicApi.get('/settings').then(res => {
      const data = res.data?.data || {};
      setSiteOptions(data);

      if (data.public_navbar_structure) {
        try {
          const parsed = JSON.parse(data.public_navbar_structure);
          if (Array.isArray(parsed)) setNavTree(parsed);
        } catch (err) {
          console.error("Gagal mem-parse hierarki menu bertingkat:", err);
        }
      }

      if (data.topbar_links) {
        try {
          const parsedTopbar = JSON.parse(data.topbar_links);
          if (Array.isArray(parsedTopbar) && parsedTopbar.length > 0) {
            setTopbarLinks(parsedTopbar);
          }
        } catch (err) {
          console.error("Gagal mem-parse topbar links:", err);
        }
      }
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (lang: 'id' | 'en') => {
    document.cookie = `googtrans=/id/${lang}; path=/`;
    document.cookie = `googtrans=/id/${lang}; domain=${window.location.hostname}; path=/`;
    window.location.reload();
  };

  const toggleMobileDropdown = (id: string) => {
    setOpenMobileDropdowns((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  const siteTitle = siteOptions.site_title || 'DESA CITALI';
  const siteTagline = siteOptions.site_tagline || 'Kec. Pamulihan, Kab. Sumedang';
  const logoUrl = siteOptions.site_logo;

  const annActive = siteOptions.announcement_active === 'true';
  const annText = siteOptions.announcement_text || '';
  const annUrl = siteOptions.announcement_url || '#';
  
  const rightTopbarLabel = siteOptions.topbar_right_label || 'Layanan Mandiri';
  const rightTopbarUrl = siteOptions.topbar_right_url || '/p/layanan-mandiri';

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col font-sans select-none">
      
      {/* ===================================================================== */}
      {/* LAPIS 1: STRIPE ATAS (BANNER PENGUMUMAN) - TEMA HIJAU TUA */}
      {/* ===================================================================== */}
      {annActive && isBannerVisible && (
        <div className="w-full bg-green-950 text-white shadow-md transition-all duration-300 ease-in-out relative z-20">
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-center text-xs font-semibold tracking-wide relative">
            <div className="flex items-center gap-2.5 truncate">
              <Megaphone size={14} className="text-green-300 flex-shrink-0 animate-pulse" />
              <span className="truncate">{annText}</span>
              {annUrl.startsWith('http') ? (
                <a href={annUrl} target="_blank" rel="noreferrer" className="underline font-bold text-green-300 hover:text-white transition-colors flex-shrink-0">Tinjau Detail</a>
              ) : (
                <Link to={annUrl} className="underline font-bold text-green-300 hover:text-white transition-colors flex-shrink-0">Tinjau Detail</Link>
              )}
            </div>
            <button onClick={() => setIsBannerVisible(false)} className="absolute right-6 p-1 hover:bg-white/20 rounded-md transition-colors text-white" title="Tutup">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* LAPIS 2: BAR TAJUK (Tanpa Border) */}
      {/* ===================================================================== */}
      <div 
        className={`hidden md:block w-full transition-colors duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm text-green-950' 
            : 'bg-transparent text-white/90'
        }`}
      >
        <div className="max-w-[95%] xl:max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-[11px] font-bold tracking-wider">
          
          <div className="flex items-center gap-6">
            {topbarLinks.map((item, idx) => {
              const isExternal = item.url.startsWith('http');
              const linkClass = `flex items-center gap-1.5 transition-colors ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`;
              
              return isExternal ? (
                <a key={idx} href={item.url} target="_blank" rel="noreferrer" className={linkClass}>
                  {item.label}
                </a>
              ) : (
                <Link key={idx} to={item.url} className={linkClass}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            {rightTopbarUrl.startsWith('http') ? (
              <a href={rightTopbarUrl} target="_blank" rel="noreferrer" className={`transition-colors flex items-center gap-2 ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>
                {rightTopbarLabel}
              </a>
            ) : (
              <Link to={rightTopbarUrl} className={`transition-colors flex items-center gap-2 ${isScrolled ? 'hover:text-green-600' : 'hover:text-green-300'}`}>
                {rightTopbarLabel}
              </Link>
            )}

            {/* Pemisah Dot Sebagai Pengganti Border */}
            <span className={`w-1 h-1 rounded-full ${isScrolled ? 'bg-green-200' : 'bg-white/30'}`}></span>

            <div className="flex items-center gap-1.5 group relative cursor-pointer py-1">
              <span className="text-xs">{activeLang === 'ID' ? '🇮🇩' : '🇬🇧'}</span>
              <span className={`font-bold transition-colors ${isScrolled ? 'group-hover:text-green-600' : 'group-hover:text-green-300'}`}>
                {activeLang === 'ID' ? 'ID' : 'EN'}
              </span>
              <ChevronDown size={12} className={`transition-transform duration-200 group-hover:rotate-180 ${isScrolled ? 'text-green-950 group-hover:text-green-600' : 'text-white/70 group-hover:text-green-300'}`} />
              
              <div className="absolute top-full right-0 w-32 bg-white rounded-2xl shadow-xl p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 text-green-950 mt-2">
                <button onClick={() => switchLanguage('id')} className={`w-full text-left px-3 py-2.5 rounded-xl text-[10px] font-bold flex items-center gap-2 transition-colors ${activeLang === 'ID' ? 'bg-green-50 text-green-700' : 'hover:bg-green-50'}`}>🇮🇩 Indonesia</button>
                <button onClick={() => switchLanguage('en')} className={`w-full text-left px-3 py-2.5 rounded-xl text-[10px] font-bold flex items-center gap-2 transition-colors ${activeLang === 'EN' ? 'bg-green-50 text-green-700' : 'hover:bg-green-50'}`}>🇬🇧 English</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* LAPIS 3: BAR UTAMA */}
      {/* ===================================================================== */}
      <div className={`w-full transition-all duration-500 ease-in-out ${isScrolled ? 'px-4 pt-4' : 'px-0 pt-0'}`}>
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'max-w-[95%] xl:max-w-6xl bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl h-[72px] px-8' 
              : 'max-w-[95%] xl:max-w-7xl h-24 px-6 bg-transparent'
          }`}
        >
          {/* Logo & Judul */}
          <Link to="/" className="flex items-center gap-4 group flex-shrink-0">
            {logoUrl ? (
              <img src={getBackendImageUrl(logoUrl)} alt={siteTitle} className="h-12 w-auto object-contain max-w-[140px] transition-transform duration-300 group-hover:scale-105" />
            ) : (
              <div className={`p-3 rounded-xl transition-all duration-300 shadow-sm ${isScrolled ? 'bg-green-900 text-white shadow-lg' : 'bg-white text-green-950 group-hover:shadow-lg'}`}>
                <Globe size={20} />
              </div>
            )}
            <div className="flex flex-col pl-2">
              <span className={`font-black tracking-tight text-lg sm:text-xl block leading-none transition-colors duration-300 truncate max-w-[220px] ${isScrolled ? 'text-green-950 group-hover:text-green-700' : 'text-white group-hover:text-green-300'}`}>
                {siteTitle}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-widest block mt-1.5 truncate max-w-[220px] transition-colors duration-300 ${isScrolled ? 'text-green-700' : 'text-white/80'}`}>
                {siteTagline}
              </span>
            </div>
          </Link>

          {/* Menu Utama */}
          <nav className="hidden md:flex items-center justify-end flex-1 pr-8 gap-8 ml-10">
            {navTree.length > 0 ? (
              navTree.map(item => {
                const hasSub = Array.isArray(item.subMenus) && item.subMenus.length > 0;
                const linkStyle = `text-[11px] font-bold uppercase tracking-widest cursor-pointer flex items-center gap-1.5 transition-colors duration-200 ${isScrolled ? 'text-green-950 hover:text-green-600' : 'text-white/95 hover:text-green-300'}`;

                if (hasSub) {
                  return (
                    <div key={item.id} className="relative group py-6">
                      <span className={linkStyle}>
                        {item.label} <ChevronDown size={12} className={`transition-transform duration-300 group-hover:rotate-180 ${isScrolled ? 'text-green-600' : 'text-white/60'}`} />
                      </span>

                      {/* Dropdown Bertema Primary Putih */}
                      <div className="absolute top-[80%] left-0 w-60 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-2.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 text-green-950">
                        {item.subMenus.map((sub, sIdx) => {
                          const isExt = sub.url.startsWith('http');
                          const dropLinkStyle = "block px-4 py-3.5 text-[11px] font-bold text-green-900 hover:text-green-700 hover:bg-green-50/80 rounded-xl transition-all truncate";
                          if (isExt) return <a key={sIdx} href={sub.url} target="_blank" rel="noreferrer" className={dropLinkStyle}>{sub.label} ↗</a>;
                          return <Link key={sIdx} to={sub.url} className={dropLinkStyle}>{sub.label}</Link>;
                        })}
                      </div>
                    </div>
                  );
                }
                const isExt = item.url.startsWith('http');
                if (isExt) return <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className={linkStyle}>{item.label} ↗</a>;
                return <Link key={item.id} to={item.url} className={linkStyle}>{item.label}</Link>;
              })
            ) : (
              <Link to="/" className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-green-950 hover:text-green-600' : 'text-white hover:text-green-300'}`}>Beranda</Link>
            )}
          </nav>

          {/* Tombol Aksi Kanan */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* <button onClick={() => alert("Membuka Pencarian Terpadu Citali...")} className={`p-3 rounded-2xl transition-all shadow-sm ${isScrolled ? 'bg-green-50 text-green-900 hover:bg-green-900 hover:text-white' : 'bg-white text-green-950 hover:bg-green-50'}`} title="Cari Informasi">
              <Search size={16} strokeWidth={2.5} />
            </button> */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-3 rounded-2xl md:hidden transition-all shadow-sm ${isScrolled ? 'bg-green-50 text-green-900 hover:bg-green-900 hover:text-white' : 'bg-white text-green-950 hover:bg-green-50'}`}>
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- LACI SELULER TEMA PRIMARY PUTIH --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto text-green-950 shadow-2xl rounded-b-3xl">
          
          <div className="flex items-center justify-between sm:hidden pb-2">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Pilihan Bahasa</span>
            <div className="flex gap-2">
              <button onClick={() => switchLanguage('id')} className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-all shadow-sm ${activeLang === 'ID' ? 'bg-green-900 text-white' : 'bg-green-50 text-green-800'}`}>🇮🇩 ID</button>
              <button onClick={() => switchLanguage('en')} className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-all shadow-sm ${activeLang === 'EN' ? 'bg-green-900 text-white' : 'bg-green-50 text-green-800'}`}>🇬🇧 EN</button>
            </div>
          </div>
          
          <div className="space-y-4">
             <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest block">Tautan Cepat</span>
             <div className="grid grid-cols-1 gap-4 bg-green-50/50 p-5 rounded-2xl">
               {topbarLinks.map((item, idx) => (
                 <a key={idx} href={item.url} className="text-xs font-bold text-green-900 hover:text-green-600 block truncate">{item.label}</a>
               ))}
               <Link to={rightTopbarUrl} className="text-xs font-bold text-green-900 hover:text-green-600 block truncate">{rightTopbarLabel}</Link>
             </div>
          </div>

          <div className="pt-2 space-y-3">
            {navTree.map(item => {
              const hasSub = Array.isArray(item.subMenus) && item.subMenus.length > 0;
              const isOpen = !!openMobileDropdowns[item.id];
              if (hasSub) {
                return (
                  <div key={item.id} className="space-y-2 bg-white rounded-2xl p-1">
                    <button onClick={() => toggleMobileDropdown(item.id)} className="flex items-center justify-between w-full p-3 rounded-xl text-left font-black text-xs text-green-950 uppercase tracking-wide hover:bg-green-50 transition-colors">
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-green-700' : 'text-green-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-2 ml-2 pt-1 pb-3 animate-in fade-in duration-200 relative before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-green-100 before:rounded-full">
                        {item.subMenus.map((sub, sIdx) => {
                          const isExt = sub.url.startsWith('http');
                          if (isExt) return <a key={sIdx} href={sub.url} target="_blank" rel="noreferrer" className="block text-xs font-bold text-green-800 hover:text-green-600 hover:bg-green-50 p-2.5 rounded-lg transition-colors">{sub.label} ↗</a>;
                          return <Link key={sIdx} onClick={() => setIsMobileMenuOpen(false)} to={sub.url} className="block text-xs font-bold text-green-800 hover:text-green-600 hover:bg-green-50 p-2.5 rounded-lg transition-colors">{sub.label}</Link>;
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const isExt = item.url.startsWith('http');
              if (isExt) return <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="block p-3 rounded-xl text-xs font-black text-green-950 uppercase tracking-wide hover:bg-green-50 transition-colors">{item.label} ↗</a>;
              return <Link key={item.id} onClick={() => setIsMobileMenuOpen(false)} to={item.url} className="block p-3 rounded-xl text-xs font-black text-green-950 uppercase tracking-wide hover:bg-green-50 transition-colors">{item.label}</Link>;
            })}
          </div>
        </div>
      )}
    </header>
  );
};