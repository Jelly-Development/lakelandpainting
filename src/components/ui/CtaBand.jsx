const PHONE = '863-670-1601';

export default function CtaBand({
  title   = 'Ready to Transform Your Property?',
  subtitle= 'Get a free, no-obligation estimate. We serve all of Polk County and answer after hours.',
  primaryLabel = `Call ${PHONE}`,
  primaryHref  = `tel:8636701601`,
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__pattern" aria-hidden="true" />
      <div className="container-site relative z-10 text-center">
        <p className="section-label justify-center text-brand-light mb-3">Get Started Today</p>
        <h2 className="section-title section-title--light mb-4 text-balance">{title}</h2>
        <p className="hero-subtitle mx-auto mb-8 max-w-xl">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={primaryHref} className="btn btn--white btn--lg">
            {primaryLabel}
          </a>
          <a href="/contact" className="btn btn--ghost btn--lg">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
