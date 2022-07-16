import styles from '../styles/components/Portfolio.module.scss';

function PortfolioCard() {
  return (
    <div className={styles.card}>
      <figure>
        <img src="/workBook.png" alt="workbook" loading="lazy" />
      </figure>
      <p>StackOS Audit Report</p>
      <div className={styles.btnContainer}>
        <div className={styles.btn}>Button</div>
        <div className={styles.btn}>Button</div>
      </div>
    </div>
  );
}

export default PortfolioCard;
