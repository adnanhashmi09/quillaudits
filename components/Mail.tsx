import styles from '../styles/components/Mail.module.scss';

import { BsCheckCircleFill } from 'react-icons/bs';

function Mail() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <figure>
            <img
              src="/hashing-bits.svg"
              loading="lazy"
              alt="hashing bits logo"
            />
          </figure>
          <p className={styles.main}>
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to
            your Inbox.
          </p>
          <p className={styles.secondary}>
            Explore our weekly newsletter: HashingBits. Stay updated on
            everything we're publishing. Stand a step ahead.
          </p>
          <form>
            <input type="email" placeholder="example@gmail.com" />
            <div className={styles.msg}>
              <BsCheckCircleFill
                className={styles.icon}
                style={{ color: '#29D089' }}
              />
              <p>
                Your email has been successfully registered, headlines will be
                sent to you soon.
              </p>
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <figure>
            <img src="/mail.svg" loading="lazy" alt="mail svg" />
            <img src="/big-mail.svg" loading="lazy" alt="mail svg" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Mail;
