import React from 'react';
import Seo from '@/components/Seo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TrackRecord from '@/components/TrackRecord';
import Services from '@/components/Services';
import Simulator from '@/components/Simulator';
import SubstackBanner from '@/components/SubstackBanner';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import CookieBanner from '@/components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen">
      <Seo />
      <Header />
      <main>
        <Hero />
        <About />
        <TrackRecord />
        <Services />
        <Simulator />
        <SubstackBanner />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <CookieBanner />
    </div>
  );
}

export default App;