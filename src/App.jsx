import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import FeaturedSection from './components/FeaturedSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-[72px]">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <Services />
      <Showcase />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingMenu />
    </div>
  );
}

export default App;
