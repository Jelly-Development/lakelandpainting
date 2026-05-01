import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIsMobile } from '../hooks/useIsMobile';
import CtaBand from '../components/ui/CtaBand';
import interiorImg from '../assets/interior/IMG_1666.jpeg';
import heroImg from '../assets/exterior/IMG_1660.jpeg';
import residentialCardImg from '../assets/exterior/IMG_1659.jpeg';
import commercialCardImg from '../assets/commercial/IMG_1663.jpeg';
import paverCardImg from '../assets/sealing/IMG_1667.jpeg';

const PHONE_HREF = 'tel:8636701601';

const HERO_SUBTITLE = "Expert residential and commercial painting, interior and exterior work, and paver sealing across Polk County. Licensed and insured with over 15 years of experience.";

const areaData = {
  lakeland: {
    name: 'Lakeland',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Lakeland, FL',
    intro: "Lakeland Painting Company is proud to be headquartered right here in Lakeland, FL. We've been serving homeowners and business owners throughout the city for over 15 years — from the historic Dixieland neighborhood to the newer communities around Lakeland Highlands.",
    nearbyAreas: ['Kathleen', 'Bartow', 'Mulberry', 'Polk City'],
    seoTitle: 'Painting Company in Lakeland, FL | Lakeland Painting Company',
    seoDescription: 'Expert painting and paver sealing in Lakeland, FL. Over 15 years serving Polk County homeowners and businesses. Licensed & insured. Call 863-670-1601.',
  },
  kathleen: {
    name: 'Kathleen',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Kathleen, FL',
    intro: "Kathleen is a growing unincorporated community just north of Lakeland along US-98. We serve many families and new-construction homes throughout the Kathleen area, providing the same professional exterior and interior painting services our Lakeland customers enjoy.",
    nearbyAreas: ['Lakeland', 'Plant City', 'Polk City'],
    seoTitle: 'Painting Company in Kathleen, FL | Lakeland Painting Company',
    seoDescription: 'Professional painting and paver sealing in Kathleen, FL. Serving new-construction and established homes along US-98. Licensed & insured. Free estimates.',
  },
  bartow: {
    name: 'Bartow',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Bartow, FL',
    intro: "Bartow is the county seat of Polk County and home to some of the region's most beautiful historic homes. Our team has extensive experience painting older homes with wood siding, intricate trim work, and masonry foundations that require extra care and premium primers.",
    nearbyAreas: ['Lakeland', 'Mulberry', 'Lake Wales', 'Winter Haven'],
    seoTitle: 'Painting Company in Bartow, FL | Lakeland Painting Company',
    seoDescription: 'Expert house painting in Bartow, FL. Specializing in historic homes, wood siding, and masonry. Polk County\'s trusted painting contractor. Free estimates.',
  },
  'winter-haven': {
    name: 'Winter Haven',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Winter Haven, FL',
    intro: "Winter Haven is known as the Chain of Lakes City, with beautiful lakefront homes that need durable exterior coatings. We use mold-resistant, moisture-barrier paints specifically suited for lakeside properties.",
    nearbyAreas: ['Bartow', 'Lake Wales', 'Lakeland'],
    seoTitle: 'Painting Company in Winter Haven, FL | Lakeland Painting Company',
    seoDescription: 'Professional painting and paver sealing in Winter Haven, FL. Mold-resistant coatings for Chain of Lakes homes. Licensed & insured. Call for a free estimate.',
  },
  'plant-city': {
    name: 'Plant City',
    county: 'Hillsborough County',
    headline: 'Expert Painting & Paver Sealing in Plant City, FL',
    intro: "Plant City, home of the Florida Strawberry Festival, is just east of Tampa on I-4. We serve Plant City homeowners and businesses looking for reliable, high-quality painting services without having to bring in a contractor from Tampa.",
    nearbyAreas: ['Lakeland', 'Kathleen', 'Brandon'],
    seoTitle: 'Painting Company in Plant City, FL | Lakeland Painting Company',
    seoDescription: 'Expert painting and paver sealing in Plant City, FL. Serving Hillsborough County homeowners and businesses. Licensed & insured. Free estimates — call today.',
  },
  mulberry: {
    name: 'Mulberry',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Mulberry, FL',
    intro: "Mulberry is a small community south of Lakeland with a tight-knit residential base. Our team regularly serves Mulberry homeowners looking for trusted, local painting professionals — not a large impersonal company from out of county.",
    nearbyAreas: ['Bartow', 'Lakeland', 'Lake Wales'],
    seoTitle: 'Painting Company in Mulberry, FL | Lakeland Painting Company',
    seoDescription: 'Trusted painting and paver sealing in Mulberry, FL. Local Polk County painters serving residential homes with premium paints and expert prep. Free estimates.',
  },
  'lake-wales': {
    name: 'Lake Wales',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Lake Wales, FL',
    intro: "Lake Wales sits at the southern end of Polk County near Bok Tower Gardens. The area has a wonderful mix of historic homes and newer developments. Our painting team brings the same quality process and premium products to every Lake Wales project, large or small.",
    nearbyAreas: ['Bartow', 'Winter Haven', 'Mulberry'],
    seoTitle: 'Painting Company in Lake Wales, FL | Lakeland Painting Company',
    seoDescription: 'Professional painting and paver sealing in Lake Wales, FL. Serving historic and new-construction homes near Bok Tower Gardens. Licensed & insured. Free estimates.',
  },
  'polk-city': {
    name: 'Polk City',
    county: 'Polk County',
    headline: 'Expert Painting & Paver Sealing in Polk City, FL',
    intro: "Polk City is a small, growing community north of Lakeland along US-17. With increasing residential development in the area, we're proud to serve new and existing homeowners who want a reliable local painter they can count on.",
    nearbyAreas: ['Lakeland', 'Kathleen', 'Plant City'],
    seoTitle: 'Painting Company in Polk City, FL | Lakeland Painting Company',
    seoDescription: 'Expert painting and paver sealing in Polk City, FL. Serving new and existing homeowners along US-17. Licensed & insured. Free estimates.',
  },
};

