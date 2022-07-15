// styles
import styles from '../styles/components/Navbar.module.scss';
import { IoMenuOutline } from 'react-icons/io5';
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="#!">QuillAudits</a>
        </div>
        <div className={styles.hamburger}>
          <IoMenuOutline style={{ color: '#fff', fontSize: '2.8rem' }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
