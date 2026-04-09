/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#1B3A5C',
          blue:    '#2A5F8F',
          mid:     '#3378B0',
          sky:     '#5A9AC9',
          light:   '#A8CCDF',
          cream:   '#F5F0E8',
          offwhite:'#FAFAF8',
          gray:    '#6B7280',
          dark:    '#111827',
          white:   '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':  ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1':    ['clamp(2rem, 4vw, 3rem)',      { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h2':    ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'h3':    ['clamp(1.2rem, 2vw, 1.5rem)',  { lineHeight: '1.3' }],
      },
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '88':  '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm':   '4px',
        DEFAULT:'8px',
        'md':   '12px',
        'lg':   '16px',
        'xl':   '24px',
        '2xl':  '32px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle':    '0 1px 3px rgba(27,58,92,0.08), 0 1px 2px rgba(27,58,92,0.04)',
        'card':      '0 4px 16px rgba(27,58,92,0.10), 0 1px 4px rgba(27,58,92,0.06)',
        'float':     '0 8px 32px rgba(27,58,92,0.16), 0 2px 8px rgba(27,58,92,0.08)',
        'deep':      '0 20px 64px rgba(27,58,92,0.24), 0 4px 16px rgba(27,58,92,0.12)',
        'cta':       '0 4px 24px rgba(42,95,143,0.40)',
        'cta-hover': '0 8px 36px rgba(42,95,143,0.55)',
      },
      screens: {
        'xs':  '480px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1440px',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'fade-in':  'fadeIn 0.4s ease forwards',
        'pulse-ring':'pulseRing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(42,95,143,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(42,95,143,0)' },
        },
      },
    },
  },
  plugins: [],
};
