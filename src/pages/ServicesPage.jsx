import { useParams, Link } from "react-router-dom";
import CtaBand from "../components/ui/CtaBand";
import { useIsMobile } from "../hooks/useIsMobile";

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
        tag: "Bread & Butter",
        title: "Exterior Residential Painting",
        body: "Florida's intense sun, humidity, and afternoon storms punish exterior paint faster than almost anywhere in the country. Our exterior process starts with thorough power washing, surface repair, caulking of all gaps and cracks, and priming of bare wood and masonry before a single drop of finish coat is applied. We use premium paints formulated to resist mold, fade, and moisture in Central Florida's climate. The result is a finish that looks great for years, not months.",
        bullets: [
          "Power washing and complete surface prep",
          "Caulking, patching, and priming",
          `Premium exterior paints for Florida's climate`,
          "Fascia, soffits, doors, and trim included",
          "Mold-resistant formulas for Florida climate",
        ],
      },
      {
        tag: "Interior",
        title: "Interior Residential Painting",
        body: "A fresh coat of interior paint can completely transform the feel of your home. We take extra care to protect your furniture, floors, and fixtures with drop cloths and masking before our painters ever open a can. We cut crisp, clean lines at every ceiling, trim, and corner — no sloppy edges. We work efficiently and respect your home throughout the process, leaving it spotless at project close.",
        bullets: [
          "Complete furniture and floor protection",
          "Ceiling, walls, trim, and doors painted",
          "Premium low-VOC interior paints available",
          "Smooth application on all wall textures",
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
        text: "Two or more coats of premium paint applied to manufacturer specifications for a lasting finish.",
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
        tag: "Exterior Commercial",
        title: "Exterior Commercial Painting",
        body: "A well-maintained exterior communicates professionalism and attracts customers. We work with property managers, business owners, and HOAs to repaint storefronts, office buildings, warehouses, and multi-unit properties. Our commercial exterior process includes all surface prep, masonry sealing, and application of durable commercial-grade coatings designed for heavy UV exposure.",
        bullets: [
          "Storefront, office, and warehouse exteriors",
          "HOA and multi-unit residential buildings",
          "Commercial-grade coatings and masonry sealers",
          "Flexible scheduling — evenings and weekends available",
          "Detailed scope and timeline provided upfront",
        ],
      },
      {
        tag: "Interior Commercial",
        title: "Interior Commercial Painting",
        body: "We understand that downtime costs your business money. Our team works efficiently and can schedule around your operating hours — whether that means painting at night, on weekends, or in phases to keep your space functional. From open-plan offices to retail stores and healthcare facilities, we deliver clean, professional interiors.",
        bullets: [
          "Flexible scheduling around your business operations",
          "Offices, retail, medical, and industrial spaces",
          "Low-odor and zero-VOC paint options",
          "Phased painting to minimize disruption",
          "Clean job sites maintained throughout",
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
        tag: "Driveways & Patios",
        title: "Residential Paver Sealing",
        body: "Unsealed pavers absorb oil, moisture, and organic material — leading to stains, shifting, and weed growth. Our paver sealing process starts with a thorough power wash to remove all dirt, mold, and efflorescence. We then apply a professional-grade polymeric sand re-jointing where needed, and finish with a high-quality sealer that enhances the natural color of your pavers while creating a protective barrier against Florida's elements.",
        bullets: [
          "Driveways, patios, walkways, and pool decks",
          "Deep power washing and stain removal",
          "Polymeric sand re-jointing where needed",
          "Wet-look or natural-matte sealer options",
          "Protects against UV fade, mold, and oil stains",
        ],
      },
      {
        tag: "Commercial",
        title: "Commercial Paver Sealing",
        body: "Commercial properties, HOAs, and apartment complexes benefit greatly from professional paver sealing. We handle large-scale projects with efficient equipment and professional-grade sealers rated for high-traffic surfaces. Regular sealing extends paver life significantly and keeps common areas looking sharp.",
        bullets: [
          "HOA communities and apartment complexes",
          "Commercial parking and walkway pavers",
          "High-traffic grade commercial sealers",
          "Large-scale project capacity",
          "Scheduled maintenance programs available",
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
        text: "High-pressure wash removes all mold, dirt, stains, and loose material from the surface.",
      },
      {
        step: "03",
        title: "Sand & Prep",
        text: "Re-joint with polymeric sand where needed and allow surface to fully dry before sealing.",
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
              {/* Visual placeholder */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(135deg, #A8CCDF 0%, #2A5F8F 100%)"
                      : "linear-gradient(135deg, #3378B0 0%, #1B3A5C 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <div className="text-white/30 text-center">
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
                  <p className="text-sm font-semibold uppercase tracking-widest mt-3 text-white/40">
                    Photo Gallery
                  </p>
                </div>
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
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
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
