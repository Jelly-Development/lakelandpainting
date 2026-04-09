import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import CtaBand from "../components/ui/CtaBand";
import LazyImage from "../components/ui/LazyImage";

const PHONE_HREF = "tel:8636701601";

// SVG icons for service cards
function HouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}
function DropIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}
function StarIcon() {
  return <span className="text-amber-400">★</span>;
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(42,95,143,0.12)" />
      <path
        d="M6 10l3 3 5-5"
        stroke="#2A5F8F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    icon: <HouseIcon />,
    label: "Most Popular",
    title: "Residential Painting",
    text: "Premium house painting for Central Florida homeowners. Thorough prep, clean application, and results that last — guaranteed.",
    to: "/services/residential",
  },
  {
    icon: <BuildingIcon />,
    label: "Commercial",
    title: "Commercial Painting",
    text: "First impressions matter. We paint offices, retail spaces, warehouses and more with minimal disruption to your business operations.",
    to: "/services/commercial",
  },
  {
    icon: <DropIcon />,
    label: "Specialty",
    title: "Paver Sealing",
    text: "Driveways, patios, and pool decks sealed to withstand Florida rain, UV, and mold. Restore beauty and protect your investment.",
    to: "/services/paver-sealing",
  },
];

const testimonials = [
  {
    name: "Jedidiah F.",
    stars: 5,
    text: "Josh uses high quality paint, pays attention to detail, and gets the work done quickly and efficiently. His work is long lasting and done the right way. He shows up when he says he will.",
  },
  {
    name: "Jared S.",
    stars: 5,
    text: "Not once did we feel like he didn't have our best interest in mind. It was very evident up front that he was going to make sure we were pleased with the results. We absolutely were!",
  },
  {
    name: "Richard H.",
    stars: 5,
    text: "He explained the different grades of paint. We selected the top grade and glad we did. It still looks freshly done two years later. Very professional, timely, and knowledgeable.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "5★", label: "Average Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function HomePage() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* SEO meta — in a real app use react-helmet */}
      {/* HERO */}
      <section className="hero" aria-label="Hero">
        {/* Background image (placeholder geometric) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(160deg, #1B3A5C 0%, #2A5F8F 55%, #3378B0 100%)",
          }}
          aria-hidden="true"
        />
        {/* Diagonal accent */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-10"
          style={{
            background:
              "linear-gradient(to bottom-left, rgba(255,255,255,0.15) 0%, transparent 70%)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          aria-hidden="true"
        />

        <div className="hero__content container-site w-full py-36 lg:pt-48 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <h1 className="hero-title mb-6 text-balance">
              Expert Painting &amp;
              <br />
              Paver Sealing in
              <br />
              <span className="text-brand-sky">Lakeland, FL</span>
            </h1>
            <p className="hero-subtitle mb-10 max-w-xl">
              Over 15 years serving Central Florida homeowners and businesses.
              Licensed, insured, and obsessed with quality. We answer the phone
              — even after hours.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={isMobile ? PHONE_HREF : 'mailto:joshcranor@gmail.com'}
                className="btn btn--white btn--lg"
              >
                {isMobile ? 'Call for a Quote' : 'Get a Quote'}
              </a>
            </div>
            {/* Trust signals */}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="container-site">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 py-1">
            {[
              "Serving Polk County Since 2009",
              "Locally Owned & Operated",
              "Free Estimates Within 24 Hours",
              "Premium Sherwin-Williams Paints",
            ].map((t, i) => (
              <span key={i} className="trust-bar__item">
                <span className="trust-bar__dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="section section--offwhite section--xs">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-4xl lg:text-5xl text-brand-blue mb-2">
                  {value}
                </div>
                <div className="text-brand-gray text-sm font-semibold uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="section-label justify-center">What We Do</p>
            <h2 className="section-title section-title--center">
              Painting &amp; Sealing Services
              <br />
              <span className="text-brand-blue">for Every Property</span>
            </h2>
            <div className="divider divider--center divider--lg mt-4" />
          </div>
          <div className="features-grid">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to={svc.to}
                className="card card--service group block"
              >
                <div className="card__body">
                  <div className="card__icon text-brand-blue mb-4 group-hover:scale-110 transition-transform duration-200">
                    {svc.icon}
                  </div>
                  <span className="card__label">{svc.label}</span>
                  <h3 className="card__title">{svc.title}</h3>
                  <p className="card__text">{svc.text}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-brand-blue text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--cream">
        <div className="container-site">
          <div className="split-layout">
            <div>
              <p className="section-label">Why Lakeland Painting?</p>
              <h2 className="section-title mb-4">
                More Than a Paint Job —<br />A Promise of Quality
              </h2>
              <div className="divider divider--left divider--lg mb-6" />
              <p className="text-brand-gray text-xl leading-relaxed mb-8">
                We're a small, owner-operated company — which means Josh
                personally oversees every project from estimate to final
                walkthrough. No subcontractors cutting corners.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Premium Sherwin-Williams and Benjamin Moore paints only",
                  "Thorough prep work — caulking, patching, and priming",
                  "Detailed protection of all surfaces not being painted",
                  "Full cleanup and final inspection before payment",
                  "After-hours availability — we answer when you call",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-brand-gray"
                  >
                    <CheckIcon /> <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={isMobile ? PHONE_HREF : 'mailto:joshcranor@gmail.com'}
                className="btn btn--primary btn--lg"
              >
                {isMobile ? 'Call for a Free Estimate' : 'Request a Free Estimate'}
              </a>
            </div>
            <div className="relative">
              <div
                className="rounded-xl overflow-hidden bg-brand-light"
                style={{
                  aspectRatio: "4/5",
                  background:
                    "linear-gradient(135deg, #A8CCDF 0%, #3378B0 100%)",
                }}
                aria-label="Painting professionals at work"
                role="img"
              >
                {/* Placeholder visual */}
                <div className="h-full flex flex-col items-center justify-center gap-4 text-white/50">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect
                      x="10"
                      y="20"
                      width="60"
                      height="45"
                      rx="4"
                      fill="rgba(255,255,255,0.15)"
                    />
                    <path
                      d="M20 55 L36 38 L46 48 L56 36 L68 55Z"
                      fill="rgba(255,255,255,0.2)"
                    />
                    <circle
                      cx="54"
                      cy="30"
                      r="8"
                      fill="rgba(255,255,255,0.25)"
                    />
                  </svg>
                  <span className="text-sm font-semibold uppercase tracking-widest">
                    Gallery Photo
                  </span>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-float"
                style={{ minWidth: "160px" }}
              >
                <div className="text-amber-400 text-lg mb-1">★★★★★</div>
                <div className="font-bold text-brand-navy text-sm">
                  5-Star Rated
                </div>
                <div className="text-brand-gray text-xs">on Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--blue-gradient">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label justify-center text-brand-light">Customer Reviews</p>
            <h2 className="section-title section-title--light section-title--center">
              What Our Clients Say
            </h2>
            <div className="divider divider--center mt-4" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card card--testimonial">
                <span className="card__stars">{"★".repeat(t.stars)}</span>
                <p className="card__quote">"{t.text}"</p>
                <span className="card__author">— {t.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=lakeland+painting+lakeland+fl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--md"
            >
              See All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
