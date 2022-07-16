import type { NextPage } from 'next';

// components
import Meta from '../components/utils/Meta';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Clients from '../components/Clients';
// styles
import styles from '../styles/components/Home.module.scss';
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
  return (
    <>
      <Meta {...metaData} />
      <Navbar />
      <HeroSection />
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
