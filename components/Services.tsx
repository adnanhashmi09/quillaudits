import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

import { Player } from '@lottiefiles/react-lottie-player';

import styles from '../styles/components/Services.module.scss';
import Button from './utils/Button';

function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.image}>
          <figure>
            <Player
              autoplay
              loop
              speed={1}
              src="audit.json"
              style={{ height: 'auto', width: '100%' }}
            />
          </figure>
        </div>
        <div className={styles.text}>
          <SectionHeading>Service</SectionHeading>
          <SubHeading>Smart Contract Auditing</SubHeading>
          <p>
            Our Smart Contract Auditing service ensures that your blockchain-based applications are free from
            vulnerabilities and potential security risks.
          </p>

          <ul>
            <li>
              <figure>
                <img
                  src="/Ethereum_logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>Ethereum Smart Contract Auditing</p>
            </li>
            <li>
              <figure>
                <img src="/polygon.png" alt="ethereum_logo" loading="lazy" />
              </figure>
              <p>Polygon Smart Contract Auditing</p>
            </li>
            <li>
              <figure>
                <img src="/binance.svg" alt="ethereum_logo" loading="lazy" />
              </figure>
              <p>BSC Smart Contract Auditing</p>
            </li>
            <li>
              <figure>
                <img
                  src="/solana-sol-logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>Solana Smart Contract Auditing</p>
            </li>
            <li>
              <figure>
                <img
                  src="/Ethereum_logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>EOS Smart Contract Auditing</p>
            </li>
          </ul>
          <div className={styles.btnContainer}>
            <Button type="button" modifier="secondary" href="#">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <SectionHeading>Service</SectionHeading>
          <SubHeading>Blockchain Penetration Testing</SubHeading>
          <p>
            With our Blockchain Penetration Testing service, we proactively evaluate the strength
            of your blockchain infrastructure.
          </p>

          <div className={styles.btnContainer}>
            <Button type="button" modifier="secondary" href="#">
              Learn More
            </Button>
          </div>
        </div>

        <div className={styles.image}>
          <figure>
            <Player
              autoplay
              loop
              speed={1}
              src="testing.json"
              style={{ height: 'auto', width: '100%' }}
            />
          </figure>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.image}>
          <figure>
            <Player
              autoplay
              loop
              speed={1}
              src="work.json"
              style={{ height: 'auto', width: '100%' }}
            />
          </figure>
        </div>
        <div className={styles.text}>
          <SectionHeading>Service</SectionHeading>
          <SubHeading>Due Diligence</SubHeading>
          <p>
            When it comes to blockchain technology, thorough Due Diligence is crucial. Our team provides
            comprehensive assessments of projects, protocols, and investments to ensure transparency and mitigate risks.
          </p>

          <ul>
            <li>
              <figure>
                <img
                  src="/Ethereum_logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>DeFi Due Diligence</p>
            </li>
            <li>
              <figure>
                <img
                  src="/Ethereum_logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>NFT Due Diligence</p>
            </li>
            <li>
              <figure>
                <img
                  src="/Ethereum_logo.png"
                  alt="ethereum_logo"
                  loading="lazy"
                />
              </figure>
              <p>Rug Pull Due Diligence</p>
            </li>
          </ul>
          <div className={styles.btnContainer}>
            <Button type="button" modifier="secondary" href="#">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
