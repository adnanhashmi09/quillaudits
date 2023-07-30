import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

// components
import Meta from '../components/utils/Meta';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Clients from '../components/Clients';
// styles
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blogs from '../components/Blogs';
import Poster from '../components/Poster';
import Mail from '../components/Mail';
import Footer from '../components/Footer';

// Globals declarations
const metaData = {
  title: 'Home',
  description: 'Home page for QuillAudits',
};

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const clientRef = useRef<any>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    observer.observe(clientRef.current);
  }, []);
  return (
    <>
      <Meta {...metaData} />
      <Navbar isVisible={isVisible} />
      <div ref={clientRef}>
        <HeroSection />
      </div>
      <Clients />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Mail />
      <Poster />
      <Footer />
    </>
  );
};

export default Home;
