import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Simulator from '@/components/Simulator';
import SubstackBanner from '@/components/SubstackBanner';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Simulator />
        <SubstackBanner />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;