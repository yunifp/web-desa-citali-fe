import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicApi } from '../../services/publicApi';
import {
  Globe,
  Share2,
  Link2,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const Footer: React.FC = () => {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [footerColumns, setFooterColumns] = useState<FooterColumn[]>([]);

  const getBackendImageUrl = (pathString: string) => {
    if (!pathString) return '';
    if (pathString.startsWith('http')) return pathString;

    const backendOrigin = (
      import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
    ).replace(/\/api$/, '');

    return `${backendOrigin}${pathString}`;
  };

  useEffect(() => {
    publicApi.get('/settings').then((res) => {
      const data = res.data?.data || {};

      setOptions(data);

      if (data.footer_columns) {
        try {
          const parsed = JSON.parse(data.footer_columns);

          if (Array.isArray(parsed)) {
            setFooterColumns(parsed);
          }
        } catch (err) {
          console.error('Gagal mem-parse JSON kolom footer:', err);
        }
      }
    });
  }, []);

  const siteTitle =
    options.site_title || 'PEMERINTAH DESA CITALI';

  const footerDesc =
    options.site_footer_desc ||
    'Website Resmi Pemerintah Desa Citali, Kecamatan Pamulihan, Kabupaten Sumedang. Mewujudkan pelayanan publik yang transparan, inovatif, dan berkeadilan untuk seluruh lapisan masyarakat.';

  const email =
    options.site_email || 'pemdes@citali.desa.id';

  const phone =
    options.site_phone || '+62 811-0000-0000';

  const address =
    options.site_address ||
    'Jl. Raya Citali, Pamulihan, Sumedang, Jawa Barat, Indonesia';

  const targetLogoUrl =
    options.site_footer_logo || options.site_logo;

  return (
    <footer className="relative overflow-hidden bg-[#052e2b] text-white pt-24 pb-12 font-sans">
      
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 pb-16">

        {/* LEFT */}
        <div className="md:col-span-4 space-y-8 flex flex-col items-start">
          
          <Link
            to="/"
            className="flex items-center gap-4 group w-fit"
          >
            {targetLogoUrl ? (
              <img
                src={getBackendImageUrl(targetLogoUrl)}
                alt={siteTitle}
                className="h-14 w-auto object-contain max-w-[220px]"
              />
            ) : (
              <>
                <div className="p-3.5 bg-white/10 border border-white/10 backdrop-blur-xl text-white rounded-2xl shadow-2xl">
                  <Globe size={26} />
                </div>

                <span className="font-black tracking-tight text-xl uppercase text-white leading-tight">
                  {siteTitle}
                </span>
              </>
            )}
          </Link>

          <p className="text-white/70 text-sm leading-loose font-medium">
            {footerDesc}
          </p>

          {/* Social */}
          <div className="flex flex-wrap items-center gap-4 pt-2">

            {options.social_facebook && (
              <a
                href={options.social_facebook}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="p-3 bg-white/10 border border-white/10 text-white hover:bg-white hover:text-[#052e2b] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl"
              >
                <Share2 size={18} />
              </a>
            )}

            {options.social_instagram && (
              <a
                href={options.social_instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="p-3 bg-white/10 border border-white/10 text-white hover:bg-white hover:text-[#052e2b] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl"
              >
                <Link2 size={18} />
              </a>
            )}

            {options.social_linkedin && (
              <a
                href={options.social_linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-3 bg-white/10 border border-white/10 text-white hover:bg-white hover:text-[#052e2b] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl"
              >
                <Share2 size={18} />
              </a>
            )}
          </div>
        </div>

        {/* CENTER */}
        <div className="md:col-span-5 grid grid-cols-2 gap-10 md:pl-10">
          
          {footerColumns.length > 0 ? (
            footerColumns.map((col, idx) => (
              <div key={idx} className="space-y-7">

                <span className="text-[11px] font-black text-white uppercase tracking-[0.25em] block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-emerald-400 after:rounded-full">
                  {col.title}
                </span>

                <ul className="space-y-4 text-sm font-semibold text-white/75">

                  {col.links.map((link, lIdx) => {
                    const isExternal =
                      link.url.startsWith('http');

                    if (isExternal) {
                      return (
                        <li key={lIdx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                          >
                            {link.label} ↗
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={lIdx}>
                        <Link
                          to={link.url}
                          className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          ) : (
            <div className="space-y-7">

              <span className="text-[11px] font-black text-white uppercase tracking-[0.25em] block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-emerald-400 after:rounded-full">
                Informasi Publik
              </span>

              <ul className="space-y-4 text-sm font-semibold text-white/75">

                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                  >
                    Beranda Portal
                  </Link>
                </li>

                <li>
                  <Link
                    to="/p/profil-desa"
                    className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                  >
                    Profil Pemerintahan
                  </Link>
                </li>

                <li>
                  <Link
                    to="/p/lembaga"
                    className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                  >
                    Lembaga Desa
                  </Link>
                </li>

                <li>
                  <Link
                    to="/p/transparansi"
                    className="hover:text-white transition-all duration-300 block hover:translate-x-1.5"
                  >
                    Transparansi Dana
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3 space-y-7">

          <span className="text-[11px] font-black text-white uppercase tracking-[0.25em] block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-[3px] after:bg-emerald-400 after:rounded-full">
            Pusat Bantuan
          </span>

          <div className="space-y-4 text-sm text-white font-semibold">

            {address && (
              <div className="flex items-start gap-4 leading-relaxed bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-xl">
                
                <div className="p-3 bg-white/10 rounded-2xl flex-shrink-0 text-emerald-300">
                  <MapPin size={18} />
                </div>

                <span className="text-white/75 mt-1">
                  {address}
                </span>
              </div>
            )}

            {phone && (
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-xl">
                
                <div className="p-3 bg-white/10 rounded-2xl flex-shrink-0 text-emerald-300">
                  <Phone size={16} />
                </div>

                <span className="font-mono text-base tracking-wide text-white/80">
                  {phone}
                </span>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl shadow-xl">
                
                <div className="p-3 bg-white/10 rounded-2xl flex-shrink-0 text-emerald-300">
                  <Mail size={16} />
                </div>

                <span className="text-white/80 hover:text-white truncate transition-colors cursor-pointer">
                  {email}
                </span>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-white/40 uppercase tracking-[0.25em]">

        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="normal-case tracking-normal text-center md:text-left text-white/50">
          &copy; {new Date().getFullYear()} {siteTitle}. Hak Cipta Dilindungi.
        </p>

        <div className="flex gap-8">

          <Link
            to="/p/syarat-ketentuan"
            className="hover:text-white transition-colors"
          >
            Syarat & Ketentuan
          </Link>

          <Link
            to="/p/kebijakan-privasi"
            className="hover:text-white transition-colors"
          >
            Kebijakan Privasi
          </Link>

        </div>
      </div>
    </footer>
  );
};