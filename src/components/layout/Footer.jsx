import { Link } from 'react-router-dom';

const EMAIL = 'joshcranor@gmail.com';

function FooterHeading({ children }) {
  return (
    <>
      <h4 className="font-body text-base font-bold text-white m-0">{children}</h4>
      <div className="w-8 h-px bg-white my-4" />
    </>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="container-site py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col items-center md:items-start">
          <img src="/logo.webp" alt="Lakeland Painting Company" className="h-20 mb-4" loading="lazy" />
          <p className="text-white text-base leading-relaxed">
            Over 15 years of expert painting and paver sealing across Polk County. Licensed, insured, and professionally delivered.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2 text-base text-white">
            {[
              ['Residential Painting', '/services/residential'],
              ['Commercial Painting',  '/services/commercial'],
              ['Paver Sealing',        '/services/paver-sealing'],
            ].map(([label, to]) => (
              <li key={to}><Link to={to} className="text-white hover:text-brand-sky transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div className="flex flex-col items-center md:items-start">
          <FooterHeading>Service Areas</FooterHeading>
          <ul className="space-y-2 text-base text-white columns-2">
            {['Lakeland','Kathleen','Bartow','Winter Haven','Plant City','Mulberry','Lake Wales','Polk City'].map(area => (
              <li key={area}>
                <Link to={`/${area.toLowerCase().replace(' ','-')}`} className="text-white hover:text-brand-sky transition-colors">
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <FooterHeading>Contact</FooterHeading>
          <ul className="space-y-3 text-base text-white">
            <li><a href="tel:8636701601" className="text-white hover:text-brand-sky transition-colors font-semibold">863-670-1601</a></li>
            <li><a href={`mailto:${EMAIL}`} className="text-white hover:text-brand-sky transition-colors">{EMAIL}</a></li>
<br />            <li className="leading-relaxed">
              Mon–Fri: 9:00 AM – 5:00 PM<br/>
              Sat–Sun: Closed
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-base text-white text-center">
          <span>© {year} Lakeland Painting Company</span>
          <span>Website designed by <a href="https://jellydevelopment.com" className="text-white hover:text-brand-sky transition-colors">Jelly Development</a></span>
        </div>
      </div>
    </footer>
  );
}
