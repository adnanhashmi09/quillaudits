import styles from '../../styles/components/SectionHeading.module.scss';

function SectionHeading({ children }: any) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default SectionHeading;
