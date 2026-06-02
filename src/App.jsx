import React, { useState } from 'react';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SectionDivider from './components/SectionDivider';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`bg-background text-text-main ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Resume />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Academics />
          <SectionDivider />
          <Achievements />
          <SectionDivider />
          <Social />
          <SectionDivider />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;