const services = [
  {
    image: residentialCardImg,
    imageAlt: 'Residential painting project by Lakeland Painting Company',
    label: 'Most Popular',
    title: 'Residential Painting',
    text: 'Premium house painting for homeowners. Thorough prep, clean application, and results that last.',
    to: '/services/residential',
  },
  {
    image: commercialCardImg,
    imageAlt: 'Commercial painting project by Lakeland Painting Company',
    label: 'Commercial',
    title: 'Commercial Painting',
    text: 'First impressions matter. We paint offices, retail spaces, and warehouses with minimal disruption to your business operations.',
    to: '/services/commercial',
  },
  {
    image: paverCardImg,
    imageAlt: 'Paver sealing project by Lakeland Painting Company',
    label: 'Specialty',
    title: 'Paver Sealing',
    text: 'Driveways, patios, and pool decks sealed to withstand Florida rain, UV, and mold. Restore beauty and protect your investment.',
    to: '/services/paver-sealing',
  },
];

const testimonials = [
  {
    name: 'Jedidiah F.',
    stars: 5,
    text: 'High quality paint, great attention to detail, and the work gets done quickly and efficiently. The work is long lasting and done the right way. They show up when they say they will.',
  },
  {
    name: 'Jared S.',
    stars: 5,
    text: "Not once did we feel like he didn't have our best interest in mind. It was very evident up front that he was going to make sure we were pleased with the results. We absolutely were!",
  },
  {
    name: 'Richard H.',
    stars: 5,
    text: 'He explained the different grades of paint. We selected the top grade and glad we did. It still looks freshly done two years later. Very professional, timely, and knowledgeable.',
  },
];

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '5★', label: 'Average Google Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(42,95,143,0.12)" />
      <path d="M6 10l3 3 5-5" stroke="#2A5F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceAreaPage() {
  const isMobile = useIsMobile();
  const { area } = useParams();
  const data = areaData[area];

  if (!data) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <link rel="canonical" href={`https://www.lakelandpainting.com/${area}`} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:url" content={`https://www.lakelandpainting.com/${area}`} />
      </Helmet>
      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div
          className="absolute inset-0 w-full h-full"
          style={{ background: 'linear-gradient(160deg, #1B3A5C 0%, #2A5F8F 55%, #3378B0 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-10"
          style={{
            background: 'linear-gradient(to bottom-left, rgba(255,255,255,0.15) 0%, transparent 70%)',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
          aria-hidden="true"
        />
        <div className="hero__content container-site w-full pt-36 pb-28 lg:pt-48 lg:pb-28">
          <div className="flex items-center gap-12">
            <div className="flex-1 fade-up">
              <h1 className="hero-title mb-6 text-balance">{data.headline}</h1>
              <p className="hero-subtitle mb-10 max-w-xl">{HERO_SUBTITLE}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={isMobile ? PHONE_HREF : 'mailto:joshcranor@gmail.com'}
                  className="btn btn--white btn--lg"
                >
                  {isMobile ? 'Call for a Quote' : 'Get a Quote'}
                </a>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-[45%]">
              <img
                src={heroImg}
                alt="Exterior painting project by Lakeland Painting Company"
                className="w-full rounded-xl object-cover shadow-float"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="container-site">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 py-1">
            {[
              `Serving ${data.name} Since 2009`,
              'Licensed & Insured',
              'Free Estimates Within 24 Hours',
              'Premium Quality Paints',
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
                <div className="font-display font-bold text-4xl lg:text-5xl text-brand-blue mb-2">{value}</div>
                <div className="text-brand-gray text-sm font-semibold uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="section-label justify-center">What We Do in {data.name}</p>
            <h2 className="section-title section-title--center">
              Painting &amp; Sealing Services<br />
              <span className="text-brand-blue">in {data.name}, FL</span>
            </h2>          </div>
          <div className="features-grid">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to={svc.to}
                className="card card--service group block relative"
                style={{ minHeight: '380px' }}
              >
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-lg p-5">
                  <span className="card__label">{svc.label}</span>
                  <h3 className="card__title mb-2">{svc.title}</h3>
                  <p className="card__text text-sm">{svc.text}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-brand-blue text-sm font-semibold group-hover:gap-2 transition-all">
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
              <p className="section-label">Why Lakeland Painting in {data.name}?</p>
              <h2 className="section-title mb-4">
                More Than a Paint Job —<br />A Promise of Quality
              </h2>              <p className="text-brand-gray text-xl leading-relaxed mb-8">{data.intro}</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium quality paints on every job',
                  'Thorough prep work — caulking, patching, and priming',
                  'Detailed protection of all surfaces not being painted',
                  'Full cleanup and final inspection before payment',
                  'Responsive communication throughout your project',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-brand-gray">
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
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={interiorImg}
                  alt="Interior painting by Lakeland Painting Company"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-float" style={{ minWidth: '160px' }}>
                <div className="text-amber-400 text-lg mb-1">★★★★★</div>
                <div className="font-bold text-brand-navy text-sm">5-Star Rated</div>
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
            <h2 className="section-title section-title--light section-title--center">What Our Clients Say</h2>          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card card--testimonial">
                <span className="card__stars">{'★'.repeat(t.stars)}</span>
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

      <CtaBand
        title={`Ready to Paint Your ${data.name} Property?`}
        subtitle="We're your local Polk County painting experts. Call for a free estimate — we usually respond same day."
      />
    </>
  );
}
