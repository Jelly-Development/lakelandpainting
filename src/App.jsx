import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FontDemoPage from './pages/FontDemoPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
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
      <main id="main-content">
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/services/:service" element={<ServicesPage />} />
          <Route path="/:area"             element={<ServiceAreaPage />} />
          <Route path="/gallery"           element={<GalleryPage />} />
          <Route path="/contact"           element={<ContactPage />} />
          <Route path="/demo"              element={<FontDemoPage />} />
          <Route path="*"                  element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
