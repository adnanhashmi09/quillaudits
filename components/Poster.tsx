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
          <h2>Lorem ipsum dolor sit amet (Careers related)</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
          <div className={styles.btnContainer}>
            <Link href="#" passHref>
              <a className={styles.btn}>Button</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;
