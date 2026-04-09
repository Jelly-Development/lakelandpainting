import { useState, useRef, useEffect } from 'react';

export default function LazyImage({
  src, alt, className = '', aspectRatio = '4/3', objectFit = 'cover', ...props
}) {
  const [loaded,  setLoaded]  = useState(false);
  const [inView,  setInView]  = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { rootMargin: '200px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Shimmer placeholder */}
      {!loaded && (
        <div className="absolute inset-0 img-placeholder" />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            transition: 'opacity 0.4s ease',
            opacity: loaded ? 1 : 0,
          }}
          {...props}
        />
      )}
    </div>
  );
}
