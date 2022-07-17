// styles
import styles from '../styles/components/Navbar.module.scss';
import { IoMenuOutline, IoChevronDown } from 'react-icons/io5';
import Link from 'next/link';
import Button from './utils/Button';
function Navbar({ isVisible }: { isVisible: boolean }) {
  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="#!">QuillAudits</a>
        </div>
        <div className={styles.hamburger}>
          <IoMenuOutline style={{ color: '#fff', fontSize: '2.8rem' }} />
        </div>
        <ul className={styles.navList}>
          <a>
            Audit Services
            <IoChevronDown
              style={{
                color: 'inherit',
                fontSize: '1.5rem',
                marginLeft: '1rem',
              }}
            />
            <ul className={styles.dropdown} style={{ display: 'none' }}>
              <Link href="#" passHref>
                <li>
                  <a>Ethereum Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Polygon Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Solana Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Binance Smart Chain Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Tezos Audit</a>
                </li>
              </Link>
            </ul>
          </a>
          <Link href="#" passHref>
            <a>Pricing</a>
          </Link>
          <Link href="#" passHref>
            <a>Blogs</a>
          </Link>
          <a>
            Resources
            <IoChevronDown
              style={{
                color: 'inherit',
                fontSize: '1.5rem',
                marginLeft: '1rem',
              }}
            />
            <ul className={styles.dropdown} style={{ display: 'none' }}>
              <Link href="#" passHref>
                <li>
                  <a>Ethereum Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Polygon Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Solana Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Binance Smart Chain Audit</a>
                </li>
              </Link>
              <Link href="#" passHref>
                <li>
                  <a>Tezos Audit</a>
                </li>
              </Link>
            </ul>
          </a>
          <Button modifier="small" type="button" href="#">
            Portfolio
          </Button>
          <Button modifier="small" type="button" href="#">
            Request an Audit
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
