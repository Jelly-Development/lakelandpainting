import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBand from '../components/ui/CtaBand';

const PHONE_HREF = 'tel:8636701601';
const PHONE = '863-670-1601';

// Gallery items with color-coded placeholder swatches
const galleryItems = [
  { id: 1,  category: 'Exterior Residential', color: '#2A5F8F', label: 'Exterior — Lakeland Home' },
  { id: 2,  category: 'Exterior Residential', color: '#1B3A5C', label: 'Exterior — Two-Story Renovation' },
  { id: 3,  category: 'Interior Residential', color: '#5A9AC9', label: 'Interior — Living Room' },
  { id: 4,  category: 'Exterior Residential', color: '#3378B0', label: 'Exterior — Stucco Home' },
  { id: 5,  category: 'Interior Residential', color: '#A8CCDF', label: 'Interior — Master Bedroom' },
  { id: 6,  category: 'Commercial',           color: '#2A5F8F', label: 'Commercial — Office Exterior' },
  { id: 7,  category: 'Paver Sealing',        color: '#6B7280', label: 'Paver Sealing — Driveway' },
  { id: 8,  category: 'Exterior Residential', color: '#1B3A5C', label: 'Exterior — Ranch Home' },
  { id: 9,  category: 'Interior Residential', color: '#3378B0', label: 'Interior — Kitchen' },
  { id: 10, category: 'Paver Sealing',        color: '#888880', label: 'Paver Sealing — Pool Deck' },
  { id: 11, category: 'Commercial',           color: '#2A5F8F', label: 'Commercial — Storefront' },
  { id: 12, category: 'Exterior Residential', color: '#5A9AC9', label: 'Exterior — Trim Detail' },
  { id: 13, category: 'Interior Residential', color: '#A8CCDF', label: 'Interior — Dining Room' },
  { id: 14, category: 'Paver Sealing',        color: '#6B7280', label: 'Paver Sealing — Patio' },
  { id: 15, category: 'Exterior Residential', color: '#3378B0', label: 'Exterior — Modern Home' },
  { id: 16, category: 'Commercial',           color: '#1B3A5C', label: 'Commercial — Warehouse' },
];

const FILTERS = ['All', 'Exterior Residential', 'Interior Residential', 'Commercial', 'Paver Sealing'];

export default function GalleryPage() {
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
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
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
                className="group relative rounded-lg overflow-hidden cursor-pointer text-left w-full"
                style={{ aspectRatio: '4/3' }}
                onClick={() => setLightbox(item)}
                aria-label={`View ${item.label}`}
              >
                {/* Color placeholder */}
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${item.color}cc 0%, ${item.color} 100%)` }}
                >
                  <div className="h-full flex flex-col items-center justify-center gap-3 text-white/40">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="6" y="12" width="36" height="28" rx="3" fill="rgba(255,255,255,0.15)" />
                      <path d="M12 34 L22 23 L28 29 L34 21 L42 34Z" fill="rgba(255,255,255,0.2)" />
                      <circle cx="33" cy="17" r="5" fill="rgba(255,255,255,0.25)" />
                    </svg>
                  </div>
                </div>
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
              Let's discuss your project. Call for a free estimate — we serve all of Polk County.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={PHONE_HREF} className="btn btn--primary btn--lg">📞 Call {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple lightbox */}
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
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-4"
              style={{ background: `linear-gradient(135deg, ${lightbox.color}cc 0%, ${lightbox.color} 100%)` }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="10" y="20" width="60" height="45" rx="4" fill="rgba(255,255,255,0.15)" />
                <path d="M20 55 L36 38 L46 48 L56 36 L68 55Z" fill="rgba(255,255,255,0.2)" />
                <circle cx="54" cy="30" r="8" fill="rgba(255,255,255,0.25)" />
              </svg>
              <p className="text-white font-bold text-lg">{lightbox.label}</p>
              <p className="text-white/60 text-sm">{lightbox.category}</p>
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

      <CtaBand />
    </>
  );
}
