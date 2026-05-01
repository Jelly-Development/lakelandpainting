import { useParams, Link } from "react-router-dom";
import CtaBand from "../components/ui/CtaBand";
import { useIsMobile } from "../hooks/useIsMobile";

import extImg from "../assets/exterior/IMG_1659.jpeg";
import intImg from "../assets/interior/IMG_1666.jpeg";
import comExtImg from "../assets/commercial/IMG_1663.jpeg";
import sealResImg from "../assets/sealing/IMG_1667.jpeg";

const PHONE_HREF = "tel:8636701601";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0 }}
    >
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

const serviceData = {
  residential: {
    slug: "residential",
    label: "Residential Painting",
    headline: "Expert Residential Painting in Lakeland, FL",
    subhead:
      "Your home is your biggest investment. Lakeland Painting Company protects and beautifies it with premium paints and meticulous craftsmanship — inside and out.",
    seoDescription:
      "Looking for a residential painter in Lakeland, FL? Lakeland Painting Company has served homeowners across Polk County for over 15 years. Call 863-670-1601 for a free estimate.",
    services: [
      {
        tag: "Exterior",
        image: extImg,
        title: "Exterior Residential Painting",
        body: "Florida's intense sun, humidity, and afternoon storms punish exterior paint faster than almost anywhere in the country. Our exterior process starts with thorough power washing, surface repair, caulking of all gaps and cracks, and priming of bare wood and masonry. We then liberally apply high-quality paints formulated to resist mold, fade, and moisture — protecting your home for years to come.",
        bullets: [
          "Power washing and complete surface prep",
          "Caulking, patching, and priming",
          "High-quality paints applied liberally for lasting protection",
          "Fascia, soffits, doors, and trim included",
          "Mold-resistant formulas for Florida climate",
        ],
      },
      {
        tag: "Interior",
        image: intImg,
        title: "Interior Residential Painting",
        body: "A fresh coat of interior paint can completely transform the feel of your home. We take extra care to protect your furniture, floors, and fixtures with drop cloths and masking before our painters ever open a can. We cut crisp, clean lines at every ceiling, trim, and corner — no sloppy edges. We apply 2 coats as necessary for full, even coverage, then leave your home spotless at project close.",
        bullets: [
          "Complete furniture and floor protection",
          "Ceiling, walls, trim, and doors painted",
          "2 coats applied as necessary for full coverage",
          "Premium low-VOC interior paints available",
          "Final walkthrough and touch-up included",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Free Estimate",
        text: "We visit your property, assess the scope, and provide a detailed written quote — no surprises.",
      },
      {
        step: "02",
        title: "Prep & Protect",
        text: "Power washing, sanding, caulking, patching, priming, and full protection of unpainted surfaces.",
      },
      {
        step: "03",
        title: "Expert Application",
        text: "Premium paint applied thoroughly for a durable, lasting finish.",
      },
      {
        step: "04",
        title: "Final Walkthrough",
        text: "We inspect every inch with you. You don't pay until you're 100% satisfied.",
      },
    ],
  },

  commercial: {
    slug: "commercial",
    label: "Commercial Painting",
    headline: "Commercial Painting Services in Lakeland, FL",
    subhead:
      "Your building's appearance reflects your brand. We deliver professional commercial painting with minimal disruption — on time and on budget.",
    seoDescription:
      "Need a commercial painter in Lakeland or Polk County? We handle offices, retail, warehouses, and HOAs. Call 863-670-1601 for a free commercial estimate.",
    services: [
      {
        tag: "Commercial Painting",
        image: comExtImg,
        title: "Commercial Painting Services",
        body: "A well-maintained property communicates professionalism and attracts customers. We work with property managers, business owners, and HOAs on everything from storefront exteriors to interior office spaces. Our team works efficiently and can schedule work in phases to minimize disruption to your operations. Commercial-grade coatings, clean job sites, and a detailed scope upfront every time.",
        bullets: [
          "Storefronts, offices, warehouses, and multi-unit buildings",
          "Interior and exterior commercial painting",
          "HOA and property management partnerships",
          "Low-odor and zero-VOC paint options",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Assessment",
        text: "We evaluate the property, discuss scope and timeline, and deliver a detailed written proposal.",
      },
      {
        step: "02",
        title: "Scheduling",
        text: "We coordinate with your team to minimize disruption to business operations.",
      },
      {
        step: "03",
        title: "Prep & Paint",
        text: "Professional surface preparation and premium commercial coating application.",
      },
      {
        step: "04",
        title: "Sign-Off",
        text: "Final walkthrough with your property manager or owner. No payment until complete.",
      },
    ],
  },

  "paver-sealing": {
    slug: "paver-sealing",
    label: "Paver Sealing",
    headline: "Professional Paver Sealing in Lakeland, FL",
    subhead:
      "Protect your driveway, pool deck, or patio from Florida's heat, rain, and mold. Our paver sealing enhances color, repels stains, and extends the life of your investment.",
    seoDescription:
      "Paver sealing in Lakeland, FL and Polk County. We seal driveways, pool decks, and patios with commercial-grade sealers. Call 863-670-1601 for a free estimate.",
    services: [
      {
        tag: "Paver Sealing",
        image: sealResImg,
        title: "Professional Paver Sealing",
        body: "Unsealed pavers absorb oil, moisture, and organic material — leading to stains, shifting, and weed growth. Our paver sealing process starts with a thorough power wash to remove all dirt, mold, and efflorescence. We then re-joint with high-quality sand made specifically for pavers where needed, and finish with a high-quality sealer that enhances the natural color of your pavers while creating a protective barrier against Florida's elements. We handle everything from residential driveways to large HOA communities.",
        bullets: [
          "Driveways, patios, walkways, and pool decks",
          "Deep power washing",
          "Sand re-jointing where needed",
          "Wet-look or natural-matte sealer options",
          "Residential, commercial, and HOA properties",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Free Estimate",
        text: "We assess your pavers, identify problem areas, and provide an honest written quote.",
      },
      {
        step: "02",
        title: "Power Washing",
        text: "High-pressure wash removes all mold, dirt, and loose material from the surface.",
      },
      {
        step: "03",
        title: "Sand & Prep",
        text: "Re-joint with high-quality sand made specifically for pavers where needed before sealing.",
      },
      {
        step: "04",
        title: "Seal & Protect",
        text: "Professional-grade sealer applied evenly for lasting protection and enhanced appearance.",
      },
    ],
  },
};

const EMAIL_HREF = "mailto:joshcranor@gmail.com";

export default function ServicesPage() {
  const isMobile = useIsMobile();
  const { service } = useParams();
  const data = serviceData[service] || serviceData.residential;

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ paddingTop: "6rem" }}>
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-4">
            <Link to="/" className="text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{data.label}</span>
          </nav>
          <p className="section-label text-brand-light mb-3">{data.label}</p>
          <h1 className="page-title text-balance mb-4">{data.headline}</h1>
          <p className="hero-subtitle max-w-2xl">{data.subhead}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={isMobile ? PHONE_HREF : EMAIL_HREF}
              className="btn btn--white btn--md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Sections */}
      {data.services.map((svc, idx) => (
        <section
          key={svc.title}
          className={`section ${idx % 2 === 1 ? "section--cream" : ""}`}
        >
          <div className="container-site">
            <div
              className={`split-layout ${idx % 2 === 1 ? "split-layout--reversed" : ""}`}
            >
              {/* Text */}
              <div>
                <p className="section-label">{svc.tag}</p>
                <h2 className="section-title mb-4">{svc.title}</h2>{" "}
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                  {svc.body}
                </p>
                <ul className="space-y-3 mb-8">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-brand-dark"
                    >
                      <CheckIcon />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={isMobile ? PHONE_HREF : EMAIL_HREF}
                  className="btn btn--primary btn--md"
                >
                  Get Started
                </a>
              </div>
              {/* Service photo */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section section--navy">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label justify-center text-brand-light">
              Our Process
            </p>
            <h2 className="section-title section-title--light section-title--center">
              How It Works
            </h2>{" "}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map(({ step, title, text }) => (
              <div
                key={step}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="font-display text-4xl font-bold text-brand-sky/40 mb-3">
                  {step}
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  {title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services links */}
      <section className="section section--offwhite">
        <div className="container-site">
          <h2 className="section-title section-title--center mb-10">
            Explore Our Other Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {Object.values(serviceData)
              .filter((s) => s.slug !== data.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="card card--flat p-6 text-center hover:border-brand-blue group"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="font-display font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-blue transition-colors">
                    {s.label}
                  </div>
                  <div className="text-brand-sky text-sm font-semibold">
                    Learn More →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to Get Started with ${data.label}?`}
        subtitle="Call us today for a free, no-obligation estimate. We serve all of Polk County."
      />
    </>
  );
}
