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
  return (
    <div className="w-full min-h-screen flex flex-col">
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