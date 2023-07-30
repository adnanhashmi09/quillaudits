// styles
import styles from '../styles/components/HeroSection.module.scss';
import Button from './utils/Button';

import { Player } from '@lottiefiles/react-lottie-player';

function HeroSection() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.left}>
            <h1>Smart Contracts Auditing Services</h1>
            <p>
              Welcome to our Smart Contract Auditing Service! At QuillAudits,
              we offer a comprehensive and reliable solution to ensure the security and efficiency
              of your blockchain-based projects. Our team of expert auditors specializes in meticulously
              examining smart contracts, identifying vulnerabilities, and providing actionable insights
              to fortify your decentralized applications.
            </p>
            <div className={styles.btnContainer}>
              <Button type="button" href="#" modifier="">
                Request Free Quota
              </Button>

              <Button type="button" href="#" modifier="ghost">
                Explore Services
              </Button>
            </div>
          </div>

          <div className={styles.blocksContainer}>
            <figure>
              <Player
                autoplay
                loop
                speed={1}
                src="./blocks.json"
                style={{ height: 'auto', width: '100%' }}
              />
            </figure>
          </div>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <h2>$12.8B</h2>
            <p>
              Amount Lost To <br />
              Defi Hacks In 2021
            </p>
          </div>
          <div className={styles.details}>
            <h2>400K</h2>
            <p>
              Lines of Codes <br />
              Secured by QuillAudits
            </p>
          </div>
          <div className={styles.details}>
            <h2>$14.6B</h2>
            <p>
              Amount Protected <br />
              By QuillAudits
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
