import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

import ext1 from '../assets/exterior/IMG_1659.jpeg';
import ext2 from '../assets/exterior/IMG_1660.jpeg';
import ext3 from '../assets/exterior/IMG_1661.jpeg';
import ext4 from '../assets/exterior/IMG_1662.jpeg';
import ext5 from '../assets/exterior/IMG_1664.jpeg';

import int1 from '../assets/interior/IMG_1666.jpeg';
import int2 from '../assets/interior/IMG_1676.jpeg';

import seal1 from '../assets/sealing/IMG_1667.jpeg';
import seal2 from '../assets/sealing/IMG_1668.jpeg';
import seal3 from '../assets/sealing/IMG_1669.jpeg';
import seal4 from '../assets/sealing/IMG_1672.jpeg';
import seal5 from '../assets/sealing/IMG_1677.jpeg';

import com1 from '../assets/commercial/IMG_1663.jpeg';
import com2 from '../assets/commercial/IMG_1670.jpeg';
import com3 from '../assets/commercial/IMG_1671.jpeg';
import com4 from '../assets/commercial/IMG_1673.jpeg';
import com5 from '../assets/commercial/IMG_1674.jpeg';
import com6 from '../assets/commercial/IMG_1675.jpeg';
import com7 from '../assets/commercial/IMG_1678.jpeg';
import com8 from '../assets/commercial/IMG_1679.jpeg';

const PHONE_HREF = 'tel:8636701601';
const EMAIL_HREF = 'mailto:joshcranor@gmail.com';

const galleryItems = [
  { id: 1,  category: 'Exterior Residential', image: ext1,  label: 'Exterior — Lakeland Home' },
  { id: 2,  category: 'Exterior Residential', image: ext2,  label: 'Exterior — Two-Story Renovation' },
  { id: 3,  category: 'Interior Residential', image: int1,  label: 'Interior — Living Room' },
  { id: 4,  category: 'Exterior Residential', image: ext3,  label: 'Exterior — Stucco Home' },
  { id: 5,  category: 'Interior Residential', image: int2,  label: 'Interior — Master Bedroom' },
  { id: 6,  category: 'Commercial',           image: com1,  label: 'Commercial — Office Exterior' },
  { id: 7,  category: 'Paver Sealing',        image: seal1, label: 'Paver Sealing — Driveway' },
  { id: 8,  category: 'Exterior Residential', image: ext4,  label: 'Exterior — Ranch Home' },
  { id: 9,  category: 'Paver Sealing',        image: seal2, label: 'Paver Sealing — Pool Deck' },
  { id: 10, category: 'Commercial',           image: com2,  label: 'Commercial — Storefront' },
  { id: 11, category: 'Paver Sealing',        image: seal3, label: 'Paver Sealing — Patio' },
  { id: 12, category: 'Exterior Residential', image: ext5,  label: 'Exterior — Trim Detail' },
  { id: 13, category: 'Commercial',           image: com3,  label: 'Commercial — Warehouse' },
  { id: 14, category: 'Paver Sealing',        image: seal4, label: 'Paver Sealing — Walkway' },
  { id: 15, category: 'Commercial',           image: com4,  label: 'Commercial — Building Exterior' },
  { id: 16, category: 'Paver Sealing',        image: seal5, label: 'Paver Sealing — Driveway Refresh' },
  { id: 17, category: 'Commercial',           image: com5,  label: 'Commercial — Property Repaint' },
  { id: 18, category: 'Commercial',           image: com6,  label: 'Commercial — Retail Exterior' },
  { id: 19, category: 'Commercial',           image: com7,  label: 'Commercial — Multi-Unit' },
  { id: 20, category: 'Commercial',           image: com8,  label: 'Commercial — HOA Exterior' },
];

const FILTERS = ['All', 'Exterior Residential', 'Interior Residential', 'Commercial', 'Paver Sealing'];

export default function GalleryPage() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: '6rem' }}>
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-4">
            <Link to="/" className="text-white hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gallery</span>
          </nav>
          <p className="section-label text-brand-light mb-3">Our Work</p>
          <h1 className="page-title mb-4">Project Gallery</h1>
          <p className="hero-subtitle max-w-xl">
            Browse completed painting and paver sealing projects throughout Lakeland and Polk County.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="container-site">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`btn btn--sm transition-all ${
                  active === f ? 'btn--primary' : 'btn--outline'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-brand-gray text-sm text-center mb-8">
            Showing <strong className="text-brand-navy">{filtered.length}</strong> projects
            {active !== 'All' ? ` in ${active}` : ''}
          </p>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item) => (
              <button
                key={item.id}
                className="group relative overflow-hidden cursor-pointer text-left w-full"
                style={{ borderRadius: '2px' }}
                style={{ aspectRatio: '4/3' }}
                onClick={() => setLightbox(item)}
                aria-label={`View ${item.label}`}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 px-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="text-white font-semibold text-sm text-center">{item.label}</p>
                  <span className="text-white/60 text-xs">{item.category}</span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-brand-navy text-xs font-bold px-2 py-1 rounded-pill">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* CTA below grid */}
          <div className="mt-16 text-center bg-brand-cream rounded-xl p-10">
            <h2 className="section-title mb-3">Like What You See?</h2>
            <p className="section-subtitle section-subtitle--center mb-6">
              Let's discuss your project. Get a free estimate — we serve all of Polk County.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={isMobile ? PHONE_HREF : EMAIL_HREF} className="btn btn--primary btn--lg">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Photo preview"
        >
          <div
            className="relative max-w-2xl w-full rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={lightbox.image}
              alt={lightbox.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
              <p className="text-white font-bold text-lg">{lightbox.label}</p>
              <p className="text-white/70 text-sm">{lightbox.category}</p>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-pill w-10 h-10 flex items-center justify-center text-xl"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}

    </>
  );
}
