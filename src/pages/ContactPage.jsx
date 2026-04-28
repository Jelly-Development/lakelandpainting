import { useState } from 'react';
import { Link } from 'react-router-dom';

const PHONE = '863-670-1601';
const PHONE_HREF = 'tel:8636701601';
const EMAIL = 'joshcranor@gmail.com';

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday',         time: 'Closed' },
  { day: 'Sunday',           time: 'Closed' },
];

function InfoCard({ icon, title, children }) {
  return (
    <div className="card card--static p-6 flex gap-4">
      <div className="w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const encode = data =>
    Object.keys(data)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please call us directly at ' + PHONE));
  };

  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: '6rem' }}>
        <div className="page-hero__pattern" aria-hidden="true" />
        <div className="container-site relative z-10">
          <nav className="text-white/50 text-sm mb-4">
            <Link to="/" className="text-white hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="section-label text-brand-light mb-3">Get In Touch</p>
          <h1 className="page-title mb-4">Request a Free Estimate</h1>
          <p className="hero-subtitle max-w-xl">
            We typically respond the same day. Or skip the form — just call us directly.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-label">Contact Information</p>
                <h2 className="section-title mb-2" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
                  Let's Talk About Your Project
                </h2>              </div>

              <InfoCard
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.58.1.35.01.74-.25 1.02L6.6 10.8z"/></svg>}
                title="Phone"
              >
                <a href={PHONE_HREF} className="text-brand-blue font-bold text-xl hover:text-brand-navy transition-colors">
                  {PHONE}
                </a>
              </InfoCard>

              <InfoCard
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                title="Email"
              >
                <a href={`mailto:${EMAIL}`} className="text-brand-blue font-semibold hover:text-brand-navy transition-colors break-all">
                  {EMAIL}
                </a>
              </InfoCard>

              <InfoCard
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                title="Business Hours"
              >
                <dl className="space-y-2 mt-1">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-4 text-sm">
                      <dt className="text-brand-gray font-medium">{day}</dt>
                      <dd className={`font-semibold ${time === 'Closed' ? 'text-red-500' : 'text-brand-navy'}`}>{time}</dd>
                    </div>
                  ))}
                </dl>
              </InfoCard>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="card card--static p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="#2A5F8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="#2A5F8F" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy text-2xl mb-2">Thank You!</h3>
                    <p className="text-brand-gray mb-6">We've received your request and will be in touch shortly.</p>
                    <p className="text-brand-gray text-sm">
                      For faster service, call us directly at{' '}
                      <a href={PHONE_HREF} className="text-brand-blue font-bold">{PHONE}</a>
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-brand-navy text-2xl mb-1">Get Your Free Estimate</h2>
                    <p className="text-brand-gray text-sm mb-6">No obligation. We'll get back to you within one business day.</p>

                    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-brand-dark mb-1" htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full border border-brand-light rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-brand-dark mb-1" htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone" name="phone" type="tel" required
                            value={form.phone} onChange={handleChange}
                            placeholder="(863) 555-0000"
                            className="w-full border border-brand-light rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-dark mb-1" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full border border-brand-light rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-dark mb-1" htmlFor="service">
                          Service Needed
                        </label>
                        <select
                          id="service" name="service"
                          value={form.service} onChange={handleChange}
                          className="w-full border border-brand-light rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        >
                          <option value="">Select a service…</option>
                          <option>Exterior Residential Painting</option>
                          <option>Interior Residential Painting</option>
                          <option>Exterior Commercial Painting</option>
                          <option>Interior Commercial Painting</option>
                          <option>Paver Sealing</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-dark mb-1" htmlFor="message">
                          Project Details
                        </label>
                        <textarea
                          id="message" name="message" rows={4}
                          value={form.message} onChange={handleChange}
                          placeholder="Tell us about your property, what you're looking to have painted or sealed, your timeline, etc."
                          className="w-full border border-brand-light rounded-md px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                        />
                      </div>

                      <button type="submit" className="btn btn--primary btn--lg w-full">
                        Send My Request
                      </button>

                      <p className="text-center text-brand-gray text-xs">
                        Or call directly:{' '}
                        <a href={PHONE_HREF} className="text-brand-blue font-bold">{PHONE}</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
