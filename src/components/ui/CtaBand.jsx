import { useIsMobile } from '../../hooks/useIsMobile';

const PHONE_HREF = 'tel:8636701601';
const EMAIL_HREF = 'mailto:joshcranor@gmail.com';

export default function CtaBand({
  title   = 'Ready to Transform Your Property?',
  subtitle= 'Get a free, no-obligation estimate. We serve all of Polk County and answer after hours.',
}) {
  const isMobile = useIsMobile();
  return (
    <section className="cta-band">
      <div className="cta-band__pattern" aria-hidden="true" />
      <div className="container-site relative z-10 text-center">
        <p className="section-label justify-center mb-3">Get Started Today</p>
        <h2 className="section-title mb-4 text-balance">{title}</h2>
        <p className="text-brand-gray text-xl leading-relaxed mx-auto mb-8 max-w-xl">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={isMobile ? PHONE_HREF : EMAIL_HREF} className="btn btn--primary btn--lg">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
