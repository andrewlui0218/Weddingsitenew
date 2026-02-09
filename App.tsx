import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Transportation from './components/Transportation';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

const App: React.FC = () => {
  const bgImage = "images/hero-bg.jpg";

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      {/* 
        Global Background Layer 
        - Fixed position so it stays while scrolling.
        - z-[-1] ensures it stays behind content.
        - It will show through the semi-transparent backgrounds of the sections.
      */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Hero />
      <EventDetails />
      <Navbar />
      <OurStory />
      <Gallery />
      <Transportation />
      <Rsvp />
      <Footer />
    </div>
  );
};

export default App;