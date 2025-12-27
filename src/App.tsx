import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Features />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}
