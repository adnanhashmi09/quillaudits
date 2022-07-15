import type { NextPage } from 'next';

// components
import Meta from '../components/utils/Meta';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Clients from '../components/Clients';
// styles
import styles from '../styles/components/Home.module.scss';
import Services from '../components/Services';

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
    </>
  );
};

export default Home;