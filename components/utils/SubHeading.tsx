import styles from '../../styles/components/SectionHeading.module.scss';

function SubHeading({ children }: any) {
  return <h3 className={styles.subHeading}>{children}</h3>;
}

export default SubHeading;
