import Link from 'next/link';
import styles from '../styles/components/Footer.module.scss';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.one}>
          <h3>Parent Company</h3>
          <Link href="#" passHref>
            <figure>
              <img src="/quillHash.svg" alt="quillHash logo" loading="lazy" />
            </figure>
          </Link>
          <p>
            Quillhash delivers enterprise grade blockchain technology to leading
            companies worldwide.
          </p>
          <div className={styles.dropdown}>
            <select>
              <option value="Option 1">ENG</option>
              <option value="Option 2">2nd Option</option>
              <option value="Option 3">Option Number 3</option>
            </select>
          </div>
        </div>
        <div className={styles.two}>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>Careers</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>Blockchain Security CTF</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>QuillAudits Partner Program</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>Referral Program</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.three}>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="#" passHref>
                <a>Smart Contract Auditing</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>Blockchain Pen Testing</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>Due Diligence</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.four}>
          <h4>Contact Us</h4>
          <p>
            LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF
            Phase1, Sector 28, Gurugram, Haryana - 122002
          </p>
          <p className={styles.email}>
            <HiOutlineMail
              style={{ marginRight: '1rem', fontSize: '1.8rem' }}
            />
            contact@quillaudits.com
          </p>
        </div>
        <div className={styles.five}>
          <h4>Join our Journey</h4>
          <div className={styles.imagesLogo}>
            <Link href="#" passHref>
              <img src="/facebook.svg" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/twitter.svg" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/linkedin.svg" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/instagram.svg" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/telegram.png" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/reddit.png" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/social.png" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/discord.svg" alt="facebook logo" loading="lazy" />
            </Link>
            <Link href="#" passHref>
              <img src="/youtube.svg" alt="facebook logo" loading="lazy" />
            </Link>
          </div>
        </div>
        <div className={styles.six}>
          <p>
            All Rights Reserved. © Copyright 2022. QuillHash Technologies
            Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
