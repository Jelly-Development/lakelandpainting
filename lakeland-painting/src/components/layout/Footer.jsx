import { Link } from 'react-router-dom';

const PHONE = '863-670-1601';
const EMAIL = 'joshcranor@gmail.com';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="container-site py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/logo.webp" alt="Lakeland Painting Company" className="h-14 mb-4" loading="lazy" />
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Over 15 years of expert painting and paver sealing across Polk County. Locally owned, professionally delivered.
          </p>
          <a href={`tel:${PHONE.replace(/-/g,'')}`} className="btn btn--primary btn--sm inline-flex">
            Call {PHONE}
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-sky mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ['Residential Painting', '/services/residential'],
              ['Commercial Painting',  '/services/commercial'],
              ['Paver Sealing',        '/services/paver-sealing'],
            ].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-sky mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm text-white/70 columns-2">
            {['Lakeland','Kathleen','Bartow','Winter Haven','Plant City','Mulberry','Lake Wales','Polk City'].map(area => (
              <li key={area}>
                <Link to={`/service-areas/${area.toLowerCase().replace(' ','-')}`} className="hover:text-white transition-colors">
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-sky mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href={`tel:${PHONE.replace(/-/g,'')}`} className="hover:text-white transition-colors font-semibold text-white">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
            <li className="leading-relaxed">Lakeland, FL &amp; Polk County</li>
            <li className="leading-relaxed">
              Mon–Fri: 7am–6pm<br/>
              Sat: 8am–4pm<br/>
              Sun: Closed
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} Lakeland Painting Company. All rights reserved.</span>
          <span>Serving Polk County, Florida</span>
        </div>
      </div>
    </footer>
  );
}
