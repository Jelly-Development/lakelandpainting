const FONTS = [
  {
    name: 'Playfair Display',
    label: 'Current',
    family: "'Playfair Display', Georgia, serif",
    note: 'Classic editorial serif — refined but familiar',
  },
  {
    name: 'Fraunces',
    label: 'Option A',
    family: "'Fraunces', Georgia, serif",
    note: 'Warm optical serif with craft character — unique without being loud',
  },
  {
    name: 'DM Serif Display',
    label: 'Option B',
    family: "'DM Serif Display', Georgia, serif",
    note: 'Clean, confident modern serif — strong and readable at all sizes',
  },
  {
    name: 'Cormorant Garamond',
    label: 'Option C',
    family: "'Cormorant Garamond', Georgia, serif",
    note: 'Elegant and refined — upscale, luxury tone',
  },
];

const SCALE = [
  { tag: 'h1', size: '3.815rem', sample: 'Expert Painting & Paver Sealing' },
  { tag: 'h2', size: '3.052rem', sample: 'Quality You Can Count On' },
  { tag: 'h3', size: '2.441rem', sample: 'Serving Lakeland Since 2009' },
  { tag: 'h4', size: '1.953rem', sample: 'Residential & Commercial' },
  { tag: 'h5', size: '1.563rem', sample: 'Free Estimates, Fast Response' },
  { tag: 'h6', size: '1.25rem', sample: 'Licensed, Insured & 5-Star Rated' },
];

export default function FontDemoPage() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Page header */}
        <div style={{ marginBottom: '3rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#3378B0', marginBottom: '0.5rem' }}>
            Internal Demo — /demo
          </p>
          <h1 style={{ fontFamily: 'system-ui, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: '0 0 0.5rem' }}>
            Heading Font Options
          </h1>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', color: '#6B7280', margin: 0 }}>
            Font scale uses 16px = 1rem. Body copy remains Source Sans 3.
          </p>
        </div>

        {/* Font cards */}
        {FONTS.map(({ name, label, family, note }) => (
          <div
            key={name}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2.5rem',
              marginBottom: '2.5rem',
              boxShadow: '0 1px 4px rgba(27,58,92,0.06)',
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
              <span style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                background: label === 'Current' ? '#e5e7eb' : '#1B3A5C',
                color: label === 'Current' ? '#6B7280' : '#fff',
                padding: '2px 10px',
                borderRadius: '9999px',
              }}>
                {label}
              </span>
              <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
                {name}
              </span>
            </div>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '0.8rem', color: '#9CA3AF', margin: '0 0 2rem' }}>
              {note}
            </p>

            {/* Type scale */}
            {SCALE.map(({ tag, size, sample }) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.5rem',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                <span style={{
                  fontFamily: 'system-ui, monospace',
                  fontSize: '0.7rem',
                  color: '#9CA3AF',
                  width: '2.5rem',
                  flexShrink: 0,
                }}>
                  {tag}
                </span>
                <span style={{
                  fontFamily: 'system-ui, monospace',
                  fontSize: '0.7rem',
                  color: '#D1D5DB',
                  width: '4rem',
                  flexShrink: 0,
                }}>
                  {size}
                </span>
                <span style={{
                  fontFamily: family,
                  fontSize: size,
                  fontWeight: 700,
                  color: '#1B3A5C',
                  lineHeight: 1.2,
                }}>
                  {sample}
                </span>
              </div>
            ))}

            {/* Body + small sample */}
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'system-ui, monospace', fontSize: '0.7rem', color: '#9CA3AF', width: '2.5rem', flexShrink: 0 }}>p</span>
                <span style={{ fontFamily: 'system-ui, monospace', fontSize: '0.7rem', color: '#D1D5DB', width: '4rem', flexShrink: 0 }}>1rem</span>
                <span style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: '1rem', color: '#6B7280', lineHeight: 1.75 }}>
                  We use premium Sherwin-Williams paints and thorough prep work on every job.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'system-ui, monospace', fontSize: '0.7rem', color: '#9CA3AF', width: '2.5rem', flexShrink: 0 }}>small</span>
                <span style={{ fontFamily: 'system-ui, monospace', fontSize: '0.7rem', color: '#D1D5DB', width: '4rem', flexShrink: 0 }}>0.8rem</span>
                <span style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: '0.8rem', color: '#9CA3AF' }}>
                  Licensed & Insured · Polk County, FL · Free Estimates
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
