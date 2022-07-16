import styles from '../../styles/components/SectionHeading.module.scss';

function SubHeading({ children, modifier = '' }: any) {
  return (
    <h3 className={`${styles.subHeading} ${styles[modifier]}`}>{children}</h3>
  );
}

export default SubHeading;
