import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PHONE = '863-670-1601';
const PHONE_HREF = 'tel:8636701601';

const services = [
  { label: 'Residential Painting', to: '/services/residential' },
  { label: 'Commercial Painting',  to: '/services/commercial' },
  { label: 'Paver Sealing',        to: '/services/paver-sealing' },
];

const areas = [
  'Lakeland','Kathleen','Bartow','Winter Haven',
  'Plant City','Mulberry','Lake Wales','Polk City',
].map(n => ({ label: n, to: `/${n.toLowerCase().replace(' ','-')}` }));

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.58.1.35.01.74-.25 1.02L6.6 10.8z" fill="currentColor"/>
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function DropdownMenu({ trigger, items }) {
  return (
    <div className="navbar__dropdown">
      <button className="navbar__dropdown-trigger">
        {trigger} <ChevronDown />
      </button>
      <div className="navbar__dropdown-menu">
        {items.map(item => (
          <Link key={item.to} to={item.to} className="navbar__dropdown-item">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container-site">
          <div className="navbar__inner">
            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <img
                src="/logo.webp"
                alt="Lakeland Painting Company"
                width="160"
                height="48"
                loading="eager"
              />
            </Link>

            {/* Desktop nav */}
            <div className="navbar__links">
              <Link to="/gallery"       className={`navbar__link${location.pathname==='/gallery'?' navbar__link--active':''}`}>Gallery</Link>
              <DropdownMenu trigger="Services"      items={services} />
              <DropdownMenu trigger="Service Areas" items={areas} />
              <Link to="/contact"       className={`navbar__link${location.pathname==='/contact'?' navbar__link--active':''}`}>Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className="navbar__cta">
              <a href={PHONE_HREF} className="navbar__phone">
                <PhoneIcon />{PHONE}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="navbar__mobile-btn"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-menu__header">
          <Link to="/" className="navbar__logo">
            <img src="/logo.webp" alt="Lakeland Painting Company" height="40" loading="lazy" />
          </Link>
          <button className="navbar__mobile-btn" onClick={() => setMobileOpen(false)}>
            <MenuIcon open />
          </button>
        </div>

        <div className="mobile-menu__body">
          <Link to="/"       className="mobile-menu__link">Home</Link>
          <Link to="/gallery" className="mobile-menu__link">Gallery</Link>
          <Link to="/contact" className="mobile-menu__link">Contact</Link>

          {/* Services accordion */}
          <div className="mobile-menu__section">
            <button
              className="mobile-menu__link w-full flex justify-between items-center"
              onClick={() => setMobileServicesOpen(v => !v)}
            >
              Services
              <ChevronDown />
            </button>
            {mobileServicesOpen && services.map(s => (
              <Link key={s.to} to={s.to} className="mobile-menu__sub-link">{s.label}</Link>
            ))}
          </div>

          {/* Areas accordion */}
          <div className="mobile-menu__section">
            <button
              className="mobile-menu__link w-full flex justify-between items-center"
              onClick={() => setMobileAreasOpen(v => !v)}
            >
              Service Areas
              <ChevronDown />
            </button>
            {mobileAreasOpen && areas.map(a => (
              <Link key={a.to} to={a.to} className="mobile-menu__sub-link">{a.label}</Link>
            ))}
          </div>
        </div>

        <div className="mobile-menu__footer">
          <a href={PHONE_HREF} className="btn btn--white btn--lg w-full text-center">
            Call for a Quote
          </a>
        </div>
      </div>
    </>
  );
}
