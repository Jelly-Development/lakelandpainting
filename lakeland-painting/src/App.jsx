import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const HomePage        = lazy(() => import('./pages/HomePage'));
const ServicesPage    = lazy(() => import('./pages/ServicesPage'));
const ServiceAreaPage = lazy(() => import('./pages/ServiceAreaPage'));
const GalleryPage     = lazy(() => import('./pages/GalleryPage'));
const ContactPage     = lazy(() => import('./pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-40">
      <div className="w-10 h-10 border-4 border-brand-light border-t-brand-blue rounded-full animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-40 text-center container-site">
      <div className="font-display text-8xl font-bold text-brand-blue/20 mb-4">404</div>
      <h1 className="section-title mb-4">Page Not Found</h1>
      <p className="text-brand-gray mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn--primary btn--md">Back to Home</a>
    </div>
  );
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" style={{ paddingTop: '80px' }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                    element={<HomePage />} />
            <Route path="/services/:service"   element={<ServicesPage />} />
            <Route path="/service-areas/:area" element={<ServiceAreaPage />} />
            <Route path="/gallery"             element={<GalleryPage />} />
            <Route path="/contact"             element={<ContactPage />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
