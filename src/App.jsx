import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-electric-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />

        <Stats />
        <Portfolio />

        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
