import styles from '../../styles/components/SectionHeading.module.scss';

function SectionHeading({ children, modifier = '', style = {} }: any) {
  return (
    <h2 style={style} className={`${styles.heading} ${styles[modifier]}`}>
      {children}
    </h2>
  );
}

export default SectionHeading;
