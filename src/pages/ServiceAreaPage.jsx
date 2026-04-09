import { useParams, Link } from 'react-router-dom';
import CtaBand from '../components/ui/CtaBand';

const PHONE = '863-670-1601';
const PHONE_HREF = 'tel:8636701601';

const areaData = {
  lakeland: {
    name: 'Lakeland',
    county: 'Polk County',
    headline: 'Painting Company in Lakeland, FL',
    intro:
      "Lakeland Painting Company is proud to be headquartered right here in Lakeland, FL. We've been serving homeowners and business owners throughout the city for over 15 years — from the historic Dixieland neighborhood to the newer communities around Lakeland Highlands. When you choose us, you're choosing a local company that knows the unique challenges Florida's climate poses for exterior paint.",
    neighborhoods: ['Dixieland', 'Lakeland Highlands', 'South Lake Morton', 'North Lakeland', 'Wedgewood', 'Sleepy Hill'],
    population: '120,000+',
    nearbyAreas: ['Kathleen', 'Bartow', 'Mulberry', 'Polk City'],
  },
  kathleen: {
    name: 'Kathleen',
    county: 'Polk County',
    headline: 'Painting Services in Kathleen, FL',
    intro:
      "Kathleen is a growing unincorporated community just north of Lakeland along US-98. We serve many families and new-construction homes throughout the Kathleen area, providing the same professional exterior and interior painting services our Lakeland customers enjoy.",
    neighborhoods: ['Kathleen Road Corridor', 'North Kathleen', 'New Construction Subdivisions'],
    population: '10,000+',
    nearbyAreas: ['Lakeland', 'Plant City', 'Polk City'],
  },
  bartow: {
    name: 'Bartow',
    county: 'Polk County',
    headline: 'House Painting in Bartow, FL',
    intro:
      "Bartow is the county seat of Polk County and home to some of the region's most beautiful historic homes. Our team has extensive experience painting older homes with wood siding, intricate trim work, and masonry foundations that require extra care and premium primers.",
    neighborhoods: ['Historic Downtown Bartow', 'Fort Frazer', 'East Bartow', 'West Bartow'],
    population: '20,000+',
    nearbyAreas: ['Lakeland', 'Mulberry', 'Lake Wales', 'Winter Haven'],
  },
  'winter-haven': {
    name: 'Winter Haven',
    county: 'Polk County',
    headline: 'Painting Services in Winter Haven, FL',
    intro:
      "Winter Haven is known as the Chain of Lakes City, with beautiful lakefront homes that need durable exterior coatings that can handle constant humidity and moisture. We use mold-resistant, moisture-barrier paints specifically suited for lakeside properties.",
    neighborhoods: ['Lake Howard', 'Lake Shipp', 'Downtown Winter Haven', 'Lake Eloise', 'Cypress Gardens'],
    population: '44,000+',
    nearbyAreas: ['Bartow', 'Lake Wales', 'Lakeland'],
  },
  'plant-city': {
    name: 'Plant City',
    county: 'Hillsborough County',
    headline: 'Painting Company in Plant City, FL',
    intro:
      "Plant City, home of the Florida Strawberry Festival, is just east of Tampa on I-4. We serve Plant City homeowners and businesses looking for reliable, high-quality painting services without having to go into Tampa for a contractor.",
    neighborhoods: ['Historic Downtown Plant City', 'Coronet Estates', 'East Plant City', 'Walden Lake'],
    population: '40,000+',
    nearbyAreas: ['Lakeland', 'Kathleen', 'Brandon'],
  },
  mulberry: {
    name: 'Mulberry',
    county: 'Polk County',
    headline: 'Painting Services in Mulberry, FL',
    intro:
      "Mulberry is a small community south of Lakeland with a tight-knit residential base. Our team regularly serves Mulberry homeowners looking for trusted, local painting professionals — not a large impersonal company from out of county.",
    neighborhoods: ['Downtown Mulberry', 'South Mulberry', 'Imperial Lakeland'],
    population: '4,000+',
    nearbyAreas: ['Bartow', 'Lakeland', 'Lake Wales'],
  },
  'lake-wales': {
    name: 'Lake Wales',
    county: 'Polk County',
    headline: 'Painting Services in Lake Wales, FL',
    intro:
      "Lake Wales sits at the southern end of Polk County near Bok Tower Gardens. The area has a wonderful mix of historic homes and newer developments. Our painting team brings the same quality process and premium products to every Lake Wales project, large or small.",
    neighborhoods: ['Historic Lake Wales', 'Lake Wailes', 'Eagle Ridge', 'North Lake Wales'],
    population: '16,000+',
    nearbyAreas: ['Bartow', 'Winter Haven', 'Mulberry'],
  },
  'polk-city': {
    name: 'Polk City',
    county: 'Polk County',
    headline: 'Painting Company in Polk City, FL',
    intro:
      "Polk City is a small, growing community north of Lakeland along US-17. With increasing residential development in the area, we're proud to serve new and existing homeowners who want a reliable local painter they can count on.",
    neighborhoods: ['Covington Park', 'Lake Agnes', 'North Polk City'],
    population: '3,500+',
    nearbyAreas: ['Lakeland', 'Kathleen', 'Plant City'],
  },
};

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill="rgba(42,95,143,0.12)" />
      <path d="M6 10l3 3 5-5" stroke="#2A5F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const allAreas = [
  'Lakeland','Kathleen','Bartow','Winter Haven',
  'Plant City','Mulberry','Lake Wales','Polk City',
];

