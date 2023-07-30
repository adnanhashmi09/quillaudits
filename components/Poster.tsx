import Link from 'next/link';
import styles from '../styles/components/Poster.module.scss';

import { Player } from '@lottiefiles/react-lottie-player';

function Poster() {
  return (
    <section className={styles.section}>
      <div className={styles.poster}>
        <figure>
          <Player
            autoplay
            loop
            speed={1}
            src="./career.json"
            style={{ height: 'auto', width: '100%' }}
          />
        </figure>
        <div className={styles.text}>
          <h2>Join Our Team </h2>
          <p>
            At Quillaudits, we believe in fostering a culture that thrives on innovation, collaboration, and continuous learning.
            Join our team of passionate professionals who are dedicated to driving transformative change in the world of technology
            and blockchain. As a rapidly growing company, we offer exciting opportunities for career advancement and personal growth.
          </p>
          <div className={styles.btnContainer}>
            <Link href="#" passHref>
              <a className={styles.btn}>Open Positions</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;
