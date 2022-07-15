import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

import styles from '../styles/components/Clients.module.scss';
function Client() {
  return (
    <section className={styles.section}>
      <SectionHeading>Client</SectionHeading>
      <SubHeading>Lorem Ipsum (Partners)</SubHeading>
      <div className={styles.imgContainer}>
        <img src="/polygonLogo.png" alt="client" loading="lazy" />
        <img src="/polygonLogo.png" alt="client" loading="lazy" />
        <img src="/polygonLogo.png" alt="client" loading="lazy" />{' '}
        <img src="/polygonLogo.png" alt="client" loading="lazy" />
        <img src="/polygonLogo.png" alt="client" loading="lazy" />
        <img src="/polygonLogo.png" alt="client" loading="lazy" />
      </div>
    </section>
  );
}

export default Client;