export default function ServiceAreaPage() {
  const { area } = useParams();
  const data = areaData[area] || areaData.lakeland;

  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: '6rem' }}>
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/service-areas/lakeland" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{data.name}</span>
          </nav>
          <p className="section-label text-brand-light mb-3">Polk County Painting</p>
          <h1 className="page-title mb-4 text-balance">{data.headline}</h1>
          <p className="hero-subtitle max-w-2xl mb-8">
            Professional painting and paver sealing serving {data.name} and the surrounding {data.county} area. Over 15 years of local experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="btn btn--white btn--md">
              📞 Call {PHONE}
            </a>
            <Link to="/contact" className="btn btn--ghost btn--md">Request Free Quote</Link>
          </div>
        </div>
      </div>

      {/* About Area */}
      <section className="section">
        <div className="container-site">
          <div className="split-layout">
            <div>
              <p className="section-label">Serving {data.name}, FL</p>
              <h2 className="section-title mb-4">
                Your Local Painting Experts<br />in {data.name}
              </h2>
              <div className="divider divider--left mb-6" />
              <p className="text-brand-gray text-lg leading-relaxed mb-6">{data.intro}</p>
              <p className="text-brand-gray text-base leading-relaxed mb-8">
                Whether you need your home's exterior refreshed, your interior repainted, or your pavers sealed and protected, our team brings the same care and quality to every {data.name} project. We're licensed and insured, we use premium paints, and we stand behind our work.
              </p>
              <a href={PHONE_HREF} className="btn btn--primary btn--md">
                Call for a Free {data.name} Estimate
              </a>
            </div>

            {/* Stats + area info */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-display font-bold text-brand-navy text-xl mb-4">Area Information</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    ['City', data.name],
                    ['County', data.county],
                    ['Population', data.population],
                    ['Services', 'Interior & Exterior Painting, Paver Sealing'],
                    ['Response Time', 'Same day / next day estimates'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-brand-light/30 pb-2">
                      <dt className="text-brand-gray font-semibold">{label}</dt>
                      <dd className="text-brand-navy font-medium text-right max-w-xs">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="card p-6">
                <h3 className="font-display font-bold text-brand-navy text-lg mb-3">
                  Neighborhoods We Serve in {data.name}
                </h3>
                <ul className="space-y-2">
                  {data.neighborhoods.map(n => (
                    <li key={n} className="flex items-center gap-2 text-brand-dark text-sm">
                      <CheckIcon />{n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="section section--cream">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Our Services in {data.name}</p>
            <h2 className="section-title section-title--center">
              What We Offer in {data.name}, FL
            </h2>
            <div className="divider divider--center mt-4" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Residential Painting',
                text: `Interior and exterior house painting for ${data.name} homeowners. Premium paints, expert prep, clean results.`,
                to: '/services/residential',
              },
              {
                title: 'Commercial Painting',
                text: `Commercial interior and exterior painting in ${data.name}. On-time delivery with minimal disruption to your business.`,
                to: '/services/commercial',
              },
              {
                title: 'Paver Sealing',
                text: `Protect your driveway and patio pavers from Florida's heat and rain. ${data.name} residents love the results.`,
                to: '/services/paver-sealing',
              },
            ].map(svc => (
              <Link key={svc.title} to={svc.to} className="card card--service block group">
                <div className="card__body">
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

      {/* Nearby areas */}
      <section className="section">
        <div className="container-site">
          <h2 className="section-title section-title--center mb-8">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.nearbyAreas.map(a => (
              <Link
                key={a}
                to={`/service-areas/${a.toLowerCase().replace(' ', '-')}`}
                className="btn btn--outline btn--sm"
              >
                {a}, FL
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-brand-gray text-sm">
              Don't see your city?{' '}
              <a href={PHONE_HREF} className="text-brand-blue font-semibold hover:underline">
                Call us — we likely serve your area.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* All areas grid */}
      <section className="section section--navy">
        <div className="container-site">
          <h2 className="section-title section-title--light section-title--center mb-8">All Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {allAreas.map(a => {
              const slug = a.toLowerCase().replace(' ', '-');
              return (
                <Link
                  key={a}
                  to={`/service-areas/${slug}`}
                  className={`rounded-lg p-4 text-center text-sm font-semibold transition-colors ${
                    slug === area
                      ? 'bg-brand-blue text-white'
                      : 'bg-white/5 text-white/75 hover:bg-white/15 border border-white/10'
                  }`}
                >
                  {a}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to Paint Your ${data.name} Property?`}
        subtitle={`We're your local Polk County painting experts. Call for a free estimate — we usually respond same day.`}
      />
    </>
  );
}
