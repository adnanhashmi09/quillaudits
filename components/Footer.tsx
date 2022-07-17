import Link from 'next/link';
import styles from '../styles/components/Footer.module.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';

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
            <Dropdown />
          </div>
          <div className={styles.flagContainer}>
            <img src="/chn.png" alt="china flag" loading="lazy" />
            <img src="/jpn.png" alt="japan flag" loading="lazy" />
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

function Dropdown() {
  const [img, setImg] = useState<string>('/eng.png');
  const [name, setName] = useState<string>('ENG');
  const [alt, setAlt] = useState<string>('UK flag');
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (e: any) => {
    setAlt(e.currentTarget.getAttribute('data-alt'));
    setImg(e.currentTarget.getAttribute('data-img'));
    setName(e.currentTarget.getAttribute('data-name'));
    setIsActive(false);
  };
  return (
    <div
      className={`${styles.dropdownContainer} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.selected}>
        <img src={img} alt={alt} loading="lazy" />
        <p>{name}</p>
      </div>
      <ul className={styles.option}>
        <li
          onClick={handleClick}
          data-img="/eng.png"
          data-name="ENG"
          data-alt="UK flag"
        >
          <img src="/eng.png" alt="UK flag" loading="lazy" />
          <p>ENG</p>
        </li>
        <li
          onClick={handleClick}
          data-img="/jpn.png"
          data-name="JPN"
          data-alt="Japan flag"
        >
          <img src="/jpn.png" alt="Japan flag" loading="lazy" />
          <p>JPN</p>
        </li>
        <li
          onClick={handleClick}
          data-img="/chn.png"
          data-name="CHN"
          data-alt="China flag"
        >
          <img src="/chn.png" alt="China flag" loading="lazy" />
          <p>CHN</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
