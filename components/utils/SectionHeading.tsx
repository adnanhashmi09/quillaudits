import styles from '../../styles/components/SectionHeading.module.scss';

function SectionHeading({ children, modifier = '' }: any) {
  return (
    <h2 className={`${styles.heading} ${styles[modifier]}`}>{children}</h2>
  );
}

export default SectionHeading;
